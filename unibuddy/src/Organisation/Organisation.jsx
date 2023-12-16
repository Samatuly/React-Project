import React, { useState, useEffect } from "react";
import { Search, SearchIcon } from "@mui/icons-material";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../Firebase/Firebase";
import "./Organisation.css";
import { useAuthDetails } from "../Login/useAuthDetailsHook";
import { AuthDetails } from "../Login/AuthDetails";

const Organisation = () => {
  const [organisations, setOrganisations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeButton, setActiveButton] = useState("all");
  const { authUser, userSignOut } = useAuthDetails();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrganisations = async () => {
      const worker = new Worker(
        new URL("./fetchOrganisations.worker.js", import.meta.url)
      );
      //Listen for messages in worker
      worker.onmessage = (event) => {
        const { success, data, error } = event.data;
        if (success) {
          setOrganisations(data);
          setLoading(false);
        } else {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
        worker.terminate();
      };
      // Send data to the worker
      worker.postMessage({ collection: "organisations" });
    };

    fetchOrganisations();
  }, []);
  const JoinOrg = async (orgId, orgName) => {
    try {
      // Step 2: Retrieve the user document based on the UID
      const userCollection = collection(firestore, "users");
      const userQuery = query(
        userCollection,
        where("userUID", "==", authUser.uid)
      );
      const userQuerySnapshot = await getDocs(userQuery);
      if (!userQuerySnapshot.empty) {
        // Assume the UID is unique, so there should be at most one matching document
        const userDoc = userQuerySnapshot.docs[0];

        // Step 3: Update the organisations array
        const currentOrganisations = userDoc.data().organisations || [];
        if (currentOrganisations.includes(orgName)) {
          console.log(
            "User is already a member of the specified organization."
          );
        } else {
          // Step 4: Update the organisations array
          const updatedOrganisations = [...currentOrganisations, orgName];

          // Step 5: Write the updated user document back to Firestore
          const userDocRef = doc(userCollection, userDoc.id);
          await updateDoc(userDocRef, { organisations: updatedOrganisations });

          //now update members counter
          const docRef = doc(firestore, "organisations", orgId);
          const docSnap = await getDoc(docRef);
          if (!docSnap.empty) {
            await updateDoc(docRef, {
              numOfMembers: docSnap.data().numOfMembers + 1,
              members: [...docSnap.data().members, authUser.uid],
            });
          }

          console.log("User's organisations updated successfully.");
        }
      } else {
        console.log("User not found with the specified UID.");
      }
    } catch (error) {
      console.error("Error updating document:", error.message);
    }
  };
  const filterOrganizations = () => {
    if (activeButton === "all") {
      return organisations;
    } else if (activeButton === "joined") {
      // Assuming you have a user ID, and organizations have a "members" field
      return organisations.filter((org) => org.members.includes(authUser.uid));
    }
  };
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <div className="organization">
      <div className="organization-top">Organizations</div>
      <div>
        <input
          className="organization-search"
          type="text"
          placeholder="Search by organization name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        <button
          className="organization-button filter"
          onClick={() => handleButtonClick("all")}
        >
          All
        </button>
        <button
          className="organization-button filter"
          onClick={() => handleButtonClick("joined")}
        >
          Joined
        </button>
      </div>
      {loading ? (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </h1>
      ) : (
        <div>
          {filterOrganizations()
            .filter((org) => {
              const searchTerms = searchQuery.toLowerCase().split(" ");
              return searchTerms.every((term) =>
                org.name.toLowerCase().includes(term)
              );
            })
            .map((org) => (
              <div className="organization-box" key={org.id}>
                <img
                  className="organization-logo"
                  src={org.logo}
                  alt={org.name}
                />
                <div className="under-box">
                  <h2>{org.name}</h2>
                  <p>{org.description}</p>
                  <p>Members: {org.numOfMembers}</p>
                </div>
                <button
                  className="organization-button"
                  onClick={() => JoinOrg(org.id, org.name)}
                >
                  Join
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Organisation;
