import http from "./HttpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const createConnector = async(connectorType, requestBody) => 
    await http.post(`${URL}/conncetor/create/${connectorType}`, requestBody);

export const getAllConnector = async() => 
    await http.get(`${URL}/conncetor/find_all`);