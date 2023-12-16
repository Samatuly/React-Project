import { collection, collectionGroup, getDocs } from "firebase/firestore";
import { db, firestore } from "../Firebase/Firebase";
onmessage = async function (event) {
  const collectionName = event.data.collection;
  try {
    const bookCollection = collection(firestore, collectionName);
    const booksSnapshot = await getDocs(bookCollection);
    const bookData = booksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    postMessage({ success: true, data: bookData, error: false });
  } catch (error) {
    postMessage({ success: false, data: undefined, error: error.message });
  }
};
