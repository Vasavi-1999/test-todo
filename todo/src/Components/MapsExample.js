function MapsExample() {
  const persons = [
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
  return (
    <div>
      <table border={"1"}>
        <tr>
          <th>S.no</th>
          <th>Firstname</th>
          <th>LastName</th>
          <th>Age</th>
        </tr>
        {persons.map((person) => {
          return (
            <tr>
              {" "}
              {Object.keys(person).map((key) => {
                return <td>{person[key]}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default MapsExample;
