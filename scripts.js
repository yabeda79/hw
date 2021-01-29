let str="Привет",
  sum=123,
  num=15.8,
  flag=true,
  txt="true";

console.log('typeof str =',typeof str);
console.log('typeof sum =',typeof sum);
console.log('typeof num =',typeof num);
console.log('typeof flag =',typeof flag);
console.log('typeof txt =',typeof txt);

let a1=5%3,
  a2=3%5,
  a3=5+'3',
  a4='5'+3,
  a5='5'-3,
  a6=75+'kg',
  a7=785*653,
  a8=0*0,
  a9=0/2,
  a10=89/0,
  a11=98+2,
  a12=5-98,
  a13=(8+56*4)*7/5,
  a14=(9-12)*7/(5+2),
  a15=+"123",
  a16=1||0,
  a17=false||true,
  a18=true>0;

console.log('typeof a1=', typeof a1);
console.log('typeof a2=', typeof a2);
console.log('typeof a3=', typeof a3);
console.log('typeof a4=', typeof a4);
console.log('typeof a5=', typeof a5);
console.log('typeof a6=', typeof a6);
console.log('typeof a7=', typeof a7);
console.log('typeof a8=', typeof a8);
console.log('typeof a9=', typeof a9);
console.log('typeof a10=', typeof a10);
console.log('typeof a11=', typeof a11);
console.log('typeof a12=', typeof a12);
console.log('typeof a13=', typeof a13);
console.log('typeof a14=', typeof a14);
console.log('typeof a15=', typeof a15);
console.log('typeof a16=', typeof a16);
console.log('typeof a17=', typeof a17);
console.log('typeof a18=', typeof a18);

let width=23,
  height=10,
  Arec=0;

Arec=(width*height);

console.log('Arec=', Arec);

let Vcyl=0,
  cylHeight=10;

const pi=3.14159;

Vcyl=((pi*a7)/4)*cylHeight;

console.log('Vcyl=', Vcyl);

let cirR=5,
  Acir=0;

Acir=pi*(cirR^2);

console.log('Acir=', Acir);

let trapOsn1=5,
  trapOsn2=7,
  trapHeight=10;
  Atrap=0;

Atrap=((trapOsn1+trapOsn2)/2)*trapHeight;

console.log('Atrap=', Atrap);

let credit=2*(10**6),
  annualRate=10/100,
  years=5,
  overpay=0;

overpay=credit*annualRate*years;

console.log('overpayment=', overpay);

let a=8,
  b=3,
  x1=0,
  x2=0,
  x3=0;

x1=(16-a)/2+b;

if (a+2*(x1-b)==16) {
  console.log('x1=',x1);
} else {
    console.log('Ошибка');
  }

x2=(a-15*b)/(b-6);

if (b*(x2+15)==a+6*x2) {
  console.log('x2=',x2);
} else {
    console.log('Ошибка');
  }

x3=23780/(1+2+a+b);

if ((x3+2*x3+a*x3+b*x3)%23780<1) {
  console.log('x3=',x3);
} else {
    console.log('Ошибка', typeof x3);
  }

let arr=["Бывало, спит у ног собака,", "костер занявшийся гудит,",
 "и женщина из полумрака", "глазами зыбкими глядит", " ",
 "Потом под прихотью приляжет", "на куртку рыжую мою",
 "и мне, задумчивая скажет", " ", "\"А ну-ка, спой!..\" - и я пою"];

// console.log(arr);

for (var i=0; i<arr.length; i++) {
  console.log(arr[i]);
};

let s1="индо земля зашаталась под ногами-и вырос, ",
  s2="и заревел он голосом диким... ",
  s3="блеснула молния и ударил гром, ",
  s4="а так какое-то чудище, страшное и мохнатое, ",
  s5="как будто из-под земли, перед купцом: ",
  s6="Он подошел и сорвал аленький цветочек. ",
  s7="зверь не зверь, человек не человек, ",
  s8="В ту же минуту, безо всяких туч ",
  text='';

  text=s6+s8+s3+s1+s5+s7+s4+s2;

  console.log(text);
