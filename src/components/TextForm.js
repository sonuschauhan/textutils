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
    
    return (
        <>
        <div className='container' style={{
            color:props.mode==="dark"?"white":"black"
        }}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{
                    backgroundColor:props.mode==="dark"?"#00062c":"white",
                    color:props.mode==="dark"?"white":"black"
                    
                }}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
        </div>
        <div  className="container my-1" style={{
            color:props.mode==="dark"?"white":"black"
        }}>
            <h1>Your text summary</h1>
            {/* function is a method which is used on array which takes a function which returns true or false corresponding to the arrray element */}
            {/* <p>{text.split(" ").filter((element)=>{
                return element.length!==0;
            }).length} words and {text.length} characters</p> */}
            <p>{text.split(/\s+/).filter((element)=>{
                // regular expression / /
                return element.length!==0;
            }).length} words and {text.length} characters</p>
            <p>{.008*text.split(" ").filter((element)=>{
                return element.length!==0;
            }).length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>

    )
}
