import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <div>
                <Link to="/">Home</Link>
                { children }
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
