import { TableCell, Tooltip } from "@mui/material";

const DescriptionBody = ({ item }) => {
  const maxDescriptionLength = 70;
  const truncateDescription = (text) => {
    if (text.length > maxDescriptionLength) {
      return `${text.slice(0, maxDescriptionLength)}...`;
    }
    return text;
  };
  return (
    <TableCell
      sx={{
        width: "550px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <Tooltip title={item.description} arrow>
        <span>{truncateDescription(item.description)}</span>
      </Tooltip>
    </TableCell>
  );
};

export default DescriptionBody;
