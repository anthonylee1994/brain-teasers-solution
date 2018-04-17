const range = (from, to) => Array.apply(null, { length: to + 1 })
    .map(Number.call, Number)
    .slice(from);

const getLastDigit = (num) => Math.abs(num % 10);

const concatPrefix = (prefix, paths) => paths
    .filter((path) => path.length > 0)
    .map((path) => [...prefix, ...path]);

const concatTwoNum = (a, b) => a * 10 + (a >= 0 ? 1 : -1) * b;

const findPaths = (digits, sum, previous, index) => {

    const lastDigit = getLastDigit(previous);

    return (index >= digits.length) ? (
        sum === previous ? [[lastDigit]] : []
    ) : (() => {

        const currentDigit = digits[index];
        const concatNum = concatTwoNum(previous, currentDigit);

        const plusPaths = findPaths(digits, sum - previous, currentDigit, index + 1);
        const minusPaths = findPaths(digits, sum - previous, -currentDigit, index + 1);
        const concatPaths = findPaths(digits, sum, concatNum, index + 1);

        return [
            ...concatPrefix([lastDigit, "+"], plusPaths),
            ...concatPrefix([lastDigit, "-"], minusPaths),
            ...concatPrefix([lastDigit, "&"], concatPaths),
        ];

    })();

}

export const computeToN = (searchSum, digits = range(1, 9)) =>
    findPaths(digits, searchSum, digits[0], 1)
        .map((path) => path
            .join("")
            .replace(/&/g, "")
            .split(/(\+|\-)/g)
        );