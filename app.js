
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

    console.log(`${hour}:${minute}:${second}`)
    //second
    
    var sec = document.getElementById("second")
    sec.innerHTML=`${second}`

    function showPanel(fieldName) {
      var fieldNameElement = document.getElementById('field_name');
      fieldNameElement.innerHTML = "My new text!";

    }



    //transfer to html query selector
    
    if (second>0&&pause==false) {          
      timer()             
    }else{
      //sound/ add in list #time break or study / and question (good,mid,bad) produtivity 
    }                    
  }, 1000)
  
    
}


function start(){
  pause=false
  timer()
}

function _stop(){
  pause=true
}


function setTime(h,m,s){
  h=hour
  m=minute
  s=second
  //config in html time focus
}

function setBreak(h,m,s){
  h=hour
  m=minute
  s=second
  //config in html time to brak
}


////TESTING

//start()
//stop()
//setTime()
//setBreak()




//OKS

//timer()