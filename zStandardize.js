import calculateStandardDeviation from "./calculateStandardDeviation.js";
import calculateMean from "./calculateMean";
const zStandardize = (data) =>{
    standardized = data.map(n => (n - calculateMean(n)) / calculateStandardDeviation(n))
}

export default zStandardize

//UNTESTED FUNCTION