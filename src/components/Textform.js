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

    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const[text,setText]=useState("")
  return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
  <button className="btn btn-primary m-3 " onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary m-3 " onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary m-3 " onClick={handleRemoveText}>Clear Text</button>
  <button className="btn btn-primary m-3 " onClick={handleCopy}>Copy Text</button>
    <h2>Your Text Summary</h2>
  <p>No of characters are {text.length} and No of words are {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
  <h2>Preview</h2>
  <p>{text}</p>

</div>
</div>

</>

  )
}
