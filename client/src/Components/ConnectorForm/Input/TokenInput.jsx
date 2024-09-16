import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TOKEN_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,12}$/
// /^[A-Za-z\s.\(\)0-9]{6,12}$/;

const TokenInput = ({
  token,
  setToken,
  validToken,
  setValidToken,
}) => {
    
  const [tokenFocus, setTokenFocus] = useState(true);
  const [showToken, setShowToken] = useState(false);

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
        !validToken ? "Token must be between 6-12 characters" : "Valid token"
      }
    />
  );
};

export default TokenInput;
