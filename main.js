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


  let colors = () => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  square.style.backgroundColor = "#" + randomColor;
  }

  square.addEventListener("mouseover", function(){
  colors();
  })

  square.addEventListener('mouseout', function() {
  square.style.backgroundColor = "rgb(24, 14, 30)";
  square.style.transition="all 1s"
  })}
