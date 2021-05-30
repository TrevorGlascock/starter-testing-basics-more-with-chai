const { expect } = require("chai");
const { medianScore, topScoringStudent } = require("../src/main");

const students = [
  { name: "Luana Barbosa", score: 9.2 },
  { name: "Evan Webb", score: 8.4 },
  { name: "Riley Morgan", score: 9.8 },
  { name: "Caleb Tyler", score: 6.9 },
  { name: "Val Avila", score: 7.4 },
]; //scores sorted => 6.9, 7.4, 8.4, 9.2, 9.8 || median is 8.4
const oddStudents = [...students];
const evenStudents = [
  ...oddStudents,
  { name: "Trevor Glascock", score: 8.7 },
  //scores sorted => 6.9, 7.4, 8.4, 8.7, 9.2, 9.8 || median is 8.55
];

describe("medianScore", () => {
  it("should return the student with the median score for an odd-numbered list of students", () => {
    const actual = medianScore(oddStudents);
    const expected = 8.4;
    expect(actual).to.equal(expected);
  });
  it("should return the student with the median score for an even-numbered list of students", () => {
    const actual = medianScore(evenStudents);
    const expected = 8.55;
    expect(actual).to.equal(expected);
  });
  it("should return null if there are no students", () => {
    const actual = medianScore([]);
    expect(actual).to.be.null;
  });
});

describe("topScoringStudent", () => {
  it("should return the student with the highest score for a list of students", () => {
    const actual = topScoringStudent(students);
    const expected = { name: "Riley Morgan", score: 9.8 };
    expect(actual).to.eql(expected);
  });
  it("should return null if there are no students", () => {
    const actual = topScoringStudent([]);
    expect(actual).to.be.null;
  });
});
