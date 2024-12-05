"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatNumber } from "utils/formatNumber";
function CountryDetails({ details }) {
  const { population, capital, region } = details;
  return (
    <>
      <p className="text-main-color">
        population:
        <span className="opacity-50">{formatNumber(population)}</span>
      </p>
      <p className="text-main-color">
        capital: <span className="opacity-50">{capital}</span>
      </p>
      <p className="text-main-color">
        region: <span className="opacity-50">{region}</span>
      </p>
    </>
  );
}

export default function Countries({ countries }) {
  const [data, setData] = useState([...countries]);
  const searchParams = useSearchParams();
  const countryName = searchParams.get("countryName");
  const region = searchParams.get("region");
  useEffect(() => {
    if (countryName) {
      setData(
        data.filter(({ name }) =>
          name.toLowerCase().includes(countryName.toLowerCase())
        )
      );
    } else {
      setData(countries);
    }
  }, [region, countryName]);
  const countryMap = data.map(
    ({ id, flags, name, population, region, capital }) => (
      <Link href={`country/${name}`} key={name}>
        <div className="bg-seconde-background rounded shadow-md">
          <div className="relative min-h-[250px] lg:min-h-[150px]">
            <Image
              src={flags.svg}
              alt={`flag ${name}`}
              fill
              className="object-cover"
              aria-label={`${name} flag`}
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-xl text-main-color">{name}</h3>
            <CountryDetails details={{ population, region, capital }} />
          </div>
        </div>
      </Link>
    )
  );

  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
        {countryMap}
      </div>
    </section>
  );
}
