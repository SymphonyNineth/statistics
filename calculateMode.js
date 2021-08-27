import data from "./mockData.js";
const calculateMode = data => {
    const countMap = {};
    let mode = [0];
    let pos = 0;
    let currentMax = 0;
    data.forEach(n => {
        if (n in countMap) {
            countMap[n]++;
        } else {
            countMap[n] = 1;
        }
    });
    for (let count in countMap) {
        if (countMap[count] > currentMax) {
            currentMax = countMap[count];
            mode.length = 0;
            mode.push(count);
        } else if (countMap[count] === currentMax) {
            mode.push(count);
        }
    }
    console.log(mode);
};

calculateMode(data);
