import "./roadmap.css"
import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function Card({ title, itemId }) {
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
                <h4>Mid January 2022</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi vel consectetur euismod.
                </p>
            </div>
            <div className="triangle__container">
                <div className="bottom__triangle"/>
            </div>
            <div className="line__container">
                <hr />
                <div className="line__triangle"/>
            </div>
        </div>
    );
}
