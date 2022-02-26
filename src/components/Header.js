import React from "react"

const Header =() => {

    return (
        <header className="header">
            <img className="header-img" src={require("../images/troll-face.png")} alt="logo" />
            <h2 className="header-title">Meme generator</h2>
            <h4 className="header-project">React Course - project 3</h4>

        </header>
    )
}

export default Header;