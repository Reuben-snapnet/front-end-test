import axios from "axios";

export const EVENT_LOADED = "EVENT_LOADED";
export const EVENT_FAIL = "EVENT_FAIL";

// getEvents
export const getEvents = () => async (dispatch) => {

  try {
    const res = await axios.get(
      "http://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events",
    );
    dispatch({
      type: EVENT_LOADED,
      payload: res?.data,
    });
    console.log("EVENT_LOADED", res?.data);
  } catch (error) {
    console.log("EVENT_FAIL", error);
    dispatch({
      type: EVENT_FAIL,
    });
    return error;
  }
};
