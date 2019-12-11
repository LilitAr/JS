let arr=[1,2,3,4,5]
/*
indexOf
lastindexof
lenght
revers
new Array()
fill

*/ 
let arrr =new Array(5);
//console.log(arrr)
arrr.fill(1)
console.log(arrr)
let b =[];
//arr.shift()
//arr.unshift(8)
/*arr.forEach(function a(item,index,array){
console.log('item ' + item);
//console.log(index);
console.log('index ' + index);
//console.log(array);
console.log('array '+ array);
})
console.log(arr)*/

function forEachLH(array,callFN){
  let i=0

for (; i<array.length;i++)
{
 
  callFN(array[i],i,array);
}

}
//console.log('s')
forEachLH([1,2,3],function x(t,k,l){
  console.log(t + 'vv');

})

//console.log('s')
