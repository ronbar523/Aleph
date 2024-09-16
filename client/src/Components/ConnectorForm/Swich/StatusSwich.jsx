import { Switch } from "@mui/material";

const StatusSwich = ({
    status,
    setStatus
}) => {
  return (
    <Switch
      checked={status}
      onChange={(e) => setStatus(e.target.checked)}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default StatusSwich;
