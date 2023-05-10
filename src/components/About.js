import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function About(props) {

    document.title = "TextUtils-About"

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    })

    const [btnText, setBtnText] = useState("Enable dark mode")

    let toggleStyle = () => {
        if (myStyle.backgroundColor === "black") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            })
            setBtnText("Enable dark mode")
            
        }
        else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "0.1px solid white"
            })
            setBtnText("Enable light mode")
            
        }
    }

   

    return (
        <div className='container'>

            <h2 className="my-4" id="about">About Us</h2>
            <div className="card my-4" style={myStyle}>
                <div className="card-header">
                    Featured
                </div>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item" style={myStyle} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit natus alias possimus quae numquam quaerat, eius dolore vel, earum ipsa hic officia, odio asperiores non ipsam illum repellat dolores cupiditate.</li>
                    <li className="list-group-item" style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reiciendis ipsam eius sit reprehenderit non ratione dicta et animi doloribus!</li>
                    <li className="list-group-item" style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quae commodi mollitia, facere voluptatem numquam minima minus fugiat saepe vero adipisci! Hic dolore deserunt quas!</li>
                </ul>
                <div className="container my-3">
                    <button type="button" onClick={toggleStyle} className={`btn btn-${props.btn}`}>{btnText}</button>
                </div>
            </div>
        </div>
    )
}

