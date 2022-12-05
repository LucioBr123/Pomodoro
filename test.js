var timeHour = 0
var timeMinute = 0
var timeSecond = 0

var timeHourBreak = 0
var timeMinuteBreak = 0
var timeSecondBreak = 0


///////////////////


var hour = 0
var minute = 0
var second = 0

var pause=false




/////////////////////////////////
function config(){
  document.getElementById('conteinerConfig').style.display = 'fixed'
}

function save(){
  timeHour = document.getElementById('box-hour').value
  timeMinute = document.getElementById('box-minute').value
  timeSecond = document.getElementById('box-second').value

  timeHourBreak = document.getElementById('box-break-hour').value
  timeMinuteBreak = document.getElementById('box-break-minute').value
  timeSecondBreak = document.getElementById('box-break-second').value
  document.getElementById('conteinerConfig').style.display = 'block'
}

function reset(){
  hour = timeHour
  minute = timeMinute
  second = timeSecond
}

function start(){
  pause=false
  timer()
}

function _stop(){
  pause=true
}
                

function timer() {        
  setTimeout(function() {  
    if (second==0&&minute>0){
        minute-=1
        second=60
    }
    if(minute==00&&hour>0){
        hour-=1
        minute=59
    }
    second-=1  

    //console.log(`${hour}:${minute}:${second}`)
    //second
    
    var sec = document.getElementById("second")
    sec.innerHTML=`${second}`

    var min = document.getElementById("minute")
    min.innerHTML=`${minute}`

    var hou = document.getElementById("hour")
    hou.innerHTML=`${hour}`



    //transfer to html query selector
    
    if (second>0&&pause==false) {          
      timer()             
    }                   
  }, 1000)
  
    
}




function timeloop(){
  while(true){
    var desciption = document.getElementById("desciption")
    desciption.innerHTML=`Time Focus`
    timer()
    taskStudyCompleted()
    hour = timeHour
    minute = timeMinute
    second = timeSecond

    var desciption = document.getElementById("desciption")
    desciption.innerHTML=`Time Break`
    timer()
    breakCompleted()
    hour = timeHourBreak
    minute =timeMinuteBreak
    second =timeSecondBreak

  }  
}

var count =0
function countStudy() {
   count+=1
}

function taskStudyCompleted() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.className='marking-count'
  countStudy()
  // and give it some content
  const newContent = document.createTextNode(`# ${count} round of study completed!`);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("marking");
  document.body.insertBefore(newDiv, currentDiv);
}

function breakCompleted() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.className='marking-count'
  
  // and give it some content
  const newContent = document.createTextNode(`Pause round completed!`);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("marking");
  document.body.insertBefore(newDiv, currentDiv);
  
}

