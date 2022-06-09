import "./roadmap.css"
import { useState } from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Card from "./Card";
import { RightArrow, LeftArrow } from "./Arrows";

const getItems = () =>
    Array(15)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

export default function Roadmap() {
    const [items, setItems] = useState(getItems);

    const elemPrefix = "test";
    const getId = (index) => `${elemPrefix}${index}`;

    return (
        <div className="roadmap__main">
            <div className="roadmap__header">
                <h2>Product Roadmap</h2><span className="roadmap__easter__egg"></span>
            </div>
            <div className="roadmap__scroll">
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    options={{
                        ratio: 0.9,
                        // rootMargin: "5px",
                        // threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
                    }}
                >
                    {items.map(({ id }) => (
                        <Card
                            title={id}
                            itemId={id} // NOTE: itemId is required for track items
                            key={id}
                        />
                    ))}
                </ScrollMenu>
            </div>
        </div>
    )
}