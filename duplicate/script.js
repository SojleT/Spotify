console.log("welcome to Spotify");
let songIndex=0;
let audioElement = new Audio("Gnarls Barkley - Crazy (Official Video).mp3");
let masterPlay= document.getElementById("masterPlay");
let masterPause= document.getElementById("masterPause");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [{songName:"Gnarls-Barkley-Crazy", filePath:"Gnarls Barkley - Crazy (Official Video).mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Gnarls-Barkley-Just a thought", filePath:"Gnarls Barkley - Just a Thought.mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Gnarls-Barkley-No Time Soon", filePath:"Gnarls Barkley - Just a Thought.mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Gnarls-Barkley-Open Book", filePath:"Gnarls Barkley - Open book.mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Gnarls-Barkley-Would Be Killer", filePath:"Gnarls Barkley - Would Be Killer.mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Gnarls-Barkley-Live-From-Astoria", filePath:"Gnarls Barkley Live From The Astoria 2- Part 16- Reckoner.mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Gnarls-Barkley-Who's-Gonna-Save-My-Soul-Now", filePath:"Gnarls Barkley- Who's Gonna Save My Soul.mp4", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Gnarls-Barkley-Going-On", filePath:"Y2Mate.is - Gnarls Barkley - Going On-u_R9fId_Rqo-160k-1654493882460.mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"},
{songName:"Smiley-Faces", filePath:"Y2Mate.is - Smiley Faces-7UNRUcj9_vY-160k-1656771812339.mp3", coverPath:"GnarlsBarkleyCrazyCover.JPG"}]
songItems.forEach((element, i)=>{
    
element.getElementsByTagName()("img")[0].src= songs[i].filePath;
element.getElementsByClassName()("songName")[0].innerText= songs[i].songName;

})



masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); gif.style.opacity=1;
    masterPlay.classList.remove("fa fa-play-circle-o");
masterPlay.classList.add("fa-regular fa-circle-pause");
}







})
masterPause.addEventListener("click", ()=>{
    if(audioElement.played || audioElement.currentTime>=0){
        audioElement.pause(); gif.style.opacity=0;
        }
})
//audioElement.play();
audioElement.addEventListener("timeupdate", ()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);

myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", ()=>{
audioElement.currentTime=myProgressBar.value * audioElement.duration/100;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-regular fa-circle-pause");    
    element.classList.add("fa-play-circle-o");
    
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
element.addEventListener("click", (e)=>{

console.log(e.target);
makeAllPlays();
e.target.classList.remove("fa-play-circle-o");
e.target.classList.add("fa-regular fa-circle-pause");
audioElement.src = "Gnarls Barkley - No Time Soon.mp3";
audioElement.currentTime=0;
audioElement.play();
})

})