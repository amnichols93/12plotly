// Line chart
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Bar chart
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea2", data, layout);

// Bar chart
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var data = [trace];
var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
};
Plotly.newPlot("plotArea3", data, layout);

// Pie chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea4", data, layout);

// Maps example
cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// Filter example
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// Difference between maps and filter:
/// The map() method transforms every element of the original array, 
/// and so the size of the transformed array is the same as that of the original array.
/// The filter() method, on the other hand, returns an array of values that meet certain criteria.

// Skill drill: return the words that start with s

let words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
let re = new RegExp('^s');
let s_words = words.filter((word) => {return word.match(re);
});
console.log(s_words);

// Sort function example
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a); // reverses it

// Slice method
var integers = [0,1,2,3,4,5];
slice1 = integers.slice(0,2); // will return integer from integers with index 0 and 1 (happens to also be '0' and '1')

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, ); // will return 'orangutan' and 'salamander'

