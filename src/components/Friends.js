import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Friend from "./Friend";

function Friends(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users ")
            .then((res) => res.json())
            .then((data) => setFriends(data));
    }, []);

    return (
        <div>
            {friends.map((friend) => (
                <Friend key={friend.id} friends={friend}></Friend>
            ))}
        </div>
    );
}

export default Friends;
