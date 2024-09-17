import { TableCell } from "@mui/material";

const StatusBody = ({
    item
}) => {
  return <TableCell>{item.status ? "Active" : "Inactive"}</TableCell>
};

export default StatusBody;
