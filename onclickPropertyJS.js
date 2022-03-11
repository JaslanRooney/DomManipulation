const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("You clicked me")
    console.log("I hope it worked")
}

btn.onmouseenter = scream;
function scream(){
    console.log('ahhhhhhh');
    console.log('stop touching me!')
}

document.querySelector('h1').onclick = function(){
    alert('you cliked the h1!')
}


const btn3 = document.querySelector('#v3')

btn3.addEventListener('click', ()=> {
    alert ('You clicked me!!')
})

function twist(){
    console.log('twist')
}
function shout(){
    console.log('shout')
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)