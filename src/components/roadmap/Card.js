import "./roadmap.css"
import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function Card({ title, itemId, time, description }) {
    const visibility = React.useContext(VisibilityContext);

    const visible = visibility.isItemVisible(itemId);

    return (
        <div
            role="button"
            tabIndex={0}
            className="menu__item"
        >
            <div className="card">
                <h3>{title}</h3>
                <h4>{time}</h4>
                <p>{description}</p>
            </div>
            <div className="triangle__container">
                <div className="bottom__triangle" />
            </div>
            <div className="line__container">
                <hr />
                <div className="line__triangle" />
            </div>
        </div>
    );
}
