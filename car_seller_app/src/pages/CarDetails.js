import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import carData from "../data/data.json";

function CarDetails() {
  const { id } = useParams(); // Get the car ID from the URL parameter

  // Find the car by ID from your carData array
  const car = carData.find((car) => car.id === parseInt(id));

  return <Card key={car.id} car={car} />;
}

export default CarDetails;
