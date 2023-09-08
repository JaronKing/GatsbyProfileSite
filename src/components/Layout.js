import React, { useEffect }from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    const numrows = 40;
    const rows = [];
    for (let i = 0; i < numrows; i++) {
        rows.push(<li key={i} />);
    }
    useEffect(() => {
        console.log('mount');
        const contextDiv = document.querySelector(".context");

        const contextHeight = contextDiv.offsetHeight;
        console.log(contextHeight);

        var areaDiv = document.querySelector(".area");
        areaDiv.style.height = contextHeight + "px";

        var circlesDiv = document.querySelector(".circles");
        circlesDiv.style.height = contextHeight + "px";
    }, []);
    return (
        <div>
            <Header/>
            <main className="flex min-h-screen">
                <div className="area">
                    <ul className="circles">
                        { rows }
                        </ul>
                </div>
                <div className="context p-6">
                    { children }
                </div>

            </main>
            <Footer/>
        </div>

    )
}

export default Layout
