export const recursiveDigitsSum = (x) => {
    const sum = String(x).split('').reduce((a, b) => Number(a) + Number(b), 0);
    return String(sum).length > 1 ? recursiveDigitsSum(sum) : sum;
};
