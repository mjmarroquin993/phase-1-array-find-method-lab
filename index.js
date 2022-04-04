// const found = array1.find(element => element > 10);


const superbowlWin = record => {
const yearWon = record.find(obj => obj.result === "W")
if (yearWon) {
    return yearWon.year
}
}

