import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useLogement } from "../hooks/useLogement";
import Main from "../layout/Main";
import {  Outlet } from "react-router-dom";

function ApartmentPage() {
  const flat = useLogement();

  if (flat == null) return <div>Loading...</div>;
  return (
   
    
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  
  );
}

export default ApartmentPage;
