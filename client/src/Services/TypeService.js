import http from "./HttpService";
const URL = process.env.REACT_APP_SERVER_URL;

// export const findConncetorByCategory = async(categoryId) =>
//     await http.get(`${URL}/type_conncetor/find_by_category/${categoryId}`);

export const findAllTypes = async() => 
    await http.get(`${URL}/type_conncetor/find_all`);