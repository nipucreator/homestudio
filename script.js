const body = document.querySelector('body'),
sidebar = body.querySelector('.sidebar'),
toggle = body.querySelector('.toggle'),
searchBtn = body.querySelector('.search-box'),
modeSwitch = body.querySelector('.toggle-switch'),
modeText = body.querySelector('.mode-text'),
menuSizer = body.querySelector('.menu-sizer');


toggle.addEventListener('click', () =>{
    sidebar.classList.toggle('close');
});

menuSizer.onclick = function(){
    sidebar.classList.toggle('open');
    menuSizer.classList.remove('hide');
  }

searchBtn.addEventListener('click', () =>{
    sidebar.classList.remove('close');
});


modeSwitch.addEventListener('click', () =>{
    body.classList.toggle('dark');
});

if(body.classList.contains('dark')){
    modeText.innerText = 'Light Mode';
}else{
    modeText.innerText = 'Dark Mode';  
};

//json fetch
let song = document.getElementsByClassName('songCards')[0];

let json_url = "songs.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
  data.forEach((ele, i)=>{
    let {songName, image, songLink, artist} = ele;
    let songcard = document.createElement('a');
    songcard.classList.add('songCard');
    songcard.href = songLink;
    songcard.innerHTML = `
    <img src="${image}" alt="">
    <h4>${songName}</h4>
    <h5>${artist}</h5>
    `
    song.appendChild(songcard);
  });
});
