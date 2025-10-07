export const categoryMaker = (classNum) => {
  if (
    parseInt(classNum) === 3 ||
    parseInt(classNum) === 4 ||
    parseInt(classNum) === 5
  ) {
    return "P";
  } else if (
    parseInt(classNum) === 6 ||
    parseInt(classNum) === 7 ||
    parseInt(classNum) === 8
  ) {
    return "J";
  } else if (parseInt(classNum) === 9 || parseInt(classNum) === 10 || classNum === "SSC24") {
    return "S";
  } else if (parseInt(classNum) === 11 || parseInt(classNum) === 12) {
    return "HS";
  }
};
