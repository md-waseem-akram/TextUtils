import React, {useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Initial text by default');

    const handleOnClickToUpper =()=>{
        console.log("Clicked on button"); 
        setText(text.toUpperCase());
        props.showAlert("Coverted to Uppercase", "success")
    }

    const handleOnClickToLower =()=>{
        console.log("Clicked on Buuton");
        setText(text.toLowerCase());
        props.showAlert("Coverted to Lowercase", "success")
    }

    const handleOnClickToClear =()=>{
        setText ('');
    }

    const handleOnChange = (event) => {
        setText (event.target.value);
    }

    return (
        <>
        <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'black', color : props.mode === 'light' ? 'black' : 'white'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickToUpper}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickToLower}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickToClear}>Clear Text</button>
        </div>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            
        </div>
        </>
    );
}