import { Box, FormControlLabel, Switch } from "@mui/material";

const TypeSwich = ({
    type,
    setType
}) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      ml="-10px"
      mt="-15px"
    >
      <FormControlLabel
        control={
          <Switch
            required
            sx={{ marginLeft: "6.5px" }}
            checked={type}
            onChange={(e) => setType(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Type"
        labelPlacement="start"
      />
    </Box>
  );
};

export default TypeSwich;
