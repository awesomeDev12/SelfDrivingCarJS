const canvas = document.querySelector('#myCanvas');
canvas.height = window.innerHeight;
canvas.width = 200;

const car=new Car(100,100,30,50);
const ctx=canvas.getContext("2d");
car.draw(ctx);
