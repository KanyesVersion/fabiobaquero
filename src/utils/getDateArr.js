// Takes in a full date in this format: MM/DD/YYYY eg 01/22/2025
// Returns an array in the form of [day, month code, year]
export const getDateArr = date => {
    const monthNum = date.split('/')[0];
    const dayNum = date.split('/')[1];
    const yearNum = date.split('/')[2];
    let monthCode = 'jan';

    switch (monthNum) {
        case '01':
            monthCode = 'jan';
            break;
        case '02':
            monthCode = 'feb';
            break;
        case '03':
            monthCode = 'mar';
            break;
        case '04':
            monthCode = 'apr';
            break;
        case '05':
            monthCode = 'may';
            break;
        case '06':
            monthCode = 'jun';
            break;
        case '07':
            monthCode = 'jul';
            break;
        case '08':
            monthCode = 'aug';
            break;
        case '09':
            monthCode = 'sep';
            break;
        case '10':
            monthCode = 'oct';
            break;
        case '11':
            monthCode = 'nov';
            break;
        case '12':
            monthCode = 'dec';
            break;
    }

    return [dayNum, monthCode, yearNum];
}