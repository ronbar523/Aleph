import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const regexOnlyNumbers = "/^[0-9]{6,12}$/";
const regexAlphanumeric  = "/^[a-zA-Z0-9]{6,12}$/"

const TokenInput = ({
  typeConnectorDetails,
  token,
  setToken,
  validToken,
  setValidToken,
}) => {
    
  const validationRegex = typeConnectorDetails.fields[0].validationRegex
  const TOKEN_REGEX = new RegExp(validationRegex.replace(/^\/|\/$/g, ''))
  const [tokenFocus, setTokenFocus] = useState(true);
  const [showToken, setShowToken] = useState(false);
  const [tokenRegexMessage, setTokenRegexMessage] = useState("");

  useEffect(() => {
    if(validationRegex === regexOnlyNumbers){
      setTokenRegexMessage("Token must include only numbers and be between 6-12 characters")
    } else if(validationRegex === regexAlphanumeric) {
      setTokenRegexMessage("Token can include only numbers and letters and must be between 6-12 characters.")
    } else {
      setTokenRegexMessage("Token can include numbers, letters, and special characters and must be between 6-12 characters.")
    }
  }, [])

  useEffect(() => {
    if (token === " ") {
      setToken("");
    } else {
      if (token[0] === " ") {
        let str = token.substr(1);
        setToken(str);
      } else {
        const result = TOKEN_REGEX.test(token);
        setValidToken(result);
      }
    }
  }, [token]);

  return (
    <TextField
      required
      autoComplete="off"
      label="Token"
      type={showToken ? "text" : "password"}
      size="small"
      variant="outlined"
      error={!validToken && !tokenFocus}
      onChange={(e) => setToken(e.target.value)}
      onFocus={() => setTokenFocus(true)}
      onBlur={() => setTokenFocus(false)}
      value={token}
      InputProps={{
        maxLength: 12, 
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowToken(true)}
            onMouseDown={() => setShowToken(false)}
            edge="end"
          >
            {showToken ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
      helperText={
        !validToken ? tokenRegexMessage : "Valid token"
      }
    />
  );
};

export default TokenInput;
