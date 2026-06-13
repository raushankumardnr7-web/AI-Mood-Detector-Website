let title = document.getElementById("title");
let quote = document.getElementById("quote");
let music = document.getElementById("music");


let moods = {


happy:{

text:"You are Happy 😄",

quote:
"Keep smiling because your happiness inspires everyone.",

song:
"🎵 Happy Playlist: Pop, Dance, Feel Good Songs",

color:
"linear-gradient(135deg,#f6d365,#fda085)"

},


sad:{

text:"You are Sad 😢",

quote:
"Every storm passes. Better days are coming.",

song:
"🎵 Calm Piano & Relaxing Music",

color:
"linear-gradient(135deg,#4facfe,#00f2fe)"

},


angry:{

text:"You are Angry 😡",

quote:
"Take a deep breath and turn your energy into power.",

song:
"🎵 Meditation & Nature Sounds",

color:
"linear-gradient(135deg,#ff512f,#dd2476)"

},


tired:{

text:"You are Tired 😴",

quote:
"Rest today and come back stronger tomorrow.",

song:
"🎵 Lo-Fi Chill Beats",

color:
"linear-gradient(135deg,#a18cd1,#fbc2eb)"

}

};


function detectMood(mood)
{

title.innerHTML = moods[mood].text;

quote.innerHTML = moods[mood].quote;

music.innerHTML = moods[mood].song;


document.body.style.background =
moods[mood].color;


}



let button =
document.querySelector(".theme-btn");


button.onclick = function()
{

document.body.classList.toggle("dark");


if(button.innerHTML=="🌙")
{
button.innerHTML="☀️";
}

else
{
button.innerHTML="🌙";
}

}