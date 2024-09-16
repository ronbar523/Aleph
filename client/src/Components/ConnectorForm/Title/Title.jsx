import { Typography } from "@mui/material";

const Title = ({
    connectorTypeName
}) => {
  return (
    <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
      Create Connector ({connectorTypeName})
    </Typography>
  );
};

export default Title;
