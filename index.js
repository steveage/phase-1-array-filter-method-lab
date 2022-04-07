// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());}


function fuzzyMatch(drivers, partName) {
    return drivers.filter((driver) => driver.substring(0,2) === partName);
}

function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name);
}