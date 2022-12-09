
//var configs timer focus

var timeHour = 00
var timeMinute = 45
var timeSecond = 00

//var configs time breaks
var timeHourBreak = 0
var timeMinuteBreak = 15
var timeSecondBreak = 00

//var used in timer 
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

function config(){   
  var box = document.getElementById("conteinerConfig")
  box.style.display = 'block'
  
}


function closeBox(){
  var box = document.getElementById("conteinerConfig")
  box.style.display = 'none'
}



function save(){
  timeHour = document.getElementById('box-hour').value
  timeMinute= document.getElementById('box-minute').value
  timeSecond= document.getElementById('box-second').value

  timeHourBreak = document.getElementById('box-break-hour').value
  timeMinuteBreak = document.getElementById('box-break-minute').value
  timeSecondBreak = document.getElementById('box-break-second').value
  closeBox()
  reset()
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





///////////////////////////////
function timer() { 
  timeron = true       
  setTimeout(function() {  
    if (second==0&&minute>0){
        minute-=1
        second=59
        
    }
    if(minute==0&&hour>0){
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



    
    
    if (second>-1) {          
      timer()             
    }else{
      timeron = false

      
      counterBreakOrFocus+=1
      //break or focus
      
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
//count tasks completed
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







