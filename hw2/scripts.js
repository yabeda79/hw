let name=prompt('your name?'),
  age=prompt('your age?'),
  city=prompt('your city?'),
  phone=prompt('your phone?'),
  email=prompt('your email?'),
  company=prompt('your company');

document.writeln('Меня зовут ', name, ', мне ', age, ' лет. ', ' Я проживаю в городе ', city, ', работаю в компании ', company, '. Мои контактные данные: ', phone, ', ', email, '.');

let bYear=2021-age;

document.writeln(' ', name, ' родился в ', bYear, ' году');

let a=prompt('Введи 6 цифр'),
  b=false,
  arr=[],
  sum1=0,
  sum2=0;
 

arr=a.split('');
console.log(arr);

for(i=0; i<3; i++) {
  sum1=sum1+arr[i];
}
console.log(sum1);

for(i=3; i<6; i++) {
  sum2=sum2+arr[i];
}
console.log(sum2);

if(sum1==sum2) {
  b=true;
}

document.write(b);

let aa=prompt('любое число');

if(aa>0) {
  alert('>0');
} else {
  alert('<=0')
}

let a5=prompt('a5'),
  b5=prompt('b5');

console.log(a5-b5);
console.log(a5+b5);
console.log(a5/b5);
console.log(a5*b5);

if(a5+b5>1) {
  console.log((a5+b5)**2)
}

if(((a5>2)&&(a5<11))||((b5>=6)&&(b5<14))) {
  console.log('Верно')
} else {
  console.log('Неверно')
}

let n=prompt('Введи число от 0 до 59');

if(n/15<=1){
  console.log('Первая четверть')
} else {
  if(n/15<=2) {
    console.log('Вторая четверть')
  } else {
    if(n/15<=3) {
      console.log('Третья четверть')
    } else {
      if(n/15<4){
        console.log('Четвертая четверть')
      } else {
        console.log('что-то не то')
      }
    }
  }
}

function hw2_8(day) {
  if((day>=1)&&(day<=10)) {
    console.log('Первая декада')
  } else {
    if(day<=20) {
      console.log('Вторая декада')
    } else {
      if(day<=31) {
        console.log('Третья декада')
      } else {
        console.log('что-то не то')
      }
    }
  }
  console.log(day)
}

hw2_8(prompt('Число от 1 до 31'))

function hw2_9(dayNum) {
  if(dayNum/365<1) {
    console.log('Меньше года')
  } else {
    console.log(+dayNum/365+' лет/год')
  }
  if(dayNum/31<1) {
    console.log('Меньше месяца')
  } else {
    console.log(+dayNum/31+' месяц/месяца')
  }
  if(dayNum/7<1) {
    console.log('Меньше месяца')
  } else {
    console.log(+dayNum/7+' недель/недели')
  }
  console.log(+dayNum*24+' часа/часов')
  console.log(+dayNum*24*60+' минута/минут')
  console.log(+dayNum*24*60*60+' секунда/секунд')

  console.log(dayNum)
}
hw2_9(prompt('Введи любое количество дней'))

function hw2_10(day10){
  var days=day10%365
    monthNum=Math.trunc(days/30)
    month=''
    season=''

  switch(monthNum){
    case 0: month='Январь'
    break
    case 1: month='Февраль'
    break
    case 2: month='Март'
    break
    case 3: month='Апрель'
    break
    case 4: month='Май'
    break
    case 5: month='Июнь'
    break
    case 6: month='Июль'
    break
    case 7: month='Август'
    break
    case 8: month='Сентябрь'
    break
    case 9: month='Октябрь'
    break
    case 10: month='Ноябрь'
    break
    case 11: month='Декабрь'
    case 12: month='Декабрь'
    break
  }
  switch (month){
    case 'Декабрь': season='Зима'
    case 'Январь': season='Зима'
    case 'Февраль': season='Зима'
    break
    case 'Март': season='Весна'
    case 'Апрель': season='Весна'
    case 'Май': season='Весна'
    break
    case 'Июнь': season='Лето'
    case 'Июль': season='Лето'
    case 'Август': season='Лето'
    break
    case 'Сентябрь': season='Осень'
    case 'Октябрь': season='Осень'
    case 'Ноябрь': season='Осень'
    break
  }

  console.log(monthNum)
  console.log(month)
  console.log(season)
}

hw2_10(prompt('Введи любое количество дней еще раз'))