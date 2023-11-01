import { useSelector } from "react-redux";
import { selectActualPlaces } from "../features/places-slice";
import { sortVariants } from "../utils/constants";

export const usePlaces = () => {
  const sortIndex = useSelector((state) => state.places.sortIndex);
  const places = useSelector((state) =>
    selectActualPlaces(state.places.items, Number(sortVariants[sortIndex]))
  );
  return places;
};
