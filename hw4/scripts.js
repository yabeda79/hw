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
  var arr=[1, 2, 3, 4, 5]
  for(i=0; i<arr.length; i++){
    console.log(arr[i])
  }
}
btn1.onclick=task1

function task2(){
  console.log('Task2')
  var arr=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
  for(i=0; i<arr.length; i++){
    if((arr[i]>-10)&&(arr[i]<-3)){
      console.log(arr[i])
    }
  }
}
btn2.onclick=task2

function task3(){
  console.log('Task3')
  var arr=[]
    result=0
  for(i=23; i<=57; i++){
    arr.push(i)
  }
  console.log(arr)
  for(i=0; i<arr.length; i++){
    result=result+arr[i]
  }
  console.log(result)
}
btn3.onclick=task3

function task4(){
  console.log('Task4')
  var arr=['10','20','30','50','235','3000']
  for(i=0; i<arr.length; i++){
    if((arr[i][0]==1)||(arr[i][0]==2)||(arr[i][0]==5)){
      console.log(arr[i])
    }
  }
}
btn4.onclick=task4

function task5(){
  console.log('Task5')
  var arr=['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС']
  for(i=0; i<arr.length; i++){
    if((arr[i]=='СБ')||(arr[i]=='ВС')){
      console.log(arr[i].bold())
    } else {
      console.log(arr[i])
    }
  }
}
btn5.onclick=task5

function task6(){
  console.log('Task6')
  var arr=['pear','cherry','orange','blueberry']
  arr.push('strawberry')
  console.log(arr[arr.length-1])
}
btn6.onclick=task6

function task7(){
  console.log('Task7')
  var arr=[]
  while(true) {
    const result=prompt('Введи элементы массива')
    const number=!isNaN(parseFloat(result,10))
    if(number){
      arr.push(result)
    } else {break}
  }
  console.log(arr)
}
btn7.onclick=task7

function task8(){
  console.log('Task8')
  var arr=[12, false, 'text', 4, 2, -5, 0]
  var reverseArr=arr.reverse()
  var i=0
  while(i<reverseArr.length){
    console.log(reverseArr[i])
    i++
  }
}
btn8.onclick=task8

function task9(){
  console.log('Task9')
  const arr=[5, 9, 21,,, 9, 78,,,, 6]
  let emptyEl=0
  for(i=0; i<arr.length; i++){
    if(typeof(arr[i])=='undefined'){
      emptyEl++
    }
  }
  console.log(emptyEl)
}
btn9.onclick=task9

function task10(){
  console.log('Task10')
  const arr1=[48,9,0,4,21,5,1,69,0,589,6,4]
  // const arr2=[24,56,2,5,96,0,47,45,3,1,5,6,9,14,7,0,9,36,478]
  const arr2=[1,1,0,2]
  const firstArr1Zero=arr1.indexOf(0)+1
  const lastArr1Zero=arr1.lastIndexOf(0)
  const firstArr2Zero=arr2.indexOf(0)+1
  const lastArr2Zero=arr2.lastIndexOf(0)
  let newArr1=arr1.splice(firstArr1Zero, lastArr1Zero-firstArr1Zero)
  let newArr2=arr2.splice(firstArr2Zero, lastArr2Zero-firstArr2Zero)
  let resultArr1=0
  let resultArr2=0
  if((lastArr1Zero!==-1)&&(firstArr1Zero!==0)){
    for(i=0;i<newArr1.length;i++){
      resultArr1=resultArr1+newArr1[i]
    } 
  } else {resultArr1=0}
  console.log(resultArr1)
  if((lastArr2Zero!==-1)&&(firstArr2Zero!==0)){
    for(i=0;i<newArr2.length;i++){
      resultArr2=resultArr2+newArr2[i]
    } 
  } else {resultArr2=0}
  console.log(resultArr2)
}
btn10.onclick=task10

function task11(){
  console.log('Task11')
  const height=parseInt(prompt('Введи высоту треугольника'))
  let space=''
  let element=''
  let i=0
  let j=0
  while(i<height) {
    space=''
    element=''
    for (j = 0;j<height-i;j++) space+=" "
    for (j = 0;j<2*i+1;j++) element+="^"
    console.log(space+element)
    i++
  }
}
btn11.onclick=task11