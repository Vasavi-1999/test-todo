import { useState } from 'react';


function Example() {
const [name, setName] = useState('');
const [age, setAge] = useState();
const [rows, setRows]=useState([
    {
        name: 'Vasavi',
        age: '25',
    }
]);

return (
    <div>
    <h1>Employee Details</h1>
    {rows.map((row) => {
      return(
        <div>
        <p>{row.name}</p>
        <p>{row.age}</p>
        </div>
      )  
    })}
    <button onClick={handleSubmit}>Add Employees</button>
    </div>
)

}

export default Example;