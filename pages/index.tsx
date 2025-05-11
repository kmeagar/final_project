import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

// ✅ Use path alias for components
import LocationsList from "../components/locations-list";

// ✅ Use alias instead of relative import
import dbConnect from "../middleware/db-connect";
import { findAllLocations } from "../middleware/mongoose/locations/services";
import { LocationType } from "../middleware/mongoose/locations/schema";

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const locations: LocationType[] = JSON.parse(data.locations);
  const title = "The Food Finder - Home";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The Food Finder - Home" />
      </Head>
      <h1>Welcome to the Food Finder!</h1>
      <LocationsList locations={locations} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let locations: LocationType[] = [];

  try {
    await dbConnect();
    locations = await findAllLocations({});
  } catch (err) {
    return { notFound: true };
  }

  return {
    props: {
      data: { locations: JSON.stringify(locations) },
    },
  };
};

export default Home;
