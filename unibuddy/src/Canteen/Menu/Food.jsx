import React from "react";

const Food = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((item) => {
                const { id, title, img, desc, price } = item;
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