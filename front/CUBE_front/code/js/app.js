const cubeContainer = document.querySelector('.cube-container');

let rotationX = 0;
let rotationY = 0;

document.addEventListener('wheel', (event) => {
    rotationX += event.deltaY / 2;
    rotationY += event.deltaX / 2;

    cubeContainer.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
