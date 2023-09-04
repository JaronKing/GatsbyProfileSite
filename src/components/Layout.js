import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                { children }
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
