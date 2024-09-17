import { useEffect, useState } from "react";
import TypeInput from "../Input/TypeInput";
import TypeSwich from "../Swich/TypeSwich";
import TypeSelect from "../Select/TypeSelect";

const TYPE_REGEX = /^[A-Za-z\s.\(\)0-9]{3,15}$/;

const TypeOptions = ({
  type,
  setType,
  validType,
  setValidType,
  typeConnectorDetails,
}) => {
  const typeField = typeConnectorDetails.fields[0];
  const [typeFocus, setTypeFocus] = useState(true);

  useEffect(() => {
    if (type === " ") {
      setType("");
    } else {
      if (type[0] === " ") {
        let str = type.substr(1);
        setType(str);
      } else {
        const result = TYPE_REGEX.test(type);
        setValidType(result);
      }
    }
  }, [type]);

  return (
    <>
      {typeField === "string" ? (
        <TypeInput
          type={type}
          setType={setType}
          typeFocus={typeFocus}
          validType={validType}
          setValidType={setValidType}
        />
      ) : typeField === "boolean" ? (
        <TypeSwich type={type} setType={setType} />
      ) : (
        <TypeSelect
          type={type}
          setType={setType}
          typeFocus={typeFocus}
          setTypeFocus={setTypeFocus}
          validType={validType}
        />
      )}
    </>
  );
};

export default TypeOptions;
