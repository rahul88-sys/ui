import { useState } from "react";
import HrsForm from "../Layout/HrsForm";
import TextField from "@mui/material/TextField";
import {
  Button,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import React from "react";
import MeetingRoomSharpIcon from "@mui/icons-material/MeetingRoomSharp";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(firstName, lastName, email, comments);
    if (firstName && lastName && email && comments !== null) {
      setOpen(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setComments("");
    }
  }
  function handleClose() {
    if (firstName && lastName && email && comments !== null) {
      const userConfirmed = window.confirm("Are you sure you want to close?");
      if (userConfirmed) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
  }
  console.log("open", open);
  return (
    <>
      <HrsForm>
        <React.Fragment>
          <div style={{ position: "fixed", bottom: 16, right: 16 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              <Tooltip title="Contact us" arrow>
                <ChatBubbleIcon sx={{ fontSize: "2rem" }} />
              </Tooltip>
            </Button>
          </div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <div style={{ padding: 16 }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    fullWidth
                    required
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    fullWidth
                    required
                  />
                  <TextField
                    type="email"
                    variant="outlined"
                    color="secondary"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Comments"
                    onChange={(e) => setComments(e.target.value)}
                    value={comments}
                    fullWidth
                    required
                    multiline={true}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Send
                  </Button>
                </Stack>
              </form>
            </div>
          </Dialog>
        </React.Fragment>
      </HrsForm>
    </>
  );
};
