


const homeButton = document.querySelector('nav a:nth-of-type(1)');
const welcomeH2 = document.querySelector('.intro h2');
const navButtons = document.querySelectorAll('nav');
const bus = document.querySelector('header img');
const boatImg = document.querySelector('.content-destination img');
const signUpButtons = document.querySelectorAll('.btn');


function colorIt(e){
    e.target.style.color = 'pink';

    setTimeout(function(){
        e.target.style.color = 'purple';
        e.target.style.fontWeight = 'bold';
    }, 500);
    setTimeout(function(){
        e.target.style.color = 'black';
        e.target.style.fontWeight = 'bold';
    }, 1000);
    setTimeout(function(){
        e.target.style.color = '';
        e.target.style.fontWeight = '';
    }, 2500);
}

function clickIt(e){
    e.target.style.fontSize = '3rem';
    e.target.fontWeight = 'bold';

    setTimeout(function(){
        e.target.style.fontSize = '';
        e.target.style.fontWeight = '';
    }, 1000);
}



navButtons.forEach(e => e.addEventListener('mouseover', colorIt));


navButtons.forEach(e => e.addEventListener('click', clickIt));

signUpButtons.forEach(e => e.addEventListener('mouseover', colorIt));

signUpButtons.forEach(e => e.addEventListener('click', clickIt));


document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        welcomeH2.textContent = 'No escape fool';
        welcomeH2.style.fontSize = '5rem';
        welcomeH2.style.fontWeight = 'bold';
        welcomeH2.style.color = 'red';
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('header').style.backgroundColor = 'red';

        setTimeout(function(){
            welcomeH2.textContent = 'Welcome to the bus of fun';
            welcomeH2.style.fontSize = '';
            welcomeH2.style.fontWeight = '';
            document.querySelector('body').style.backgroundColor = '';
            document.querySelector('header').style.backgroundColor = '';
        }, 2000);

        setTimeout(function(){
            welcomeH2.textContent = 'Welcome to the bus of fun (youll never get out alive.)';
            welcomeH2.style.fontSize = '';
            welcomeH2.style.fontWeight = '';
        }, 4000);

        setTimeout(function(){
            welcomeH2.textContent = 'Welcome to the fun bus ya dirty rascal';
            welcomeH2.style.color = '';
            welcomeH2.style.fontSize = '';
            welcomeH2.style.fontWeight = '';
        }, 7000)
    }
})


document.addEventListener('keyup', function(e){
    if(e.key === 'Escape'){
        setTimeout(function(){
            alert('DEATH BUS');
        }, 7500);
    }
})


document.addEventListener('copy', function(e){
    alert('punishment shall come');

    setTimeout(function(){
        alert('death');
    }, 100);
})


bus.addEventListener('mouseleave', function(e){
    bus.style.transform = 'scaleX(-1)';

    setTimeout(function(){
        bus.style.transform = 'scaleX(1)';
    }, 1000);
})


boatImg.addEventListener('mouseleave', function(e){
    boatImg.style.transform = 'scaleX(-1)';

    setTimeout(function(){
        boatImg.style.transform = 'scaleX(1)';
    }, 1000)
})


signUpButtons.addEventListener('mouseover', function(e){
    signUpButtons.target.style.backgroundColor = 'red';
});



document.addEventListener('DOMContentLoaded', function(e){
    setTimeout(function(){
        alert('BUY NOW!');
    }, 9000);
})

//feeling better