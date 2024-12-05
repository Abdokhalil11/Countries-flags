import { getCountry } from "utils/getCountry";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Image from "next/image";
import { formatNumber } from "utils/formatNumber";

export async function generateMetadata({ params }) {
  const { countryName } = await params;
  return {
    title: decodeURIComponent(countryName),
  };
}

export default async function CountryDetails({ params }) {
  const { countryName } = await params;
  const { data } = await getCountry();

  const country = data.filter(
    (el) => el.name === decodeURIComponent(countryName)
  )[0];

  return (
    <div className="pt-10">
      <div className="container">
        <Link
          href={"/"}
          className="text-main-color mb-5 bg-element-background shadow-md w-[120px] h-[40px] block flex items-center gap-3 justify-center"
        >
          <FaLongArrowAltLeft />
          Back
        </Link>

        <div className="flex flex-col lg:flex-row items-start gap-20">
          <div className="relative w-full h-[250px] lg:h-[350px]">
            <Image
              fill
              src={country.flags.svg}
              alt={`${country.name} flag`}
              className="object-contain"
              draggable={false}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-main-color font-bold text-3xl mb-3">
              {country.name}
            </h3>

            <div className="flex gap-5 flex-col lg:flex-row ">
              <div className="text-nowrap flex flex-col gap-1">
                <p className="text-main-color">
                  Native Name:{" "}
                  <span className="opacity-50">{country.nativeName}</span>{" "}
                </p>
                <p className="text-main-color">
                  Population:{" "}
                  <span className="opacity-50">
                    {formatNumber(country.population)}
                  </span>
                </p>
                <p className="text-main-color">
                  Region: <span className="opacity-50">{country.region}</span>
                </p>
                <p className="text-main-color">
                  Sub Region:{" "}
                  <span className="opacity-50">{country.subregion}</span>
                </p>
                <p className="text-main-color">
                  Capital:{" "}
                  <span className="opacity-50">
                    {country.capital ? country.capital : "unknown"}
                  </span>
                </p>
              </div>
              <div className="text-nowrap flex flex-col gap-1">
                <p className="text-main-color">
                  Top Level Domain:{" "}
                  <span className="opacity-50">
                    {country.topLevelDomain[0]}
                  </span>{" "}
                </p>
                <p className="text-main-color">
                  Currencies:{" "}
                  <span className="opacity-50">
                    {country.currencies
                      ? country.currencies[0]?.code
                      : "unknown"}
                  </span>
                </p>
                <p className="text-main-color">
                  Languages:{" "}
                  {country.languages.map((el, index) => (
                    <span className="opacity-50 ml-1" key={index}>
                      {el.name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-10 flex-wrap">
              <p className="text-main-color">Border Countries:</p>
              {country.borders ? (
                country.borders.map((el, index) => (
                  <span
                    key={index}
                    className="bg-seconde-background text-main-color w-[100px] text-sm h-[30px] flex shadow-md items-center justify-center bg-element-background "
                  >
                    {el}
                  </span>
                ))
              ) : (
                <p className="text-main-color opacity-50">No borders</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
