export const sum = (arr) => {
  if (arr.length === 0) return "0.00";
  const total = arr.reduce((total, curr) => total + curr);
  console.log(total);
}