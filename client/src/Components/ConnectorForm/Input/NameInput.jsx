import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const NAME_REGEX = /^[A-Za-z\s.\(\)0-9]{3,15}$/;

const NameInput = ({
  validName,
  setValidName,
  name,
  setName,
  inputRefName,
}) => {

  const [nameFocus, setNameFocus] = useState(true);

  useEffect(() => {
    if (name === " ") {
      setName("");
    } else {
      if (name[0] === " ") {
        let str = name.substr(1);
        setName(str);
      } else {
        const result = NAME_REGEX.test(name);
        setValidName(result);
      }
    }
  }, [name]);

  return (
    <TextField
      required
      size="small"
      label="Name"
      variant="outlined"
      error={!validName && !nameFocus}
      onChange={(e) => setName(e.target.value)}
      onFocus={() => setNameFocus(true)}
      onBlur={() => setNameFocus(false)}
      inputRef={inputRefName}
      value={name}
      helperText={
        !validName ? "Name must be between 3-15 characters" : "Valid name"
      }
    />
  );
};

export default NameInput;
