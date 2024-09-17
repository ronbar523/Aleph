import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Title from "../Components/ConnectorForm/Title/Title";
import NameInput from "../Components/ConnectorForm/Input/NameInput";
import DescriptionInput from "../Components/ConnectorForm/Input/DescriptionInput";
import UrlInput from "../Components/ConnectorForm/Input/UrlInput";
import TokenInput from "../Components/ConnectorForm/Input/TokenInput";
import StatusSwich from "../Components/ConnectorForm/Swich/StatusSwich";
import Send from "../Components/ConnectorForm/Button/Send";
import SnackBar from "../Components/ConnectorForm/SnackBar/SnackBar";
import TypeOptions from "../Components/ConnectorForm/TypeOptions/TypeOptions";

const ConnectorForm = () => {
  const location = useLocation();
  const typeConnectorDetails = location.state;
  const isCredentials = typeConnectorDetails.fields[0].isCredentials;

  const [type, setType] = useState("");
  const [validType, setValidType] = useState("");

  const [description, setDescription] = useState("");
  const [validDescription, setValidDescription] = useState("");

  const [url, setUrl] = useState("");
  const [validUrl, setValidUrl] = useState("");

  const [token, setToken] = useState("");
  const [validToken, setValidToken] = useState("");

  const [status, setStatus] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: isCredentials ? "6px" : "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "470px",
            border: "2px solid #ccc",
            borderRadius: "10px",
            padding: "17px 30px 21px 30px",
            gap: 3,
          }}
        >
          {/* Title */}
          <Title />

          {/* Name Field */}
          <NameInput
            typeConnectorDetails={typeConnectorDetails}
          />

          {/* Description Field */}
          <DescriptionInput
            description={description}
            setDescription={setDescription}
            validDescription={validDescription}
            setValidDescription={setValidDescription}
          />

          {/* URL Field */}
          <UrlInput
            url={url}
            setUrl={setUrl}
            validUrl={validUrl}
            setValidUrl={setValidUrl}
          />

          {/* Token Field */}
          {isCredentials ? (
            <TokenInput
              typeConnectorDetails={typeConnectorDetails}
              token={token}
              setToken={setToken}
              validToken={validToken}
              setValidToken={setValidToken}
            />
          ) : null}

          {/* Type Field */}
          <TypeOptions
            type={type}
            setType={setType}
            validType={validType}
            setValidType={setValidType}
            typeConnectorDetails={typeConnectorDetails}
          />

          {/* Status Switch */}
          <StatusSwich status={status} setStatus={setStatus} />

          {/* Submit Button */}
          <Send
          isCredentials={isCredentials}
            typeConnectorDetails={typeConnectorDetails}
            status={status}
            description={description}
            type={type}
            validType={validType}
            url={url}
            token={token}
            validDescription={validDescription}
            validUrl={validUrl}
            validToken={validToken}
            setSnackbarMessage={setSnackbarMessage}
            setSnackbarSeverity={setSnackbarSeverity}
            setOpenSnackbar={setOpenSnackbar}
          />
        </Box>

        {/* SnackBar */}
        <SnackBar
          openSnackbar={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
          snackbarSeverity={snackbarSeverity}
          snackbarMessage={snackbarMessage}
        />
      </Box>
      <div className={isCredentials ? "fotter-form1" : "fotter-form2"}></div>
    </>
  );
};

export default ConnectorForm;
