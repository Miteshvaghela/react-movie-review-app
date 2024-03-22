
export const randomNumberGenerator = (min = null, max = null) => {
    return Math.ceil(Math.random() * (max - min) + 1);
}
