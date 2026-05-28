import React, {useState} from "react";

function Divide(){
const [num1, setNum1]=useState("");
const [num2, setNum2]=useState("");
const [result,setResult]=useState("");
const [hasError, setHasError]=useState("");

if(hasError){
    throw new Error("Cannot Divide by Zero");
}
const handleDivide=()=>{
    const a=Number(num1);
    const b=Number(num2);
    if(b===0){
        setHasError(true);
        return;
    }
    setResult(a/b);
};
return(
    <div>
        <h2>Divide app</h2>
        <input type="number" placeholder="First Number" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <br></br>
                <input type="number" placeholder="Second Number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
                <br></br>
                <button onClick={handleDivide}>Divide</button>
                <h3>Result: {result}</h3>

    </div>
);
}
export default Divide;