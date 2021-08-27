import calculateMean from "./calculateMean.js";
import data from "./mockData.js";

function calculateVariance(data, isSample = true) {
    const mean = calculateMean(data);

    const deviations = [];
    data.forEach(n => {
        const deviation = Math.pow(mean - n, 2);
        deviations.push(deviation);
    });
    const deviationSum = deviations.reduce((sum, n) => (sum += n), 0);

    let variance;
    if (isSample) {
        variance = deviationSum / (data.length - 1);
    } else {
        variance = deviationSum / data.length;
    }
    return variance;
}

console.log(calculateVariance(data));
