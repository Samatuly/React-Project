import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore'; // Import query and where functions
import { db, firestore } from "../../Firebase/Firebase";
import Categories from "./Categories";
import Food from "./Food";
import './menu.css'

const allCategories = ["all"];

function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    const fetchMenuFromFirestore = async (category) => {
        const menuCollection = collection(db, 'menu'); // Replace 'menu' with your Firestore collection name

        if (category === "all") {
            const querySnapshot = await getDocs(menuCollection);
            const menuData = [];
            querySnapshot.forEach((doc) => {
                menuData.push({ id: doc.id, ...doc.data() });
            });
            setMenuItems(menuData);
        } else {
            const q = query(menuCollection, where('category', '==', category));
            const querySnapshot = await getDocs(q);
            const menuData = [];
            querySnapshot.forEach((doc) => {
                menuData.push({ id: doc.id, ...doc.data() });
            });
            setMenuItems(menuData);
        }
    };

    useEffect(() => {
        setCategories(allCategories); // You may fetch categories here if needed
        fetchMenuFromFirestore("all"); // Fetch all menu items initially
    }, [db]);

    const filterItems = (category) => {
        setActiveCategory(category);
        fetchMenuFromFirestore(category);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2 className="menu-title">Menu List</h2>
                    <div className="underline"></div>
                </div>
                <Categories
                    categories={categories}
                    activeCategory={activeCategory}
                    filterItems={filterItems}
                />
                <div className="foods">
                    <Food items={menuItems}></Food>
                </div>
            </section>
        </main>
    );
}

export default Menu;
