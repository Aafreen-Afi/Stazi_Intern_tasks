import "./Card.css";
import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ car }) => {
  const imagePath = require(`../assets/${car.image}`);

  return (
    <div className="card">
      <div>
        <Link key={car.id} to={`/car/${car.id}`}>
          <img src={imagePath} alt="car" className="car-image" />
        </Link>
      </div>
      <div className="card-header">
        <p className="car-name">{car.name}</p>
        <p className="car-year">{car.year}</p>
      </div>
      <div className="card-mid">
        <div className="card-header-mid">
          <p>
            {" "}
            <span>
              <GoPeople />
            </span>{" "}
            {car.people} People
          </p>
          <p>
            {" "}
            <span>
              <LuFuel />
            </span>{" "}
            {car.fuel}
          </p>
        </div>
        <div className="card-header-mid">
          <p>
            {" "}
            <span>
              <BsSpeedometer />
            </span>{" "}
            {car.mileage}
          </p>
          <p>
            {" "}
            <span>
              <GiSteeringWheel />
            </span>{" "}
            {car.steering}
          </p>
        </div>
      </div>

      <div className="card-footer">
        <div>
          <p>
            ${car.amount} <span>/month</span>
          </p>
        </div>
        <div className="card-footer-right">
          <AiOutlineHeart className="heart-icon" />
          <button>Rent now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
