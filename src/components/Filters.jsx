/* eslint-disable react/prop-types */

const Filters = ({ regionsValue, searchValueHandling }) => {
  return (
    <div className="filters">
      <div>
        <div className="search-icon"></div>
        <input
          type="search"
          placeholder="Search for country"
          onInput={(e) => searchValueHandling(e)}
        />
      </div>
      <select name="Filter By Regions" onChange={(e) => regionsValue(e)}>
        <option value="all">All</option>
        <option value="region/Oceania">Oceania</option>
        <option value="region/Europe">Europe</option>
        <option value="region/Africa">Africa</option>
        <option value="region/Asia">Asia</option>
      </select>
    </div>
  );
};

export default Filters;
