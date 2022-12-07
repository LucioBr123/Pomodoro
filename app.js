var timeHour = 0
var timeMinute = 0
var timeSecond = 10


var timeHourBreak = 0
var timeMinuteBreak = 0
var timeSecondBreak = 10


var hour = timeHour
var minute = timeMinute
var second = timeSecond

var pause=false

var counterBreakOrFocus = 0

var mlseconds = 1000
var timeron = false



function start(){
  if(timeron==false||pause==true){
    pause=false
    timer()
  }
  
}

function _stop(){
  pause=true
  
}



function save(){
  timeHour = document.getElementById('box-hour').value
  timeMinute= document.getElementById('box-minute').value
  timeSecond= document.getElementById('box-second').value

  timeHourBreak = document.getElementById('box-break-hour').value
  timeMinuteBreak = document.getElementById('box-break-minute').value
  timeSecondBreak = document.getElementById('box-break-second').value
//hide the configurator timer

}


function reset(){
  _stop()

  
  
  setTimeout(() => {
    //code
    hour = timeHour
    minute = timeMinute
    second = timeSecond
  
    var desciption = document.getElementById("description")
    desciption.innerHTML=`Time Focus`
    var sec = document.getElementById("second")
    sec.innerHTML=`${second}`

    var min = document.getElementById("minute")
    min.innerHTML=`${minute}`

    var hou = document.getElementById("hour")
    hou.innerHTML=`${hour}`
    
    
    
  }, "100")
  

  

}


var box = document.getElementById("conteinerConfig") 

function config(){   
  box.style.display = 'block'
}

window.onclick = function(event){
  if(event.target == box){
    box.style.display = 'none'
  }
}




///////////////////////////////
function timer() { 
  timeron = true       
  setTimeout(function() {  
    if (second==0&&minute>0){
        minute-=1
        second=60
    }
    if(minute==00&&hour>0){
        hour-=1
        minute=59
    }
    if(pause==false){
      second-=1
    }else{
      return
    }
      

    //console.log(`${hour}:${minute}:${second}`)
    //second
    
    var sec = document.getElementById("second")
    sec.innerHTML=`${second}`

    var min = document.getElementById("minute")
    min.innerHTML=`${minute}`

    var hou = document.getElementById("hour")
    hou.innerHTML=`${hour}`



    //transfer to html query selector
    
    if (second>0) {          
      timer()             
    }else{
      timeron = false

      //contador impar par para decidir se vai ser focus ou break

      counterBreakOrFocus+=1
      if (counterBreakOrFocus%2==0){
        hour = timeHourBreak
        minute = timeMinuteBreak
        second = timeSecondBreak
        var desciption = document.getElementById("description")
        desciption.innerHTML=`Time Break`
        taskStudyCompleted()
        timer()


      }else{
        hour = timeHour
        minute = timeMinute
        second = timeSecond
        var desciption = document.getElementById("description")
        desciption.innerHTML=`Time Focus`
        breakCompleted()
        timer()
      }


      

    }                    
  }, mlseconds)
  
    
}

////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////
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







