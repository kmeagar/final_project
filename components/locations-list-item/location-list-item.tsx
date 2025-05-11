import { LocationType } from "../../middleware/mongoose/locations/schema";
import Link from "next/link";

type Props = {
  location: LocationType;
};

export default function LocationsListItem({ location }: Props) {
  return (
    <div>
      <h3>
        <Link href={`/locations/${location._id}`}>
          {location.name}
        </Link>
      </h3>
      <p>{location.address}</p>
      <p>{location.zipcode} | {location.borough}</p>
      <p>{location.cuisine}</p>
      <p>Grade: {location.grade}</p>
    </div>
  );
}
