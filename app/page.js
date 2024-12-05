import Filters from "@/components/Filters";
import Countries from "@/components/Countries";
import { getCountry } from "utils/getCountry";

export default async function Home({ searchParams }) {
  const { region } = await searchParams;
  const { data } = await getCountry(region);
  // console.log(count);
  return (
    <div className="bg-main-background">
      <Filters />
      <Countries countries={data} />
    </div>
  );
}
