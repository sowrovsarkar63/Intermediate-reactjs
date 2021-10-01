import React from "react";

function Friend(props) {
    const { name, email, address } = props.friends;
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

    return (
        <section style={{ display: "flex", justifyContent: "center" }}>
            <div style={StyleFriend}>
                <h2>{name}</h2>
                <h3>{email}</h3>
                <p>{address.city}</p>
            </div>
        </section>
    );
}

export default Friend;
