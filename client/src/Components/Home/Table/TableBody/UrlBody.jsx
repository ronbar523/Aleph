import { TableCell, Tooltip } from "@mui/material";

const UrlBody = ({ item }) => {
  const maxUrlLength = 50;
  const truncateUrl = (text) => {
    if (text.length > maxUrlLength) {
      return `${text.slice(0, maxUrlLength)}...`;
    }
    return text;
  };

  return (
    <TableCell
      sx={{
        width: "250px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <Tooltip title={item.config.url} arrow>
        <a href={item.config.url} target="_blank" rel="noopener noreferrer">
          <span>{truncateUrl(item.config.url)}</span>
        </a>
      </Tooltip>
    </TableCell>
  );
};

export default UrlBody;
