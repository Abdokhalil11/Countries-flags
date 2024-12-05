async function getData(region) {
  const res = await fetch(
    `https://restCountries.com/v2/${region ? `region/${region}` : "all"}`
  );
  const data = await res.json();
  return data;
}

export async function getCountry(region) {
  const countries = await getData(region);
  return {
    data: countries,
  };
}
