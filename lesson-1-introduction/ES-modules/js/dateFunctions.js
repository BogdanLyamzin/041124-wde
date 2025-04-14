export const isLeapYear = year => {
    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return days === 29;
}

export const getCurrentMonth = ()=> {
    const date = new Date();
    return date.getMonth() + 1
}

// export {
//     isLeapYear,
//     getCurrentMonth,
// }