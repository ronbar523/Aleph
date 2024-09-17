import { Button } from "@mui/material";

const CreateConnector = () => {
  return (
    <>
      <Button
        sx={{
          ml: "15px",
          mt: "10px",
          border: "2px solid #007BFF",
          borderRadius: "8px",
          textTransform: "unset",
          padding: "6px 12px",
          backgroundColor: "transparent",
          color: "#007BFF",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "none",

          "&:hover": {
            borderColor: "#0056b3",
            backgroundColor: "transparent",
            color: "#0056b3",
          },

          "&:disabled": {
            borderColor: "#d6d6d6",
          },
        }}
        onClick={() => (window.location = `/create_connector`)}
      >
        Create New Connector
      </Button>
    </>
  );
};

export default CreateConnector;
