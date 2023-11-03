num = [10, 20, 30, 40, -50, 60, -34, -3, 23, -34];
var PositiveNum = [];
for (var i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        PositiveNum.push(num[i]);
    }
}
console.log(PositiveNum)

var arr = [1, 2, 3, 443, -23, 121, 23, -232, 12, 34, 23, -45, -67, -54, 23];
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}

for (var i = 0; i < count; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] < 0) {
            arr.splice(j, 1);
            break;
        }
    }
}
console.log(arr);

var arr1 = [
    { name: "John", age: 23, gender: "Male" },
    { name: "Lucky", age: 53, gender: "Male" },
    { name: "Steve", age: 69, gender: "Others" },
    { name: "Geeta", age: 3, gender: "Female" },
    { name: "Sabita", age: 11, gender: "Female" },
    { name: "Arav", age: 111, gender: "Male" },
    { name: "Rock", age: 5, gender: "Male" },
]

var arr2 = arr1.filter(function (val) {
    return val.age > 12;
})

console.log(arr2);