import React, { useState } from 'react'

export default function About(props) {

    // not in final

    // const [text, setText] = useState("En")
    // const [COLOUR, setCOLOUR] = useState("Black")
    // const [BGCOLOUR, setBGCOLOUR] = useState("White")
    // const [ABORDER, setABORDER] = useState("")
    // const toggle = () => {
    //     if (text === "En") {
    //         setText("Dis");
    //         setBGCOLOUR("Black")
    //         setCOLOUR("White")
    //         setABORDER("1px solid white")
    //     }
    //     else {
    //         setText("En")
    //         setBGCOLOUR("White")
    //         setCOLOUR("Black")
    //         setABORDER("")
    //     }
    // }

    // let mystyle = { // it's a js object
    //     color: COLOUR,
    //     backgroundColor: BGCOLOUR,
    //     border: ABORDER
    // }

    // other way
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [text,setText] = useState('Disable')

    // const toggleMode = () => {

    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setText("Enable")
    //     }

    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setText("Disable")
    //     }

    // }


    let mystyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#042743':'white'
    }
    // final mystyle

    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>About Us</h1>
                <div className="accordion" id="accordionExample">

                    <div className="accordion-item mt-2" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" >
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                History
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-2" >
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" >
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="container">
                <button className="btn btn-primary my-2" onClick={toggle}>{text}able Dark Mode</button>
            </div> */}
        </>
    )
}
