const zStandardizeNumber = (n, m, sd) => {
    return (n - m) / sd;
}

console.log(zStandardizeNumber(112, 100, 15))

export default zStandardizeNumber;