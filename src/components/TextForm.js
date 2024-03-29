import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("") // we can update value of text using setText and the intial value of text is what is inside useState.
    // upper one is a hook, hooks basically allow us to use functionalities of class based components without making class

    const [intialtext, setintialtext] = useState("");
    const handleUpClick = () => {
        // console.log("UpperCase button was sent");
        let newText = text.toUpperCase();
        setintialtext(newText)
        props.textalert("Text converted to uppercase", "success")

    }

    const func = (text) => {
        let arr = text.split(/\s+/) // going to split on basis of white spaces i.e. spaces or next line button...

        return arr.filter(function (geeks) {
            return geeks !== "";
        })
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
        setintialtext(event.target.value)
    }

    const handleDownClick = () => {
        let newertext = text.toLocaleLowerCase();
        setintialtext(newertext);
        props.textalert("Text converted to lowercase", "success")
    }

    const cleared = () => {
        props.textalert("Text cleared", "success")
        setintialtext('');
        setText('')
    }

    const copied = () => {
        // var texty = document.getElementById("myBox"); 
        // text.select();
        // navigator.clipboard.writeText(texty.value); 
        // document.getSelection().removeAllRanges();

        navigator.clipboard.writeText(text) // only this line is enough
        props.textalert("Text copied", "success")
    }

    const myStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : '#0a776c',
        color: props.mode === 'dark' ? 'white' : 'black'
    }

    return (
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1>Enter text below</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label my-2">{props.heading}</label>
                <textarea className="form-control mx-1  my-1" style={myStyle} id="myBox" placeholder='Enter your text here' value={text} onChange={handleOnChange} rows="5"></textarea>
                <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick} >Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={cleared}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copied}>Copy Text</button>
            </div>
            <div className="my-3">
                <h2>Text Summary</h2>
                <p>This sentence has {(func(text)).length} and {text.length} </p>
                <h2 className='my-2'>Preview</h2>
                <p>{intialtext}</p>
            </div>
        </div>
    )
}
