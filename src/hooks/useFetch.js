import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //clean up fuunction
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        // console.log(res);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.nanme === "AbortError") {
          //   console.log("the search was aborted");
        } else {
          setIsPending(false);
          setError("could not fetch the data");
          //   console.log(err.message);
        }
        // setIsPending(false);
        // setError("could not fetch the data");
        // console.log(err.message);
      }
    };

    fetchData();
    //clean up function
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data: data, isPending, error };
};

// export default useFetch;
