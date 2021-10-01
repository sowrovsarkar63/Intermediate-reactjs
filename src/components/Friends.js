import React from "react";
import { useState } from "react/cjs/react.development";

function Friends(props) {
    const [users, setusers] = useState([]);

    return (
        <div>
            <h1>This is from friend component </h1>
        </div>
    );
}

export default Friends;
