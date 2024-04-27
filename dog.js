var velocity = document.getElementById("v");
var acceleration = document.getElementById("a");
var distance = document.getElementById("distance");
var finalvelocity = document.getElementById("final velocity");
var initialvelocity = document.getElementById("initial velocity");
var time = document.getElementById("time");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate(){
 
    if(distance.value=='' || time.value=='' || (velocity.checked==false)){
      modal.style.display = "block";
      modalText.innerHTML = `All fields are required!`;
  
    }else{
      countVelocity();
    }
  
}



function countVelocity(){
    var p = [distance.value, time.value];
    if(velocity.checked){
      p.push("velocity");
    }
    
  
    var velocity1 = Number(p[0])/Number(p[1]);

    var result = '';


    
resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Here your are result <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = velocity1.toFixed(3);
    
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}



