import { Link, useParams } from "react-router-dom";
const CurrentCountry = ({ data }) => {
  const { countryName } = useParams();
  const country = data.filter((el) => el.name === countryName)[0];
  console.log(country);
  return (
    <>
      <Link to={"/"} className="back">
        <div className="arrow"></div>
        Back
      </Link>

      <div className="currentCountry">
        <div className="flag">
          <img src={country.flags.svg} alt="" />
        </div>
        <div className="details">
          <div className="components">
            <div className="component">
              <p className="name">{country.name}</p>
              <p>
                Native Name: <span>{country.nativeName}</span>{" "}
              </p>
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div className="component">
              <p>
                Top Level Domain: <span>{country.topLevelDomain[0]}</span>{" "}
              </p>
              <p>
                Currencies: <span>{country.currencies[0]?.code}</span>
              </p>
              <p>
                Languages:{" "}
                {country.languages.map((el, index) => (
                  <span key={index}>{el.name}</span>
                ))}
              </p>
            </div>
          </div>
          <div className="borders">
            <p>Border Countries:</p>
            {country.borders?.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentCountry;
