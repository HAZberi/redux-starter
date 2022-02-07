import axios from "axios";

const api =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCallBegan") return next(action);

    next(action);

    const { url, method, onSuccess, onError } = action.payload;

    try {
      const response = await axios({
        baseURL: "http://localhost:9001/api",
        url,
        method,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
