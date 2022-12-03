
var bHour = 0
var bMinute = 0
var bSecond = 0
var pause=false






                

function timer() {        
  setTimeout(function() {  
    if (bSecond==0&&bMinute>0){
        bMinute-=1
        bSecond=60
    }
    if(bMinute==00&&bHour>0){
        bHour-=1
        bMinute=59
    }
    bSecond-=1  

    //console.log(`${hour}:${minute}:${second}`)
    //second
    
    var sec = document.getElementById("second")
    sec.innerHTML=`${bSecond}`

    var min = document.getElementById("minute")
    min.innerHTML=`${bMinute}`

    var hou = document.getElementById("hour")
    hou.innerHTML=`${bHour}`



    //transfer to html query selector
    
    if (bSecond>0&&pause==false) {          
      timer()             
    }else{
      //sound/ add in list #time break or study / and question (good,mid,bad) produtivity 
    }                    
  }, 1000)
  
    
}

////////////////////////////////////////////////////////////////////

var bHour = 0
var bMinute = 0
var bSecond = 0


function timer2() {        
    setTimeout(function() {  
      if (bSecond==0&&bMinute>0){
          bMinute-=1
          bSecond=60
      }
      if(bMinute==00&&bHour>0){
          bHour-=1
          bMinute=59
      }
      bSecond-=1  
  
      //console.log(`${hour}:${minute}:${second}`)
      //second
      
      var bSec = document.getElementById("second")
      bSec.innerHTML=`${bSecond}`
  
      var bMin = document.getElementById("minute")
      bMin.innerHTML=`${bMinute}`
  
      var bHou = document.getElementById("hour")
      bHou.innerHTML=`${bHour}`
  
  
  
      //transfer to html query selector
      
      if (bSecond>0&&pause==false) {          
        timer2()             
      }else{
        //sound/ add in list #time break or study / and question (good,mid,bad) produtivity 
      }                    
    }, 1000)
    
      
  }

  /////////////////////////////////////////////////////









function start(){
  pause=false
  timer()
}

function _stop(){
  pause=true
}


function setTime(h,m,s){
  h=bHour
  m=bMinute
  s=bSecond
  //config in html time focus
}

function setBreak(h,m,s){
  h=bHour
  m=bMinute
  s=bSecond
  //config in html time to brak
}


////TESTING

//start()
//stop()
//setTime()
//setBreak()




//OKS

//timer()