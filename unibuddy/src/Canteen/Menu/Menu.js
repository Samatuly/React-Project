import React, {useState} from "react";
import items from './data'
import Categories from "./Categories";
import Food from "./Food";
import './menu.css'

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function Menu(){
    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return(
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
    )
}

export default Menu;