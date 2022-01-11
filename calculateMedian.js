const calculateMedian = data => {
    if (data.length === 0) return 0;
    data.sort((a, b) => a - b);
    if (data.length % 2 !== 0) {
        return data[Math.floor(data.length / 2)];
    }
    const idx = Math.floor(data.length / 2);
    const median = (data[idx] + data[idx - 1]) / 2;
    return median;
};

console.log(
    calculateMedian([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 70, 120])
);

console.log([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 70, 120].join(" "));
