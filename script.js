/* Array Creation and Initialisation */
let arr;
arr=[20,25,15,15,39,30];
console.log("Array Creation:=> "+arr);

/* Array Manipulation  => Array push */
let arr1=[50,12,34,56,37,38,29]
console.log("Given Array:=> "+arr1);
arr1.push(20);
console.log("Array push:=> "+arr1);

/*Array pop*/
let arr2=[50,12,34,56,37,38,29]
console.log("Given Array:=> "+arr2);
arr2.pop();
console.log("Array pop:=> "+arr2); 

/* Array Shift */
let arr3=[50,12,34,56,37,38,29]
console.log("Given Array:=> "+arr3);
arr3.shift();
console.log("Array shift:=> "+arr3);

/* Array Unshift */
let arr4=[50,12,34,56,37,38,29]
console.log("Given Array:=> "+arr4);
arr4.unshift();
console.log("Array shift:=> "+arr4);

/* Array Searching */
let arr5=[50,12,34,56,37,38,29]
console.log(arr5);
console.log(arr5.indexOf(37)); 

/* Array Finding */
let arr6=[30,12,23,24,34,25,29];
console.log(arr6.findIndex());

/* Array Filtering */
 let arr7=[3,4,6,8,2,10,0];
 const even=arr7.filter(function (arr7) {
    if(arr7%2==0)
        {
         return arr7;
        }
    
 })
 console.log(even)

/* Array Sorting */
let arr8=[23,45,36,29,39,10,30,28];
console.log("Given Array:=> "+arr8);
arr8.sort();
console.log("Sorted Array:=> "+arr8);

/* Array Mapping */
let arr9=[2,5,8,10,15,20];
let square = arr9.map(arr9 => arr9 * arr9);
console.log(square) 
