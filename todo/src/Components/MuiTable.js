import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

function MuiTable() {
  const [rows, setRows] = React.useState([
    {
        id: 1,
        firstName: "Tharun",
        lastName: "Chinni",
        age: 30,
    }
  ]);

  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    setRows([
      ...rows,
      {
        id: id,
        lastName: lastName,
        firstName: firstName,
        age: age,
      },
    ]);
    setOpen(false);
  };

  React.useEffect(() => {
   // setAge(...age, 20);
    // console.log('Id: ' + id);
    // console.log('Firstname: ' + firstName);
    // console.log('Lastname: ' + lastName);
    console.log('Age: ' + age);
    console.log(rows);
  }, [id, firstName, lastName, age, rows]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Button variant="contained" onClick={handleOpen}>Add Persons</Button>
      <DataGrid rows={rows} columns={columns} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="ID"
              variant="outlined"
              onChange={(e) => setId(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="LastName"
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="FirstName"
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              onChange={(e) => setAge(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default MuiTable;
