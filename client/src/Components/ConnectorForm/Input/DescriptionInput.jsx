import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const DescriptionInput = ({
  description,
  setDescription,
  validDescription,
  setValidDescription
}) => {
    
  const [descriptionFocus, setDescriptionFocus] = useState(true);

  useEffect(() => {
    if (description === " ") {
      setDescription("");
    } else {
      if (description[0] === " ") {
        let str = description.substr(1);
        setDescription(str);
      } else {
        const result = (description.length >= 20)
        setValidDescription(result);
      }
    }
  }, [description]);

  return (
    <TextField
      required
      size="small"
      label="Description"
      variant="outlined"
      multiline
      rows={2}
      inputProps={{ maxLength: 200 }}
      error={!validDescription && !descriptionFocus}
      onChange={(e) => setDescription(e.target.value)}
      onFocus={() => setDescriptionFocus(true)}
      onBlur={() => setDescriptionFocus(false)}
      value={description}
      helperText={
        !validDescription
          ? "Description must be between 10-200 characters"
          : "Valid description"
      }
    />
  );
};

export default DescriptionInput;
