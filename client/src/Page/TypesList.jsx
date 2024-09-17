import { useEffect, useState } from "react";
import { findAllTypes } from "../Services/TypeService";
import { Box } from "@mui/material";
import TypeCard from "../Components/TypesPage/TypeCard";
import CrateConnector from "../Components/TypesPage/NextButton";

const TypesList = () => {
  const arrCategories = ["Cloud provider", "Data lake", "Edr", "Saas", "Vpn"];
  const [arrTypes, setArrTypes] = useState([]);
  const [isLoadingTypes, setIsLoadingTypes] = useState(true);
  const [typeObj, setTypeObj] = useState({});
  const [chooseTypeId, setChooseTypeId] = useState("");

  // Fetch and set type connectors from the data source when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        await findAllTypes().then((res) => {
          setArrTypes(res.data.response);
          setIsLoadingTypes(false);
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // Organize items into categories using the 'category' property
  const itemsByCategory = arrTypes.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      {!isLoadingTypes ? (
        <>
          <CrateConnector
            chooseTypeId={chooseTypeId}
            typeObj={typeObj}
          />
          <Box
            sx={{
              flex: 1,
              height: "calc(100vh - 120px)",
              overflowY: "auto",
              p: 2,
              bgcolor: "#f5f5f5",
            }}
          >
            {arrCategories.map((category, index) => {
              return (
                <div key={index} sx={{ mb: 2 }}>
                  <h2 className="category-title">{category} </h2>
                  <Box className="card-container">
                    {itemsByCategory[category]?.map((item) => (
                      <div key={item._id}>
                        <TypeCard
                          item={item}
                          chooseTypeId={chooseTypeId}
                          setChooseTypeId={setChooseTypeId}
                          setTypeObj={setTypeObj}
                        />
                      </div>
                    ))}
                  </Box>
                </div>
              );
            })}
          </Box>
          <div className="footer-type-list"></div>
        </>
      ) : null}
    </>
  );
};

export default TypesList;
