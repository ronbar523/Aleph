import { useCallback, useState } from "react";
import { createConnector } from "../../../Services/ConnectorService";
import { Button } from "@mui/material";

const Send = ({
  typeConnectorDetails,
  status,
  description,
  type,
  validType,
  url,
  token,
  validDescription,
  validUrl,
  validToken,
  setSnackbarMessage,
  setSnackbarSeverity,
  setOpenSnackbar,
  isCredentials
}) => {
  const [disabled, setDiesabled] = useState(false);

  const sendForm = useCallback(async () => {
    try {
      setDiesabled(true);
      const name = typeConnectorDetails.fields[0].name;
      const typeConnectorId = typeConnectorDetails._id;

      const connectorObj = {
        name: name,
        connectorType: type,
        status: status,
        description: description,
        config: { url: url },
        credentials: { token: token },
      };

      await createConnector(typeConnectorId, connectorObj);
      setSnackbarMessage("Connector created successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => {
        window.location = "/";
      }, 500);
    } catch (err) {
      setDiesabled(false);
      setSnackbarMessage("Failed to create connector. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  }, [status, description, type, url, token]);

  return (
    <Button
      sx={{ height: 35, width: "100%", textTransform: "unset" }}
      variant={
        validDescription && validUrl && validToken ? "contained" : "outlined"
      }
      disabled={disabled || !validType || !validDescription || !validUrl || (isCredentials && !validToken)}
      onClick={sendForm}
    >
      Send
    </Button>
  );
};

export default Send;
