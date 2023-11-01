// Filtering function by cuisine type is in development right now

export const groupCuisines = (array) => {
  const cuisines = array
    .map((item) => item?.cuisine)
    .map((item) => {
      return item.map((el) => el.name);
    });
  return Array.from(
    new Set(cuisines.reduce((acc, item) => acc.concat(item), []))
  );
};
