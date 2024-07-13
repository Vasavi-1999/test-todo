

function Table () {
    const employeeDetails = [
        {
            No: 1,
            FirstName: "Tharun",
            LastName: "Chinni",
            Age : 30,
        },
        {
            No: 2,
            FirstName: "Vasavi",
            LastName: "Chinni",
            Age : 25,
        },
        
    ]
return (
  <div>
    <h1>Employee Details</h1>
    <table border={"1"}>
      
        <tr>
          <td>S.no</td>
          <td>Firstname</td>
          <td>LastName</td>
          <td>Age</td>
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
  </div>
);
}

export default Table;