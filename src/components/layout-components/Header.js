import React, { useState } from "react";

function Header() {
    const [username, setUsername] = useState("User Name");

    return (
        <div>
            <h1 className="text-center">CAR RENTAL SERVICE</h1>
            <h6>Welcome {username}</h6>
            <div className="d-flex flex-row-reverse">
                <input className="" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Header;