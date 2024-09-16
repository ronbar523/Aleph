import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Title from "../Components/ConnectorForm/Title/Title";
import NameInput from "../Components/ConnectorForm/Input/NameInput";
import DescriptionInput from "../Components/ConnectorForm/Input/DescriptionInput";
import UrlInput from "../Components/ConnectorForm/Input/UrlInput";
import TokenInput from "../Components/ConnectorForm/Input/TokenInput";
import StatusSwich from "../Components/ConnectorForm/Swich/StatusSwich";
import Send from "../Components/ConnectorForm/Button/Send";
import SnackBar from "../Components/ConnectorForm/SnackBar/SnackBar";

const ConnectorForm = () => {
  const [connectorTypeName, setConnectorTypeName] = useState("");
  const [connectorType, setConnectorType] = useState("");

  const [name, setName] = useState("");
  const [validName, setValidName] = useState("");

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

  const inputRefName = useRef();

  useEffect(() => {
    const urlSite = window.location.href;
    const urlWordsArr = urlSite.split(/[/]/);
    setConnectorType(urlWordsArr[urlWordsArr.length - 2]);
    setConnectorTypeName(urlWordsArr[urlWordsArr.length - 1]);
    inputRefName.current.focus();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "470px",
            border: "2px solid #ccc",
            borderRadius: "10px",
            pt: "17px",
            pb: "21px",
            pl: "30px",
            pr: "30px",
            gap: 3,
          }}
        >
          {/* Title */}
          <Title connectorTypeName={connectorTypeName} />

          {/* Name Field */}
          <NameInput
            validName={validName}
            setValidName={setValidName}
            name={name}
            setName={setName}
            inputRefName={inputRefName}
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
          <TokenInput
            token={token}
            setToken={setToken}
            validToken={validToken}
            setValidToken={setValidToken}
          />

          {/* Status Switch */}
          <StatusSwich status={status} setStatus={setStatus} />

          {/* Submit Button */}
          <Send
            connectorType={connectorType}
            name={name}
            status={status}
            description={description}
            validName={validName}
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
    </>
  );
};

export default ConnectorForm;
