import React from "react";
import Travel from "./Travel"

const travels = [
  {
    destination : "Cancún",
    country : "Mexico",
    distance : "9 120 km",
      

    image:"https://www.voyageway.com/wp-content/uploads/2014/11/tulum-mexique-740x491.jpg",
  },
  {
    destination : "Paphos",
    country : "Cyprius",
    distance : "2 886 km",
    image:"http://www.tribunejuive.info/wp-content/uploads/2017/12/limassol-chypre.jpg",
  },
  {
    destination : "Malé",
    country : "Maldives",
    distance : "7 821 km",
    image:"https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/ce/maldives.jpg",
  },
  {
   destination : "Plitvica",
   country : "Croatia",
   distance : "1 385 km",
   image:"https://www.allibert-trekking.com/iconographie/f1/PA1_authentiques-parcs-nationaux-de-croatie.jpeg",
  }

];

const Travels = () => (
   <div>
    {travels.map(travels => (
      <Travel destination={travels.destination} image={travels.image} country={travels.country} distance={travels.distance} />
    ))}
  </div>
);

export default Travels