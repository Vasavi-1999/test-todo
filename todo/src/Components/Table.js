import { useState } from "react";

function Table() {

  const [persons, setPersons] = useState([
    {
      No: '',
      FirstName: '',
      LastName: '',
      Age: '',
    }
  ])
  const employeeDetails = [
    {
      No: 1,
      FirstName: "Tharun",
      LastName: "Chinni",
      Age: 30,
    },
    {
      No: 2,
      FirstName: "Vasavi",
      LastName: "Chinni",
      Age: 25,
    },
  ];

  const addfields = () => {
    let object = {
      No: '',
      FirstName: '',
      LastName: '',
      Age: '',
    }
    setPersons([persons,object])
  }
  return (
    <div>
      <h1>Employee Details</h1>
      <table border={"1"}>
        <tr>
          <th>S.no</th>
          <th>Firstname</th>
          <th>LastName</th>
          <th>Age</th>
        </tr>

        {employeeDetails.map((employee) => (
          <tr>
            <td>{employee.No}</td>
            <td>{employee.FirstName}</td>
            <td>{employee.LastName}</td>
            <td>{employee.Age}</td>
          </tr>
        ))}
      </table>
      <br/>
      <button onClick={addfields}>Add persons</button>
    </div>
  );
}

export default Table;
