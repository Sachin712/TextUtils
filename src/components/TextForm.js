import React, { useState } from "react";

export default function TextForm(props) {
  const toUpperCase = () => {
    // console.log("UpperCase btn was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };

  const toLowerCase = () => {
    // console.log("UpperCase btn was clicked.");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success")
  };

  const changeHandler = (event) => {
    //console.log("Handled change in textarea.");
    setText(event.target.value);
  };

  const clearTA = () => {
    setText("");
  };


  const [text, setText] = useState("Enter text here: ");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0f0b39" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={changeHandler}
            id="myBox"
            rows="8"
            value={text}
            onClick={clearTA}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#0f0b39",
            }}
          ></textarea>
        </div>
        <button className="btn-primary mx-1 my-1" onClick={toUpperCase} disabled={text.length===0}>
          Convert to Uppercase
        </button>
        <button className="btn-primary mx-1 my-1" onClick={toLowerCase} disabled={text.length===0}>
          Convert to Lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#0f0b39" }}
      >
        <h1>Your text summary</h1>
        <p>
          Words: {text.split(" ").filter((element)=>{return element.length!==0}).length} and Characters: {text.length}
          
        </p>
        <p>
          It takes {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this text.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
