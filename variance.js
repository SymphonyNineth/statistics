const data = [1, 5, 2, 7, 1, 9, 3, 8, 5, 9];
function calculateVariance(data, isSample = true){
    const mean = data.reduce((sum, n) => {
        return sum += n;
    },0) / data.length;
    
    const deviations = [];
    data.forEach(n => {
        const deviation = Math.pow(mean - n, 2);
        deviations.push(deviation);
    });
    const deviationSum = deviations.reduce((sum, n) => sum += n, 0)

    let variance;
    if(isSample){
        variance = deviationSum / (data.length - 1);
    } else {
        variance = deviationSum / data.length;
    }
    return variance
}


console.log(Math.sqrt(calculateVariance(data)))