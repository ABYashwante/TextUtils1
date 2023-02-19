
import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const ConvertToUpper = () => {
    // console.log("Clicked");
    let data=text.toUpperCase();
    setText(data);
    
    //not working
    props.showAlert("Coverted to upper case", "Success");
  };
  
  //   text is the variable and setText is the function which will be used to change the value of variable text 
  const handleChange = (event)=> {
    setText(event.target.value);
  }
  
  const [text, setText] = useState("Click Here");

return (
    <div>
      <form>
        <div className="form-group my-3">
          <h2>{props.heading}</h2>
          <textarea
            onChange={handleChange}
            type="file"
            className="form-control-file"
            value={text}
            id="exampleFormControlFile1"
          />
        </div>
      </form>
      <button className="btn btn-primary" onClick={ConvertToUpper}>
        Convert To Uppercase
      </button>
    </div>
  );
}















// import React, {useState} from "react";

// export default function TextForm(props) {

//   const handleUpCkick = () => {
//     let newtext = Text.toUpperCase();
//     setText(newtext)
//   }

//   // mandatory 
//   const handleOnChange = (event) => {
//     setText(event.target.value);  
//   }

//   // useState syntax
//   const [Text, setText] = useState("");

//   return (
//     //if we want more than one div then use <>  </>
//     <> 
//     <div className="container">
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//         <textarea className="form-control" value={Text}  onChange={handleOnChange}  id="myBox" rows="8"></textarea>
//       </div>
//       <button className="btn btn-primary" onClick={handleUpCkick}>Convert to upper case</button>
//     </div>

//     <div className="container my-3">
//       <h1>your text summary</h1>
//       <p>{Text.split(" ").length}words and {Text.length} characters</p>
//     </div>
//   </>
//   )
// }