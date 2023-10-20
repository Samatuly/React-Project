import React, {useState, useEffect} from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db, firestore } from "../../Firebase/Firebase";

const Food = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
      const fetchMenu = async () => {
        const menuCollection = collection(firestore, 'menu');
        const menuSnapshot = await getDocs(menuCollection);
        const menuData = menuSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMenu(menuData);
      };
  
      fetchMenu();
    }, []);

    return (
        <div className="section-center">
            {menu.map((menu) => {
                const { id, title, img, desc, price } = menu;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="menu-photo" />
                        <div className="menu-item-info">
                            <header>
                                <h4 className="menu-title">{title}</h4>
                                <h4 className="menu-price">${price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Food;