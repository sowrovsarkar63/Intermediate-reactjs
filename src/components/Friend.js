import React from "react";
import { Link } from "react-router-dom";

function Friend(props) {
    const { id, name, email, address } = props.friends;
    const StyleFriend = {
        textAlign: "center",
        width: "70%",

        backgroundColor: "#05225c",
        color: "white",
        border: "1px solid red",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
    };
    const url = `/friend/${id}`;
    return (
        <section style={{ display: "flex", justifyContent: "center" }}>
            <div style={StyleFriend}>
                <h2>{name}</h2>
                <h3>{email}</h3>
                <p>{address.city}</p>
                <Link to={url}>visit me</Link>
            </div>
        </section>
    );
}

export default Friend;
