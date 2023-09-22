import React, { useState } from "react";

function HelloWorlds(){
    const [button, setButton] = useState("Appuie sur le bouton")
    const Click = button => setButton("Bon toutou")
    return(
        <button onClick={Click}>
            {button}
        </button>
    )
}

export default HelloWorlds