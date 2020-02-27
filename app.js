// floating image bellow the frame:
const image = document.querySelector(".image-content");
const frame = document.querySelector(".image-border");

const cords = document.querySelector(".cords");
const x = document.querySelector(".x");
const y = document.querySelector(".y");

  // on hovering in the image frame:
frame.addEventListener("mousemove", (event)=> {

  let Width = screen.width;
  let Height = screen.height;

    // get the coordinates of the window:
  let xCord = event.clientX;
  let yCord = event.clientY;

  let min = Height - yCord;
  let max = Height - yCord + 200;


  image.style.top = `${10}px`;
  image.style.left = `${10}px`;

    // display the coordinates:
  if(yCord < min + 100) {

  }
  x.innerHTML = `Ymin: ${min}`;
  y.innerHTML = `Ymax: ${max}`;
})


  // on hovering out the image frame: 
frame.addEventListener("mouseout", ()=> {
  image.style.top = "0px";
  image.style.left = "0px";
})