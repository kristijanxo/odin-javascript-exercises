const findTheOldest = function (people) {
  const sortedByOldest = people.sort((personA, personB) => {
    const currentYear = new Date().getFullYear();

    const yearOfDeathA = personA.yearOfDeath ?? currentYear;
    const yearOfDeathB = personB.yearOfDeath ?? currentYear;

    let ageA = yearOfDeathA - personA.yearOfBirth;
    let ageB = yearOfDeathB - personB.yearOfBirth;

    return ageB - ageA;
  });
  return sortedByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
