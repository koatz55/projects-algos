let newARRAY = new Array; 
const backToFront = (arr) =>{ 
    temp = arr[arr.length-1]; 
    arr.pop();
    newARRAY.push(temp);
    for(let i= 0;i<arr.length; i++ ){newARRAY.push(arr[i]);};
}
let sample1 = new Array (8,5,3,4)
backToFront(sample1)
console.log(newARRAY)
