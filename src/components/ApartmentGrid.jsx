import React, { useEffect, useState } from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useLogements } from "../hooks/useLogements.jsx";

function ApartmentGrid() {
  const logements = useLogements();
  return (
    <div className="grid">
      {logements.map((logement) => (
        <ApartmentCard
         title={logement.title}
          imageUrl={logement.cover}
          id={logement.id}
          key={logement.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;
