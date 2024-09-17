import { IconButton, TableCell } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";

const StatusHead = ({ arrConnectors, setArrConnectors }) => {
  const [sortOrder, setSortOrder] = useState("");

  // Display Conector in alphabetical type order
  const sortConnectors = () => {
    const sortedConnectors = [...arrConnectors].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) return sortOrder === "" ? -1 : 1;
      if (nameA > nameB) return sortOrder === "" ? 1 : -1;
      return 0;
    });
    setArrConnectors(sortedConnectors);
    setSortOrder(sortOrder === "" ? "desc" : "");
  };

  return (
    <TableCell sx={{ width: "17%"}}>
      <b>Status</b>
      <IconButton size="small" onClick={sortConnectors} >
        <SortIcon />
      </IconButton>
    </TableCell>
  );
};

export default StatusHead;
