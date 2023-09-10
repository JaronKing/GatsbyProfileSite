import React from "react"

const SquareCircle = ({ index }) => {
    const left = Math.floor(Math.random() * 100) + "%";
    const squarePerimeter = Math.floor(Math.random() * 60) + 20 + "px";
    const height = Math.floor(Math.random() * 40) + 20 + "px";
    const animationDelay = -1 *  Math.floor(Math.random() * 10) + "s";
    const animationDuration = Math.floor(Math.random() * 10) + 10 +"s";
    const styles = {
        main: {
            "left": left,
            "width": squarePerimeter,
            "height": squarePerimeter,
            "animationDelay": animationDelay,
            "animationDuration": animationDuration,
        }
    }
    return (
        <li className="circle" style={ styles.main }></li>
    )
}

export default SquareCircle
