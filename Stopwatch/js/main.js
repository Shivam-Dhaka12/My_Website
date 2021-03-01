var start = document.querySelector(".start");
var pause = document.querySelector('.pause');
var reset = document.querySelector('.reset');
var minref = document.querySelector('.min');
var secref = document.querySelector('.sec');
var state = {
    min : 00 ,
    sec : 00 
};

function computeNextTime(state) {
    var min = state.min ;
    var sec = state.sec ;

    if (sec===59) {
        sec = 00 ;
        min++;
    }
    else{
        sec++;
    }
    return{
        min : min ,
        sec : sec 
    };

}
function setTime(state) {
    var min = state.min;
    var sec = state.sec ;
    secref.textContent=sec;
    minref.textContent=min;
    
}

var id ;

function startfn() {

   if (id===undefined) {
    id = setInterval(function () {
        var newState = computeNextTime(state);
        state = newState ;
        setTime(newState);
        console.log(newState);  
      } , 1000);
   }
    
}
function pausefn() {
    
    if (id===undefined) {
        return;
    }
    clearInterval(id);
    id = undefined;
}
function resetfn() {

    clearInterval(id);
    state = {
        min: 0,
        sec: 0,
    };
    setTime(state);
    id = undefined;
    
}
start.addEventListener('click', startfn);
pause.addEventListener('click', pausefn);
reset.addEventListener('click', resetfn);
