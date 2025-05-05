// useFetch.js
import { useCallback, useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message || "Щось пішло не так");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();

    // Для демонстрації componentWillUnmount
    return () => {
      console.log("🧹 useFetch cleanup (componentWillUnmount)");
    };
  }, [url, fetchData]);

  return { data, loading, error, refetch: fetchData };
}
