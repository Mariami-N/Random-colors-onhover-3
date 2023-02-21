let contaner=document.querySelector(".contaner")
let contanerdiv = document.createElement("contanerdiv");
contaner.appendChild(contanerdiv)
contanerdiv.style.display = "flex";
contanerdiv.style.flexWrap = "wrap";
contanerdiv.style.width = "900px";
contanerdiv.style.height = "900px";

for (let i = 0; i < 500; i++) {
  let square = document.createElement('square');
  contanerdiv.appendChild(square);
  square.style.width = '30px';
  square.style.height = '30px';
  square.style.backgroundColor = "rgb(24, 14, 30)";
  square.style.margin = '3px';

let x;
  let colors = () => {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  x=randomColor;
  square.style.backgroundColor = x;
// square.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
  }

  square.addEventListener("mouseover", function(){
  colors();
   square.style.boxShadow = "0px 0px 30px 4px" + x;
  })
 
  square.addEventListener('mouseout', function() {
  square.style.backgroundColor = "rgb(24, 14, 30)";
  square.style.transition="all 1s"
  square.style.boxShadow = "none";
  })}
