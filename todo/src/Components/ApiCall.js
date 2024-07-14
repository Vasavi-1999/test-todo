import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";

function ApiCall() {
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
    { field: "id", headerName: "ID" },
    {
      field: "userId",
      headerName: "User ID",
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      editable: true,
    },
    {
      field: "action",
      headerName: "Acion",
      renderCell: (params) => (
        <strong>
          <Button
            onClick={() => handleOpen(params)}
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
        </strong>
      ),
    },
  ];
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [body, setBody] = useState("");
  const handleOpen = (params) => {
    setBody(params && params.row && params.row.body);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      console.log(data);
      setPosts(data?.data);
    });
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid rows={posts} columns={columns} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{body}</Box>
      </Modal>
    </div>
  );
}

export default ApiCall;
