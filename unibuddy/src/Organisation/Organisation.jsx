import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db, firestore } from "../Firebase/Firebase";
import './Organisation.css';

const Organisation = () => {
  const [organisations, setOrganisations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchOrganisations = async () => {
      const organisationCollection = collection(firestore, 'organisations');
      const organisationSnapshot = await getDocs(organisationCollection);
      const organisationData = organisationSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrganisations(organisationData);
    };

    fetchOrganisations();
  }, []);

  return (
    <div className="organization">
      <div className="organization-top">
        Organizations
      </div>
      <input
        className="organization-search"
        type="text"
        placeholder="Search by organization name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {organisations
        .filter((org) => {
          const searchTerms = searchQuery.toLowerCase().split(' ');
          return searchTerms.every((term) => org.name.toLowerCase().includes(term));
        })
        .map((org) => (
          <div className="organization-box" key={org.id}>
            <img className="organization-logo" src={org.logo} alt={org.name} />
            <h2>{org.name}</h2>
            <p>{org.description}</p>
            <p>Members: {org.numOfMembers}</p>
            <button className="organization-button">Join</button>
          </div>
        ))}
    </div>
  );
};

export default Organisation;
