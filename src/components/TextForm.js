import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        console.log("upcase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted To Uppercase","success")
    }
    const handleLoClick = ()=>{
        console.log("upcase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted To Lowercase","success")
    }
    
    const handleOnChange = (event)=>{
        console.log("change takes place");
        setText(event.target.value);
    }
    const wordCount=(text)=>{
        if(text.length===0){
            return 0;
        }
        else{
          return  text.split(" ").length;
        }
    }
    return (
        <>
        <div className='container' style={{
            color:props.mode==="dark"?"white":"black"
        }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{
                    backgroundColor:props.mode==="dark"?"#00062c":"white",
                    color:props.mode==="dark"?"white":"black"
                    
                }}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
        </div>
        <div className="container my-1" style={{
            color:props.mode==="dark"?"white":"black"
        }}>
            <h1>Your text summary</h1>
            <p>{wordCount(text)} words and {text.length} characters</p>
            <p>{.008*wordCount(text)} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text to preview here"}</p>
        </div>
        </>

    )
}
