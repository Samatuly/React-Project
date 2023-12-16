import { collection, collectionGroup, getDocs } from "firebase/firestore";
import { db, firestore } from "../Firebase/Firebase";
onmessage = async function (event) {
  const collectionName = event.data.collection;
  try {
    const orgCollection = collection(firestore, collectionName);
    const orgSnapshot = await getDocs(orgCollection);
    const orgData = orgSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    postMessage({ success: true, data: orgData, error: false });
  } catch (error) {
    postMessage({ success: false, data: undefined, error: error.message });
  }
};
