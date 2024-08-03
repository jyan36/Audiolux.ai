import React, { useState } from "react";

export const Hi = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    const handleSubmit = (event) => {
        console.log("SUBMITTED");
        console.log(inputValue);
    };


    return <div 
    className="text-red-500">
      <h1>Input Lyrics</h1>
      <div className="text-black-500">
      <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your lyrics"
        /> <br></br>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <br></br>
    </div>
}
export default Hi;