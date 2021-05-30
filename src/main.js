function medianScore(students) {
  const sortedList = students.sort((a, b) => a.score - b.score);
  const midpoint = Math.floor(sortedList.length / 2);
  const medianScore =
    students.length % 2
      ? sortedList[midpoint].score
      : (sortedList[midpoint].score + sortedList[midpoint - 1].score) / 2.0;
  return medianScore;
}

function topScoringStudent(students) {
  const sortedList = students.sort((a, b) => b.score - a.score);
  return sortedList[0];
}

module.exports = { medianScore, topScoringStudent };
