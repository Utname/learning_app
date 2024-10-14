import { useEffect } from "react";
import { useReducer } from "./useReducer";

function fetchReducer(state, action) {
  switch (action.type) {
    case "fetchAPI/request":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "fetchAPI/success":
    case "fetchAPI/error":
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
        error: action.error,
      };
    default: {
      return state;
    }
  }
}

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    (async () => {
      dispatch({
        type: "fetchAPI/request",
        isLoading: true,
      });
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        dispatch({
          type: "fetchAPI/success",
          isLoading: false,
          error: null,
          data,
        });
      } catch (err) {
        dispatch({
          type: "fetchAPI/error",
          isLoading: false,
          error: err,
          data: [],
        });
      }
    })();
  }, [url]);
  return { ...state };
};
