




//creat & show current & targer date & time

let heading = document.createElement("h1");
heading.innerHTML="Date Exercise";
document.body.append(heading);

const targetDate = "Wed Aug 16 2023 11:32:59 GMT+0530";
dateShow(targetDate);
const now = new Date();
dateShow(now);

//function ......
function dateShow(arg){
let heading2 = document.createElement("h2");
heading2.innerHTML=arg;
document.body.append(heading2);
}


const calcTime = Date.parse(targetDate) - Date.parse(now);
// console.log(calcTime);
// console.log(calcTime/86400000);
// console.log("the minits is :" +calcTime/1000/60)
// console.log("the houre is : "+calcTime/1000/60/60);









// creat heading and div id and span class
let divison = document.createElement("div");
divison.id="time";
document.body.append(divison);

let day = document.createElement("h3");
day.className="day";
divison.appendChild(day);

let hour = document.createElement("h3");
hour.className="hour";
divison.appendChild(hour);

let min = document.createElement("h3");
min.className="min";
divison.appendChild(min);




const getDay = document.querySelector(".day");
let getHour = document.querySelector(".hour");
let getMin = document.querySelector(".min");

getDay.innerHTML="Remaining days : " +Math.round(calcTime/86400000);
getHour.innerHTML= "Reminaing hours : "+Math.round(calcTime/1000/60/60);
getMin.innerHTML= "Reminaing minites : "+Math.round(calcTime/1000/60);