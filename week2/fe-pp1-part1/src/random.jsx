import React from "react";
import "./Random.css"

function Random(props) {

    const randomValue = Math.floor(
        Math.random() * (props.max - props.min + 1) + props.min
    );
    return (
        <div className="random">
            <p>
                Random Value between {props.min} and {props.max} {"==>"} <strong>{randomValue}</strong>
            </p>

        </div>

    );

}
export default Random