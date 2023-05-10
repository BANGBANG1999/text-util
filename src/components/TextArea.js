import React, {useState} from 'react'


export default function TextArea({heading, uppercaseConverter, lowercaseConverter, mode, showAlert}) {
    document.title = "TextUtils"
    let [text, updateText] = useState("")

    const addNewText = (event) => {
        // updateText(event.target.value);
        let newText = event.target.value;
        updateText(newText);
    }

    const changeToUpperCase = () => {
        let upperCaseText = text.toUpperCase();
        updateText(upperCaseText)
        showAlert("success", "Converted to upper case")
    }

    const changeToLowerCase = () => {
        let lowerCaseText = text.toLowerCase();
        updateText(lowerCaseText)
        showAlert("success", "Converted to lower case")
    }

    const copyToClipboard = () => {
        let copyText = text;
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);
        // alert("Copied to clipboard")
        showAlert("success", "Copied to clipboard")
    }  
    // function countWords(text) {
    //     const arr = text.split(' ');
      
    //     document.getElementById("h").innerHTML = "WordsCount: " + arr.filter(word => word !== '').length;
    //   }
    return (
        <>
        <div className="container" style={{color: mode === "dark" ? "white" : "black"}}>
            <h1>{heading}</h1>
            <div className="form-group" >
                <textarea className="form-control" id="textArea" rows="8" value={text} onChange={addNewText} style={{color: mode === "dark" ? "white" : "black", backgroundColor: mode === "dark" ? "grey" : "white"}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={changeToUpperCase}>{uppercaseConverter}</button>
            <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>{lowercaseConverter}</button>
            <button className="btn btn-primary" onClick={copyToClipboard}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: mode === "dark" ? "white" : "black"}}>
            <h2>Your text summary</h2>
            <p id="h" className="my-4">WordsCount: {text.length === 0 ? '0' : text.trim().split(/\s+/).length}<br /> Characters Count: {text.length} <br />
             Minutes to read: {0.008 * text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
