
var hora = 0
var minuto = 0
var segundo = 0
var pause=true;


/////////////////////////////////

                

function timer() {        
  setTimeout(function() {  
    if (segundo==0&&minuto>0){
        minuto-=1
        segundo=60
    }
    if(minuto==00&&hora>0){
        hora-=1
        minuto=59
    }
    segundo-=1  

    console.log(`${hora}:${minuto}:${segundo}`)
    //tranferir para o html depois
    
    if (segundo>0&&pause==false) {          
      timer();             
    }                       
  }, 1000)
}

timer();                   //  start the loop


function start(){
    pause=false
}

function _stop(){
    pause=true
}



