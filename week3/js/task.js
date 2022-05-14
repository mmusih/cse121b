//Activity 1 - Map #
//map is great when we need to change each item in an array somehow. It returns a new array and does NOT modify the original array.
//let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
//    let new_array = arr.map(function callback( currentValue[, index[, array]]) {
      // return element for new_array
//  }[, thisArg])
//The syntax looks very similar to forEach, but notice that it needs a variable to store the new array it will return. We also need to make sure that the callback function we provide returns a value...usually the modified version of the array element.

//Declare an array with value = ['one', 'two', 'three']
//Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
//Set our list of HTML strings into the myList list. (Hint...checkout the .join() method.)

// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

const grades = ["A", "B", "C"]
function convertGradeToPoints (grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } 
  else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
document.getElementById("mylist2").innerHTML = gpaPoints;

//Activity 3 - Reduce #
//reduce is useful when we need to compress an array into a single value. It is most often used when the array has at least one value that can be mathematically flattened

//Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
//Using reduce calculate the GPA from the array of gpaPoints.
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

//Activity 2 - Map #
//Declare an array with letter grades in it: ['A', 'B', 'A']
//Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
//Use map and our conversion function to convert the array in step 1 to gpa points.
// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//Activity 4 - Filter 
//filter is similar to map in that it returns a new array of elements. The elements in the calling array will be included in the new array if they pass a test that you include in the callback you pass in.

//Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
//Using filter keep only the fruits that are longer than 6 characters.

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

//same thing with an arrow function
const shortWords = words.filter((word) => word.length < 6);

//Activity 5 - indexOf #
//indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

//Declare an array with the following value: [12, 34, 21, 54]
//Declare a luckNumber variable with the value 21;
//Use indexOf to see if the luckyNumber is in the Array.

// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

