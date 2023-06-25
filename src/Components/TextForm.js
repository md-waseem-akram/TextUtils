import React, {useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Initial text by default');

    const handleOnClickToUpper =()=>{
        console.log("Clicked on button"); 

        setText(text.toUpperCase());
    }

    const handleOnClickToLower =()=>{
        console.log("Clicked on Buuton");
        setText(text.toLowerCase());
    }

    const handleOnClickToClear =()=>{
        setText ('');
    }

    const handleOnChange = (event) => {
        setText (event.target.value);
    }

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClickToUpper}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleOnClickToLower}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleOnClickToClear}>Clear Text</button>
        </div>
        <div className="container">
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            
        </div>
        </>
    );
}