import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      if (localCache[url]) {
        setState({
          data: localCache[url],
          isLoading: false,
          hasError: false,
          error: null,
        });
        return;
      }

      setLoadingState();
      const response = await fetch(url);

      // sleep
      await new Promise((resolve) => setTimeout(resolve, 250));

      if (!response.ok) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: response.status,
            message: response.statusText,
          },
        });
        return;
      }

      const data = await response.json();
      setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
      });

      // Set cache
      localCache[url] = data;
    };

    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
