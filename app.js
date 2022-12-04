
var hour = 0
var minute = 0
var second = 0
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
      

      var desciption = document.getElementById("desciption")
      desciption.innerHTML=`Time Break` 

      timerBreak()

    }                    
  }, 1000)
  
    
}

////////////////////////////////////////////////////////////////////

var hourBreak = 0
var minuteBreak = 0
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
  newDiv.className='Marking'
  countStudy()
  // and give it some content
  const newContent = document.createTextNode(`# ${count} round of study completed!`);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


function breakCompleted() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.className='Marking'
  
  // and give it some content
  const newContent = document.createTextNode(`Another round of pause completed!`);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  
}







function start(){
  pause=false
  timer()
}

function _stop(){
  pause=true
}


function setTime(h,m,s){
  h=hourBreak
  m=minuteBreak
  s=secondBreak
  //config in html time focus
}

function setBreak(h,m,s){
  h=hourBreak
  m=minuteBreak
  s=secondBreak
  //config in html time to brak
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



