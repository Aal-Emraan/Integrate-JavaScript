function red(){
    document.body.style.backgroundColor = 'red'
}

const blueButton = document.getElementById('blue');
blueButton.onclick = blue;

function blue(){
    document.body.style.background = "blue";
}

const pinkButton = document.getElementById('pink');
pinkButton.onclick = function pink(){document.body.style.backgroundColor = 'pink'}

const cyan = document.getElementById('cyan');
cyan.addEventListener('click', cyanColor);

function cyanColor(){
    document.body.style.backgroundColor = 'cyan';
}

const hotpink = document.getElementById('hotpink');
hotpink.addEventListener('click', function(){document.body.style.backgroundColor = 'hotpink'});