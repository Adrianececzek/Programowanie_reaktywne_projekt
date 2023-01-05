import React from "react"
import "./Header.css"
import Login from "./Login"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img className="logo" src="http://www.topwebvietnam.com/uploads/files/quang_cao_fanpage_top_web_cao_cap_2.png" />
                <h3>TopWeb</h3>
            </div>
            <div className="header_center">
                <ul className="list">
                    <li><a href="/Popular">Popular</a></li>
                    <li><a href="/Top">Top</a></li>
                    <li><a href="/Upcoming">Upcoming</a></li>
                </ul>
            </div>
            <div className="header_right">
                <ul className="list">
                <li><a href="/Login">Login</a></li>
                <li><a href="/Register">SignUp</a></li>
                </ul>
            </div>
            <div className="header right">

            </div>
        </div>
    )
}

export default Header