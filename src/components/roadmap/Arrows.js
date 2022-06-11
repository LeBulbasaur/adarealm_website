import "./roadmap.css"
import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function LeftArrow() {
    const {
        // getItemById,
        getPrevItem,
        isFirstItemVisible,
        scrollToItem,
        visibleItemsWithoutSeparators,
        initComplete
    } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );
    React.useEffect(() => {
        // NOTE: detect if whole component visible
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

    // NOTE: for scroll 1 item
    const clickHandler = () => {
        const prevItem = getPrevItem();
        scrollToItem(prevItem?.entry?.target, "smooth", "start");
        // OR
        // scrollToItem(
        //   getItemById(visibleItemsWithoutSeparators.slice(-2)[0]),
        //   "smooth",
        //   "end"
        // );
    };

    return (
        disabled ? (
            <svg className="roadmap__arrow left__arrow__disabled" onClick={clickHandler} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#707070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 16L16 24L24 32" stroke="#707070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 24H16" stroke="#707070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ) : (
            <svg className="roadmap__arrow left__arrow__active" onClick={clickHandler} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#85B6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 32L32 24L24 16" stroke="#85B6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 24H32" stroke="#85B6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )

    );
}

export function RightArrow() {
    const {
        // getItemById,
        getNextItem,
        isLastItemVisible,
        scrollToItem,
        visibleItemsWithoutSeparators
    } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !visibleItemsWithoutSeparators.length && isLastItemVisible
    );
    React.useEffect(() => {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);

    // NOTE: for scroll 1 item
    const clickHandler = () => {
        const nextItem = getNextItem();
        scrollToItem(nextItem?.entry?.target, "smooth", "end");
        // OR
        // scrollToItem(
        //   getItemById(visibleItemsWithoutSeparators[1]),
        //   "smooth",
        //   "start"
        // );
    };

    return (
        disabled ? (
            <svg className="roadmap__arrow right__arrow__disabled" onClick={clickHandler} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#707070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 16L16 24L24 32" stroke="#707070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 24H16" stroke="#707070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ) : (
            <svg className="roadmap__arrow right__arrow__active" onClick={clickHandler} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#85B6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 32L32 24L24 16" stroke="#85B6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 24H32" stroke="#85B6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    );
}