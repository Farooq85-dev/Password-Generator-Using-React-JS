import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../index.scss";

export default function InputComp({ value, reference }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          className="input"
          ref={reference}
          required
          value={value}
          id="outlined-password-input"
          label="Your Password"
          type="text"
        />
      </div>
    </Box>
  );
}
