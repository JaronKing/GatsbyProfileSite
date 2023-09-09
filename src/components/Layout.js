import React, { useEffect }from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import SquareCircle from "./SquareCircle"

const Layout = ({ children }) => {
    const renderCircles = () => {
        let circles = [];
        const a = 100;
        for (let i = 1; i <= a; i++) {
            circles.push(<SquareCircle key={ i + "_circle"} index={i}/>);
        }
        return circles;
    };

    useEffect(() => {
        const contextDiv = document.querySelector(".context");
        const contextHeight = contextDiv.offsetHeight;

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
                            {
                                renderCircles()
                            }
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
