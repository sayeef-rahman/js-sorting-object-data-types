const testObj = {
  id: 5,
  title: "SASS Tutorial in English - Overview of SASS",
  tags: ["sass", "css", "ui"],
  isLoading: true,
  unlikes: {
    id: 37456786,
    title: "Tutorial in English",
  },
};
const highPriority = [];
const lowPriority = [];
var result = Object.keys(testObj).map((key) => {
  if (typeof testObj[key] === "string") {
    highPriority.push({
      id: key,
      value: testObj[key],
    });
  } else if (typeof testObj[key] === "number") {
    highPriority.push({
      id: key,
      value: testObj[key],
    });
  } else if (typeof testObj[key] === "boolean") {
    highPriority.push({
      id: key,
      value: testObj[key],
    });
  } else {
    lowPriority.push({
      id: key,
      value: testObj[key],
    });
  }
});
const finalResult = [...highPriority, ...lowPriority];
console.log(finalResult);
