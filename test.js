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