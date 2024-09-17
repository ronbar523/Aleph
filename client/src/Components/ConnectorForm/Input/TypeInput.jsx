import { TextField } from "@mui/material";

const TypeField = ({ type, setType, validType, setTypeFocus, typeFocus }) => {
  return (
    <>
      <TextField
        required
        size="small"
        label="Type"
        variant="outlined"
        error={!validType && !typeFocus}
        onChange={(e) => setType(e.target.value)}
        onFocus={() => setTypeFocus(true)}
        onBlur={() => setTypeFocus(false)}
        value={type}
        helperText={
          !validType ? "Type must be between 3-15 characters" : "Valid Type"
        }
      />
    </>
  );
};

export default TypeField;
