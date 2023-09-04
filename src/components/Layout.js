import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main>
                { children }
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
