import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const URL_REGEX =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/a-zA-Z0-9#]+\/?)*(\?[a-zA-Z0-9=&]*)?/;

const UrlInput = ({ url, setUrl, validUrl, setValidUrl }) => {
  const [urlFocus, setUrlFocus] = useState(true);

  useEffect(() => {
    if (url === " ") {
      setUrl("");
    } else {
      if (url[0] === " ") {
        let str = url.substr(1);
        setUrl(str);
      } else {
        const result = URL_REGEX.test(url);
        setValidUrl(result);
      }
    }
  }, [url]);

  return (
    <TextField
      required
      size="small"
      label="URL"
      variant="outlined"
      error={!validUrl && !urlFocus}
      onChange={(e) => setUrl(e.target.value)}
      onFocus={() => setUrlFocus(true)}
      onBlur={() => setUrlFocus(false)}
      value={url}
      helperText={!validUrl ? "Must be a valid URL" : "Valid URL"}
    />
  );
};

export default UrlInput;
