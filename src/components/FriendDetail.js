import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetail = () => {
    const { friendID } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
    const [friendDetails, setfriendDetails] = useState({});
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setfriendDetails(data));
    }, [url]);
    return (
        <div>
            <h1>{friendDetails.name}</h1>
            <h1>{friendDetails.id}</h1>
            <h3>{friendDetails.website}</h3>
            <p>Works At {friendDetails.company?.name}</p>
        </div>
    );
};

export default FriendDetail;
