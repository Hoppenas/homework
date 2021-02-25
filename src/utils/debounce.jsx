import React from "react";

const debounce = (fn, delay) => {
    let timeoutID;
    return function(...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export default debounce;