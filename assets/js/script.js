const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    if(!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500)
    }
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') {
        jump();
    }
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const cloudsPosition = clouds.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 220 && marioPosition < 100 && pipePosition > 70) {
        clouds.style.animation = 'none'; 
        clouds.style.left = `${cloudsPosition}px`; 

        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = 'assets/images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }
}, 10)