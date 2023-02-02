import React from "react"
import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <footer id="sticky-footer">
                    <div className="container text-center">
                        <p>Copyright &copy; Adrian Ciochoń</p>
                    </div>
                </footer>
        </div>
        
    )
}

export default Footer