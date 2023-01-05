import React from "react"
import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
                    <div className="container text-center">
                        <small>Copyright &copy; Adrian Ciochoń</small>
                    </div>
                </footer>
        </div>
        
    )
}

export default Footer