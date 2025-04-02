// code your solution here
/**
 * Finds the first year when a team won the Super Bowl
 * @param {Array} record - Array of objects with year and result properties
 * @returns {string|undefined} - The year of the first Super Bowl win or undefined if no wins
 */
function superbowlWin(record) {
    // Find the first entry where result is "W"
    const winningRecord = record.find(game => game.result === "W");

    // If a winning record is found, return its year, otherwise return undefined
    return winningRecord ? winningRecord.year : undefined;
  }