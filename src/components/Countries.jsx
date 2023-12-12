import { Link } from "react-router-dom";
const Countries = ({ data }) => {
  return (
    <div className="countries">
      {data.map((el, index) => (
        <Link to={"/" + el.name} className="country" key={index}>
          <div className="flag">
            <img src={el.flags.svg} alt="" />
          </div>
          <div className="details">
            <p className="name">{el.name}</p>
            <p>
              Population: <span>{el.population}</span>
            </p>
            <p>
              Regions: <span>{el.region}</span>
            </p>
            <p>
              Capital: <span>{el.capital}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Countries;
