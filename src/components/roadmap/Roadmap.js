import "./roadmap.css"
import { useState } from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { RightArrow, LeftArrow } from "./Arrows";
import Card from "./Card";
import data from "./roadmap.json";

export default function Roadmap() {
    const [items, setItems] = useState(data.roadmapData);

    return (
        <div className="roadmap__main">
            <div className="roadmap__container">

                <div className="roadmap__header">
                    <h2>Product Roadmap</h2><span className="roadmap__easter__egg"></span>
                </div>
                <div className="roadmap__scroll">
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        options={{
                            ratio: 0.9,
                            // rootMargin: "10px",
                            // threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
                        }}
                    >
                        {items.map((item) => (
                            <Card
                                key={item.id}
                                itemId={item.id}
                                title={item.title}
                                time={item.time}
                                description={item.description}
                            />
                        ))}
                    </ScrollMenu>
                </div>
            </div>
        </div>
    )
}