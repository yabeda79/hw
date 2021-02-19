let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')
let btn3=document.getElementById('btn3')
let btn4=document.getElementById('btn4')
let btn5=document.getElementById('btn5')
let btn6=document.getElementById('btn6')
let btn7=document.getElementById('btn7')
let btn8=document.getElementById('btn8')
let btn9=document.getElementById('btn9')
let btn10=document.getElementById('btn10')

function task1() {
  console.log('Task1')
  for(i=1; i<=50; i++){
    console.log(i)
    // document.write(+i+' ')
  }
  for(i=35; i>=8; i--){
    console.log(i)
  }
}
btn1.onclick=task1

function task2(){
  console.log('Task2')
  var i=89
  while(i>=11){
    console.log(i)
    i--
  }
}
btn2.onclick=task2

function task3(){
  console.log('Task3')
  var sum=0
  for(i=0; i<=100; i++){
    sum=sum+i
  }
  console.log(sum)
}
btn3.onclick=task3

function task4(){
  console.log('Task4')
  var sum=0
    num=prompt('Найти сумму чисел до?')
  for(i=1; i<=num; i++){
    sum=sum+i
  }
  console.log(sum)
}
btn4.onclick=task4

function task5(){
  console.log('Task5')
  for(i=8; i<=56; i++){
    if(i%2===0){
      console.log(i)
    }
  }
}
btn5.onclick=task5

function task6(){
  console.log('Task6')
  for(i=2; i<=9; i++){
    for(j=1; j<=9; j++){
      console.log(+i+'*'+j+'=',i*j)
    }
    console.log('********')
  }
}
btn6.onclick=task6

function task7(){
  console.log('Task7')
  var i=0
    n=1000
  while (n>=50){
    n=n/2
    i++
  }
  console.log(n)
  console.log(i)
}
btn7.onclick=task7

function task8(){
  console.log('Task8')
  var avAr=0
    num=null
    i=0
    sum=0
  while((num!=0)&&(num!=' ')){
    num=+prompt('Вводи числа, прерываем на 0 или пробеле')
    sum=sum+num
    i++
    console.log(typeof(num))
  }
  avAr=sum/i
  console.log(avAr)
}
btn8.onclick=task8

function task9(){
  console.log('Task9')
  var str='4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8'
  //var str=prompt('Введи числа через пробел')
  var arr=str.split(' ')
    minElem=10000000
    maxElem=-10000000
  //console.log(arr)
  for(i=0; i<=arr.length; i++){
    if(arr[i]>maxElem){
    maxElem=arr[i]
  } else {
      if(arr[i]<minElem){
        minElem=arr[i]
      }
    }
  }
  console.log(maxElem)
  console.log(minElem)
}
btn9.onclick=task9

function task10(){
  console.log('Task10')
  var num=prompt('Введи число')
    arr=num.split('')
    newArr=[]
    sumArr=+0
  for(i=0; i<arr.length; i++){
    arr[i]=+arr[i]
    console.log(arr[i])
    sumArr=sumArr+arr[i]
    //console.log(typeof(arr[i]))
  }
  for(i=arr.length-1; i>=0; i--){
    newArr.push(arr[i])
  }
  console.log(arr.length)
  console.log(sumArr)
  console.log(newArr)

}
btn10.onclick=task10