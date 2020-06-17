export const sum = (arr) => {
  if (arr.length === 0) return "0.00";
  const total = arr.reduce((total, curr) => total + curr.quantity * curr.price, 0);
  return Number(total).toFixed(2);
}