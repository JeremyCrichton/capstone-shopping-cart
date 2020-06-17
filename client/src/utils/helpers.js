export const sum = (arr) => {
  if (arr.length === 0) return "0.00";
  const total = arr.reduce(
    (total, curr) => total + curr.quantity * curr.price,
    0
  );
  return Number(total).toFixed(2);
};
export const sortArrayAlphabetically = (arr) => {
  console.log(arr);
  const sorted = arr.sort((a, b) => a["title"].localeCompare(b["title"]));
  console.log(sorted);
  return sorted;
};
