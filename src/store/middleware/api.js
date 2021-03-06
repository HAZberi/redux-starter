import axios from "axios";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api";

const api =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    const { url, method, onSuccess, onError, onStart, data } = action.payload;
    //Set loading to true
    if (onStart) dispatch({ type: onStart });

    //Begin API Call
    next(action);
    try {
      const response = await axios({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });

      //Track API Call Status
      dispatch(apiCallSuccess(response.data));

      //Dispatch Success Action
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload:
            method === "delete"
              ? { id: parseInt(url.split("/").slice(-1)[0]) }
              : response.data.data,
        });
    } catch (error) {
      //Track API Call Status
      dispatch(apiCallFailed(error.message));

      //Dispatch Failure Action
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
