import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const ContactWithMe = () => {
  const handleSubmit = (e) => {
    console.log(e.target);
  };
  return (
    <div className="">
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">Contact With Me</h2>
      </div>
      <div className="mx-3 md:mx-auto md:w-1/2 lg:1/4 bg-gray-400 p-10 rounded">
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            id="outlined-multiline-static"
            label="Massages"
            multiline
            rows={2}
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactWithMe;
