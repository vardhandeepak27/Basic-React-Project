import React,{useState} from 'react'

export default function Textform(props) {
   const handleUpClick=()=>{
        setText(text.toUpperCase())
    }

     const handleLowClick=()=>{
        setText(text.toLowerCase())
    }

    const handleRemoveText=()=>{
        setText("")
    }

     const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const[text,setText]=useState("")
  return (
      <>
      <div className="container">
      <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
  <button className="btn btn-primary m-3 " onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary m-3 " onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary m-3 " onClick={handleRemoveText}>Clear Text</button>
</div>
</div>

<div className="container">
  
  <h2>Your Text Summary</h2>
  <p>No of characters are {text.length} and No of words are {text.split(" ").length}</p>
  <h2>Preview</h2>
  <p>{text}</p>

</div>
</>

  )
}
