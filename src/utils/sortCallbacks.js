import { getDateNumber } from "./getDateNumber";

const numberCallback = order => {
    const ascNumber = order === 'desc' ? 1 : -1;

    return function (a, b) {
        return (b - a) * ascNumber;
    }
}

const dateCallback = order => {
    const ascNumber = order === 'desc' ? 1 : -1;

    return function (a, b) {
        return (getDateNumber(b['date']) - getDateNumber(a['date'])) * ascNumber;
    }
}

const alphabeticalCallback = order => {
    const ascNumber = order === 'desc' ? 1 : -1;

    return function () {
        return 1 * ascNumber;
    }
}

const getCallbackIndex = sort => {
    switch (sort) {
        case 'date':
            return 0;
        case 'popular':
            return 1;
        case 'alphabetical':
            return 2;
        default:
            return 0;
    }
}

export { numberCallback, dateCallback, alphabeticalCallback, getCallbackIndex }