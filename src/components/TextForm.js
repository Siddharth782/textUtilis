import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("") // we can update value of text using setText and the intial value of text is what is inside useState.
    // upper one is a hook, hooks basically allow us to use functionalities of class based components without making class

    const handleUpClick = () => {
        // console.log("UpperCase button was sent");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleDownClick = () => {
        let newertext = text.toLocaleLowerCase();
        setText(newertext);
    }

    const cleared = () => {
        setText('');
    }

    const copied = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const myStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : 'grey',
        color:props.mode === 'dark' ? 'white' : 'black'
    }
    return (
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1>Enter text below</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label my-2">{props.heading}</label>
                <textarea className="form-control my-2" style={myStyle} id="myBox" placeholder='Enter your text here' value={text} onChange={handleOnChange} rows="5"></textarea>
                <button className="btn btn-primary mr-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={cleared}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={copied}>Copy Text</button>
            </div>
            <div className="my-3">
                <h2>Text Summary</h2>
                <p>This sentence has {text.split(" ").length} and {text.length} </p>
                <h2 className='my-2'>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}