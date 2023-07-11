import { useState, useEffect } from "react";

export const useLogements = () => {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setLogements(res))
      .catch(console.error);

    return () => {
      console.log("cleanup");
    };
  }, []);
  return logements;
};
