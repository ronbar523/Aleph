import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TypeSelect = ({
    type,
    setType,
    typeFocus,
    setTypeFocus,
    validType
}) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="select-label">Select Type</InputLabel>
      <Select
        required
        labelId="select-label"
        id="select"
        value={type}
        error={!validType && !typeFocus}
        onFocus={() => setTypeFocus(true)}
        onBlur={() => setTypeFocus(false)}
        onChange={(e) => setType(e.target.value)}
        label="Select Option"
        renderValue={(selected) => (selected ? `${selected}` : "Select Option")}
        sx={{
          height: "45px",
          ".MuiOutlinedInput-input": {
            padding: "0px 12px",
          },
        }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value={"Available"}>Available</MenuItem>
        <MenuItem value={"Unavailable"}>Unavailable</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TypeSelect;
