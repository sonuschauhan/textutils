import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'black',
    //     color: 'white',
    //     border: "0.5px solid white"
    // });
    let myStyle={
        backgroundColor:props.mode==="dark"?"rgb(12 69 129 / 35)":"white",
        color:props.mode==="dark"?"white":"black",
        border:"1px solid",
        borderColor:"dark"?"white":"black"

    }
    
    return (

        <div className='container my-2' style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="flush-headingOne" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                             <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                             <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
