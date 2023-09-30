/**
 * Get the current date and time formatted as a string
 *
 * @returns {string} A string representing the current date and time in the format: "day/month/year - hour:minutes:seconds"
 */
const getCurrentDate = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    return `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;
};

module.exports = getCurrentDate;