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
// console.log(sample1,newARRAY)
pushFront(sample1,7)
console.log(sample2)

const popFront = (arr) => {
    firstNum = arr[0];
    if (arr.length == 1){return console.log("array to short")}
    for(let i=0;i < arr.length-1;i++) {arr[i] = arr[i+1]};
    arr.pop();
    console.log(arr);
return(firstNum)
}

popFront(sample2)

const insertAt = (arr,index,num) => {
    let temp2 =new Array();
    if (index === 0){
    temp = num; 
    temp2.push(temp);
    for(let i=0; i<arr.length; i++ ){temp2.push(arr[i]);};
    console.log(temp2);}
    else {
        for(let i=0; i<index; i++){temp2.push(arr[i]);};
        temp2.push(num);
        for(let i=index; i<arr.length; i++){temp2.push(arr[i]);};
        console.log(temp2);}
    }

let sample4 = new Array(5,5,0,9)
insertAt(sample4,0,4)
insertAt(sample4,1,3)