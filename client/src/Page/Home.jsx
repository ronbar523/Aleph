import { useEffect, useState } from "react";
import { getAllConnector } from "../Services/ConnectorService";
import CreateConnector from "../Components/Home/CreateConnector";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import NameHead from "../Components/Home/Table/TableHead/NameHead";
import TypeHead from "../Components/Home/Table/TableHead/TypeHead";
import StatusHead from "../Components/Home/Table/TableHead/StatusHead";
import UrlHead from "../Components/Home/Table/TableHead/UrlHead";
import DescriptionHead from "../Components/Home/Table/TableHead/DescriptionHead";
import NameBody from "../Components/Home/Table/TableBody/NameBody";
import TypeBody from "../Components/Home/Table/TableBody/TypeBody";
import StatusBody from "../Components/Home/Table/TableBody/StatusBody";
import UrlBody from "../Components/Home/Table/TableBody/UrlBody";
import DescriptionBody from "../Components/Home/Table/TableBody/DescriptionBody";

const Home = () => {
  const [arrConnectors, setArrConnectors] = useState([]);
  const [isLoadingConnectors, setIsLoadingConnectors] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllConnector().then((res) => {
          setArrConnectors(res.data.response);
          setIsLoadingConnectors(false);
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!isLoadingConnectors ? (
        <>
          <CreateConnector />
          <Box
            sx={{
              mt: "20px",
              height: "calc(100vh - 150px)",
              overflowY: "auto",
              bgcolor: "#f5f5f5",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{ width: "98%", margin: "auto" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <NameHead
                      arrConnectors={arrConnectors}
                      setArrConnectors={setArrConnectors}
                    />
                    <TypeHead
                      arrConnectors={arrConnectors}
                      setArrConnectors={setArrConnectors}
                    />
                    <StatusHead
                      arrConnectors={arrConnectors}
                      setArrConnectors={setArrConnectors}
                    />
                    <UrlHead />
                    <DescriptionHead />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {arrConnectors.map((item) => (
                    <TableRow key={item._id}>
                      <NameBody item={item} />
                      <TypeBody item={item} />
                      <StatusBody item={item} />
                      <UrlBody item={item} />
                      <DescriptionBody item={item} />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <div className="fotter-home"></div>
        </>
      ) : null}
    </>
  );
};

export default Home;
