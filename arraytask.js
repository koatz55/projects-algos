let newARRAY = new Array; 

const backToFront = (arr) =>{ 
    temp = arr[arr.length-1]; 
    arr.pop();
    for(let i= 0;i<arr.length; i++ ){newARRAY.push(arr[i]);};
    for(let i=0;i<arr.length;i++){arr.pop();};
    arr[0] = temp; for(let i= 0;i<newARRAY.length; i++ ){arr.push(newARRAY[i]);};
}
let sample1 = new Array (8,5,3,4)
backToFront(sample1)
console.log(sample1)

let sample2 = new Array ();
const pushFront = (arr,num) =>{ 
    temp = num; 
    sample2.push(temp);
    for(let i= 0;i<arr.length; i++ ){sample2.push(arr[i]);};
}
console.log(sample1,newARRAY)
pushFront(sample1,7)
console.log(sample2)