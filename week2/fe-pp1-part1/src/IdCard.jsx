import React from "react";
import "./Idcard.css"


function IdCard(props) {
    return (
        <div className="id-card">
            <img src={props.picture} alt="" />
            <div className="id-card-details">
                {/* <h2><strong>ID </strong></h2> */}
                <p><strong>First Name:</strong> {props.firstName}</p>
                <p><strong>Last Name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}cm</p>
                <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
            </div>

        </div>
    );
}

export default IdCard;