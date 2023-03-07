import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

    const yellowpressed = () =>{
        document.body.style.backgroundColor = 'yellow'
    }
    const redpressed = () =>{
        document.body.style.backgroundColor = 'red'
    }
    const greenpressed = () =>{
        document.body.style.backgroundColor = 'green'
    }


    return (
        // {} allows us to use Javascript,` allow to use template literal, $ aloows us to pass values in there
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* // <nav className = "navbar navbar-expand-lg navbar-light bg-light">  */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form> */}

                    {/* 1st method */}
                    <button className="btn btn-success mx-1" style={{height:'25px'}} onClick={greenpressed}></button>
                    <button className="btn btn-warning mx-1" style={{height:'25px'}} onClick={yellowpressed}></button>
                    <button className="btn btn-danger mx-1" style={{height:'25px'}} onClick={redpressed}></button>


                    {/* 2nd method  */}
                    {/* <button className="btn btn-warning mx-1" onClick={()=>{props.others('yellow')}} style={{height:'25px'}}></button>  */}
                    {/* we gave a function inside onClick not a function call */}
                    {/* <button className="btn btn-success mx-1" onClick={()=>{props.others('green')}} style={{height:'25px'}}></button> */}
                    {/* <button className="btn btn-danger mx-1" onClick={()=>{props.others('red')}} style={{height:'25px'}}></button> */}



                    {/* 3rd method */}
                    {/* <div className="mx-1" style={{height:'25px', width:'25px', backgroundColor:'red', cursor:'pointer'}} onClick={()=>props.third('danger')}></div> */}
                    {/* <div className="mx-1" style={{height:'25px', width:'25px', backgroundColor:'green',cursor:'pointer'}} onClick={()=>props.third('success')}></div> */}
                    {/* <div className="mx-1" style={{height:'25px', width:'25px', backgroundColor:'yellow',cursor:'pointer'}} onClick={()=>props.third('warning')}></div> */}

                </div>
                <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggler} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string } // ensure that I only send string as an input to title & other props
// .isRequired will throw an error when we don't send a value in title (won't shpw the error if defaultProps is used)


Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "Write about here"
} // if i forget to write about anything then default values here