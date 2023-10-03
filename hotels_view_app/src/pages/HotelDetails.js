import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import hotelData from "../data/data.json";

function HotelDetails() {
  const { id } = useParams(); // Get the Hotel ID from the URL parameter

  // Find the Hotel by ID from your hotelData array
  const hotel = hotelData.find((hotel) => hotel.id === parseInt(id));

  return <Card key={hotel.id} hotel={hotel} />;
}

export default HotelDetails;
