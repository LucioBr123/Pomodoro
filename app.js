
var hour = 0
var minute = 0
var second = 10
var pause=false




/////////////////////////////////

                

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
    }else{
      //sound/ add in list #time break or study / and question (good,mid,bad) produtivity
      
      console.log('break')
      var desciption = document.getElementById("description")
      desciption.innerHTML=`Time Break` 

      timerBreak()

    }                    
  }, 1000)
  
    
}

////////////////////////////////////////////////////////////////////

var hourBreak = 0
var minuteBreak = 1
var secondBreak = 0


function timerBreak() {        
    setTimeout(function() {  
      if (secondBreak==0&&minuteBreak>0){
          minuteBreak-=1
          secondBreak=60
      }
      if(minuteBreak==00&&hourBreak>0){
          hourBreak-=1
          minuteBreak=59
      }
      secondBreak-=1  
  
      //console.log(`${hour}:${minute}:${second}`)
      //second
      
      var bsec = document.getElementById("second")
      bsec.innerHTML=`${secondBreak}`
  
      var bMin = document.getElementById("minute")
      bMin.innerHTML=`${minuteBreak}`
  
      var bHou = document.getElementById("hour")
      bHou.innerHTML=`${hourBreak}`
  
  
  
      //transfer to html query selector
      
      if (secondBreak>0&&pause==false) {          
        timerBreak()             
      }else{
        //sound/ add in list #time break or study / and question (good,mid,bad) produtivity 
      }                    
    }, 1000)
    
      
  }

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







function start(){
  pause=false
  timer()
}

function _stop(){
  pause=true
}


//for capture dt
/*
var hour = 0
var minute = 0
var second = 0

var hourBreak = 0
var minuteBreak = 0
var secondBreak = 0
*/ 

function save(){
  hour = document.getElementById('box-hour').value
  minute= document.getElementById('box-minute').value
  second= document.getElementById('box-second').value

  hourBreak = document.getElementById('box-break-hour').value
  minuteBreak = document.getElementById('box-break-minute').value
  secondBreak = document.getElementById('box-break-second').value
}


function reset(){
  hour = 
  minute = document.getElementById('minute')
  second = document.getElementById('second')

  

}









////TESTING

//start()
//stop()
//setTime()
//setBreak()
//createLi()
//createLiBreak()



//OKS

//timer()



