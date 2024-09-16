import { Alert, Snackbar } from "@mui/material";

const SnackBar = ({
    openSnackbar,
    setOpenSnackbar,
    snackbarSeverity,
    snackbarMessage,
}) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={() => setOpenSnackbar(true)}
    >
      <Alert
        onClose={() => setOpenSnackbar(false)}
        severity={snackbarSeverity}
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
