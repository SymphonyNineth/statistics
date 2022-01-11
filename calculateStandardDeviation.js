import calculateVariance from "./calculateVariance.js";
const CalculateStandardDeviation = n => Math.sqrt(calculateVariance(n));
export default CalculateStandardDeviation;

console.log(CalculateStandardDeviation([1,2,3,4,5,6]));