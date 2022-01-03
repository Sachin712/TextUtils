import React, { useState } from "react";

export default function TextForm(props) {
  const toUpperCase = () => {
    // console.log("UpperCase btn was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    // console.log("UpperCase btn was clicked.");
    let newText = text.toLowerCase();
    setText(newText);
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
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={changeHandler}
            id="myBox"
            rows="8"
            value={text}
            onClick={clearTA}
          ></textarea>
        </div>
        <button className="btn-primary" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn-primary mx-3" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          Words: {text.split(" ").length} and Characters: {text.length}
        </p>
        <p>
          It takes {0.008 * text.split(" ").length} minutes to read this text.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
