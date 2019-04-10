import React from "react";

const Travel = ({destination, country, distance , image}) => (
<figure>
  <img src={image} alt="test"/>
  <figcaption>
    <h2>{destination}</h2>
    <h3>{country}</h3>
    <h4>{distance}</h4>
    
  </figcaption>
</figure>
);
export default Travel;