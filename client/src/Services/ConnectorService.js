import http from "./HttpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const createConnector = async(connectorType, requestBody) => 
    await http.post(`${URL}/conncetor/create/${connectorType}`, requestBody);