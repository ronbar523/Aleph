import { TextField } from "@mui/material";

const NameInput = ({ typeConnectorDetails }) => {
  const name = typeConnectorDetails.fields[0].name;

  return (
    <TextField
      required
      size="small"
      label="Name"
      variant="outlined"
      value={name}
      InputProps={{
        readOnly: true,
      }}
      sx={{
        backgroundColor: "#f0f0f0",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ccc",
        },
        "& .MuiInputBase-input": {
          color: "#888",
        },
      }}
    />
  );
};

export default NameInput;
