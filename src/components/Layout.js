import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    const numrows = 40;
    const rows = [];
    for (let i = 0; i < numrows; i++) {
        rows.push(<li key={i} />);
    }
    return (
        <div>
            <Header/>
            <main className="flex min-h-screen">

                <div className="context">
                    { children }
                </div>

                <div className="area">
                    <ul className="circles">
                        { rows }
                        </ul>
                </div>
            </main>
            <Footer/>
        </div>

    )
}

export default Layout
