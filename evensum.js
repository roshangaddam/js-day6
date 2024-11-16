let arr=[23,54,67,64,46,95,98];
let evensum=0;
let oddsum=0;

for(i=0; i<arr.length; i++){
    if (arr[i]%2==0){
        evensum+=arr[i];
    }
    else{
        oddsum+=arr[i];
    }
  
}
console.log("sum of even numaber:",evensum);
console.log("sum of odd numaber:",oddsum);
