import { useCallback } from "react";
import { createConnector } from "../../../Services/ConnectorService";
import { Button } from "@mui/material";

const Send = ({
  connectorType,
  name,
  status,
  description,
  validName,
  url,
  token,
  validDescription,
  validUrl,
  validToken,
  setSnackbarMessage,
  setSnackbarSeverity,
  setOpenSnackbar,
}) => {
  const sendForm = useCallback(async () => {
    try {
      const connectorObj = {
        name: name,
        status: status,

        description: description,
        config: { url: url },

        credentials: { token: token },
      };

      await createConnector(connectorType, connectorObj);
      setSnackbarMessage("Connector created successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => {
        window.location = "/";
      }, 1000); 
    } catch (err) {
      setSnackbarMessage("Failed to create connector. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  }, [name, status, description, url, token]);

  return (
    <Button
      sx={{ height: 35, width: "100%", textTransform: "unset" }}
      variant={
        validName && validDescription && validUrl && validToken
          ? "contained"
          : "outlined"
      }
      disabled={!validName || !validDescription || !validUrl || !validToken}
      onClick={sendForm}
    >
      Send
    </Button>
  );
};

export default Send;
