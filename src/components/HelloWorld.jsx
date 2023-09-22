import React, { useState } from 'react'

function HelloWorld() {
    const [button, setButton] = useState("Continuer")
    const handleClick = () => setButton("Merci d'avoir appuyer sur le bouton")
    return (
        <button onClick={handleClick}>{button}</button>
    )
}

export default HelloWorld