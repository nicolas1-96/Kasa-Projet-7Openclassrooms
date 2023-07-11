import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useLogement() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

  useEffect(() => {
   
    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
      })
      .catch(console.error);
  
  }, []);
  return flat;
}
