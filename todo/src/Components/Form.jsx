import { useState } from "react";

const Form = () => {

    const [msg1, setMsg1] = useState(10);
    const [msg2, setMsg2] = useState(2);
    const [result,setResult] = useState();
    const [operation, setOperation] =useState();

    const Res = () => {
        if(operation === 'Plus') {
             setResult(parseInt(msg1) + parseInt(msg2));
        }
        else if(operation === 'Minus') {
             setResult(parseInt(msg1) - parseInt(msg2));
        }
        else if(operation === 'Product') {
             setResult(parseInt(msg1) * parseInt(msg2));
        }
        else if(operation === 'Division') {
             setResult(parseInt(msg1)/parseInt(msg2));
        }
        
    };
    
return (
    <div>
    <h1>Hello Form</h1>
    <input type= 'number' value = {msg1} onChange={(event) => setMsg1(event.target.value)}/>
    <input type= 'number' value = {msg2} onChange={(event) => setMsg2(event.target.value)}/>
    <br/>
    <button onClick={() => {
        setOperation('Plus')
        Res()
    }}>Add</button>
     <br/>
     <button onClick={Res('Minus')}>Subtract</button>
     <br/>
     <button onClick={Res('Product')}>Mul</button>
     <br/>
     <button onClick={Res('Division')}>Div</button>
    <h1>{result}</h1>
    </div>
)

}

export default Form;