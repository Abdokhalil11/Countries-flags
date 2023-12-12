/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CurrentCountry from "./components/CurrentCountry";

function App() {
  const [dark, setDark] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [isLaoding, setIsLoaing] = useState(true);
  const url = "https://restcountries.com/v2/all";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        setIsLoaing(false);
        return res.json();
      })
      .then((res) => setData(res));
  }, []);
  // functions
  const themeSwitch = () => {
    setDark(!dark);
    console.log(dark);
  };

  const searchValueHandling = (e) => {
    setSearchValue(e.target.value);
  };

  const regionsValue = (e) => {
    fetch("https://restcountries.com/v2/" + e.target.value)
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  return (
    <div className="main-content" theme={dark ? "dark" : "light"}>
      <Header themeSwitch={themeSwitch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                searchValueHandling={searchValueHandling}
                regionsValue={regionsValue}
              />
              {isLaoding ? (
                <div className="loading"></div>
              ) : (
                <Countries
                  data={data.filter((el) => el.name.includes(searchValue))}
                />
              )}
            </>
          }
        />
        <Route path="/:countryName" element={<CurrentCountry data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
