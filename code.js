//problem - sort object key value pair according to given order
// order - object values with string, number & boolean will come first after that array & object will come

//given object
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

//high & low priority array
const highPriority = [];
const lowPriority = [];

//conditions to check
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

//merging both array in one single array
const finalResult = [...highPriority, ...lowPriority];
console.log(finalResult);
