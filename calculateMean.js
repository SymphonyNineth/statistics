const mean = data =>
    data.reduce((sum, n) => {
        return (sum += n);
    }, 0) / data.length;

export default mean;
