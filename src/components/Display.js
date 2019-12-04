import React from 'react'
import {
    Link
  } from "react-router-dom";



function Display()  {
    return (
        <div>
            <nav className="navbar navBack">
                <div className="container" id="newCont">
                <Link to="/"><span className="display-logo">Sittr</span></Link>
                <ul className="nav">
                    <li ><input className="input" type="text" name="zipCode" maxLength="5" size="5" placeholder="90095"></input></li>
                    <li >
                        <select className="select">
                            <option className="options" value="5">5 miles</option>
                            <option className="options" value="10">10 miles</option>
                            <option className="options" value="15">15 miles</option>
                        </select>
                    </li>
                    <button className="newBtn"><i className="fas fa-search"></i></button>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Display;