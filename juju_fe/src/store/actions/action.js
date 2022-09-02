import axios from "axios";
import { DATA, FETCH_ONE_DATA } from "./actionType";
import env from "react-dotenv";
const url = `https://api.unsplash.com/photos`;
// const url = ""

export const fetchData = (number) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          url + `?client_id=${env.ACCESS_KEY}&page=${number}`
        );
        console.log(response, "<<<<<");
        dispatch({
          type: DATA,
          payload: response.data,
        });
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const fetchOneData = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `${url}/${id}?client_id=${env.ACCESS_KEY}`
        );
        dispatch({
          type: FETCH_ONE_DATA,
          payload: response.data,
        });
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  };
};
