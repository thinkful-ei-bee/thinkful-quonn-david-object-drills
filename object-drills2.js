// Problem # 1
function makeStudentReports(data) {
  return data.map(function(element) {
    return `${element.name} : ${element.grade}`;
  });
}

console.log(
  makeStudentReports([{ name: "J", grade: 72 }, { name: "P", grade: 100 }])
);
