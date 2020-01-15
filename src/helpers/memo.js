const memoize = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            return null;
        }
        else {
            cache[n] = n;
            return n;
        }
    }
};

export default memoize;
