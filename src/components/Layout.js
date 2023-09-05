import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main className="flex p-6 min-h-screen
                bg-gradient-to-r from-orange-400 to-orange-250">
                { children }
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
