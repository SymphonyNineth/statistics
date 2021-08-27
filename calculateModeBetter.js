import data from "./mockData.js";
const calculateModeBetter = data => {
    data.sort((a, b) => b - a);
    let x = data.filter(el => el >= data[0]);
    console.log(x);
};

calculateModeBetter(data);
