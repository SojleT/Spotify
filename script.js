console.log("welcome to Spotify");
let songIndex=0;
let audioElement = new Audio("Gnarls Barkley - Crazy (Official Video).mp3");
let audioElement1 = new Audio("Gnarls Barkley - Crazy (Official Video).mp3");
let audioElement2 = new Audio("Gnarls Barkley - Just a Thought.mp3");
let audioElement3 = new Audio("Gnarls Barkley - No Time Soon.mp3");
let audioElement4 = new Audio("Gnarls Barkley - Open book.mp3");
let audioElement5 = new Audio("Gnarls Barkley - Would Be Killer.mp3");
let audioElement6 = new Audio("Gnarls Barkley Live From The Astoria 2- Part 16- Reckoner.mp3");
let audioElement7 = new Audio("Gnarls Barkley- Who's Gonna Save My Soul.mp4");
let audioElement8 = new Audio("Y2Mate.is - Gnarls Barkley - Going On-u_R9fId_Rqo-160k-1654493882460.mp3");
let audioElement9 = new Audio("Y2Mate.is - Smiley Faces-7UNRUcj9_vY-160k-1656771812339.mp3");
let masterPlay= document.getElementById("masterPlay");
let masterPlay1= document.getElementById("masterPlay1");
let masterPlay2= document.getElementById("masterPlay2");
let masterPlay3= document.getElementById("masterPlay3");
let masterPlay4= document.getElementById("masterPlay4");
let masterPlay5= document.getElementById("masterPlay5");
let masterPlay6= document.getElementById("masterPlay6");
let masterPlay7= document.getElementById("masterPlay7");
let masterPlay8= document.getElementById("masterPlay8");
let masterPlay9= document.getElementById("masterPlay9");
let masterPause= document.getElementById("masterPause");
let masterPause1= document.getElementById("masterPause1");
let masterPause2= document.getElementById("masterPause2");
let masterPause3= document.getElementById("masterPause3");
let masterPause4= document.getElementById("masterPause4");
let masterPause5= document.getElementById("masterPause5");
let masterPause6= document.getElementById("masterPause6");
let masterPause7= document.getElementById("masterPause7");
let masterPause8= document.getElementById("masterPause8");
let masterPause9= document.getElementById("masterPause9");
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









masterPlay2.addEventListener("click", ()=>{
    if(audioElement2.paused || audioElement2.currentTime<=0){
        audioElement2.play(); gif.style.opacity=1;
    masterPlay2.classList.remove("fa fa-play-circle-o");
masterPlay2.classList.add("fa-regular fa-circle-pause");
}})





masterPause2.addEventListener("click", ()=>{
    if(audioElement2.played || audioElement2.currentTime>=0){
        audioElement2.pause(); gif.style.opacity=0;
        }
})


masterPlay1.addEventListener("click", ()=>{
    if(audioElement1.paused || audioElement1.currentTime<=0){
        audioElement1.play(); gif.style.opacity=1;
    masterPlay1.classList.remove("fa fa-play-circle-o");
masterPlay1.classList.add("fa-regular fa-circle-pause");
}})





masterPause1.addEventListener("click", ()=>{
    if(audioElement1.played || audioElement1.currentTime>=0){
        audioElement1.pause(); gif.style.opacity=0;
        }
})


masterPlay3.addEventListener("click", ()=>{
    if(audioElement3.paused || audioElement3.currentTime<=0){
        audioElement3.play(); gif.style.opacity=1;
    masterPlay3.classList.remove("fa fa-play-circle-o");
masterPlay3.classList.add("fa-regular fa-circle-pause");
}})





masterPause3.addEventListener("click", ()=>{
    if(audioElement3.played || audioElement3.currentTime>=0){
        audioElement3.pause(); gif.style.opacity=0;
        }
})



masterPlay4.addEventListener("click", ()=>{
    if(audioElement4.paused || audioElement4.currentTime<=0){
        audioElement4.play(); gif.style.opacity=1;
    masterPlay4.classList.remove("fa fa-play-circle-o");
masterPlay4.classList.add("fa-regular fa-circle-pause");
}})





masterPause4.addEventListener("click", ()=>{
    if(audioElement4.played || audioElement4.currentTime>=0){
        audioElement4.pause(); gif.style.opacity=0;
        }
})


masterPlay5.addEventListener("click", ()=>{
    if(audioElement5.paused || audioElement5.currentTime<=0){
        audioElement5.play(); gif.style.opacity=1;
    masterPlay5.classList.remove("fa fa-play-circle-o");
masterPlay5.classList.add("fa-regular fa-circle-pause");
}})





masterPause5.addEventListener("click", ()=>{
    if(audioElement5.played || audioElement5.currentTime>=0){
        audioElement5.pause(); gif.style.opacity=0;
        }
})



masterPlay6.addEventListener("click", ()=>{
    if(audioElement6.paused || audioElement6.currentTime<=0){
        audioElement6.play(); gif.style.opacity=1;
    masterPlay6.classList.remove("fa fa-play-circle-o");
masterPlay6.classList.add("fa-regular fa-circle-pause");
}})





masterPause6.addEventListener("click", ()=>{
    if(audioElement6.played || audioElement6.currentTime>=0){
        audioElement6.pause(); gif.style.opacity=0;
        }
})




masterPlay7.addEventListener("click", ()=>{
    if(audioElement7.paused || audioElement7.currentTime<=0){
        audioElement7.play(); gif.style.opacity=1;
    masterPlay7.classList.remove("fa fa-play-circle-o");
masterPlay7.classList.add("fa-regular fa-circle-pause");
}})





masterPause7.addEventListener("click", ()=>{
    if(audioElement7.played || audioElement7.currentTime>=0){
        audioElement7.pause(); gif.style.opacity=0;
        }
})



masterPlay8.addEventListener("click", ()=>{
    if(audioElement8.paused || audioElement8.currentTime<=0){
        audioElement8.play(); gif.style.opacity=1;
    masterPlay8.classList.remove("fa fa-play-circle-o");
masterPlay8.classList.add("fa-regular fa-circle-pause");
}})





masterPause8.addEventListener("click", ()=>{
    if(audioElement8.played || audioElement8.currentTime>=0){
        audioElement8.pause(); gif.style.opacity=0;
        }
})


masterPlay9.addEventListener("click", ()=>{
    if(audioElement9.paused || audioElement9.currentTime<=0){
        audioElement9.play(); gif.style.opacity=1;
    masterPlay9.classList.remove("fa fa-play-circle-o");
masterPlay9.classList.add("fa-regular fa-circle-pause");
}})










masterPause9.addEventListener("click", ()=>{
    if(audioElement9.played || audioElement9.currentTime>=0){
        audioElement9.pause(); gif.style.opacity=0;
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



//audioElement.play();

//audioElement.play();
audioElement2.addEventListener("timeupdate", ()=>{
    progress = parseInt((audioElement2.currentTime/audioElement2.duration) * 100);
    
    myProgressBar.value = progress;
    })
    myProgressBar.addEventListener("change", ()=>{
    audioElement2.currentTime=myProgressBar.value * audioElement2.duration/100;
    
    })


    //


    audioElement3.addEventListener("timeupdate", ()=>{
        progress = parseInt((audioElement3.currentTime/audioElement3.duration) * 100);
        
        myProgressBar.value = progress;
        })
        myProgressBar.addEventListener("change", ()=>{
        audioElement3.currentTime=myProgressBar.value * audioElement3.duration/100;
        
        })

        //

        audioElement4.addEventListener("timeupdate", ()=>{
            progress = parseInt((audioElement4.currentTime/audioElement4.duration) * 100);
            
            myProgressBar.value = progress;
            })
            myProgressBar.addEventListener("change", ()=>{
            audioElement4.currentTime=myProgressBar.value * audioElement4.duration/100;
            
            })

            //


            audioElement5.addEventListener("timeupdate", ()=>{
                progress = parseInt((audioElement5.currentTime/audioElement5.duration) * 100);
                
                myProgressBar.value = progress;
                })
                myProgressBar.addEventListener("change", ()=>{
                audioElement5.currentTime=myProgressBar.value * audioElement5.duration/100;
                
                })


                //



                audioElement6.addEventListener("timeupdate", ()=>{
                    progress = parseInt((audioElement6.currentTime/audioElement6.duration) * 100);
                    
                    myProgressBar.value = progress;
                    })
                    myProgressBar.addEventListener("change", ()=>{
                    audioElement6.currentTime=myProgressBar.value * audioElement6.duration/100;
                    
                    })


                    //


                    audioElement7.addEventListener("timeupdate", ()=>{
                        progress = parseInt((audioElement7.currentTime/audioElement7.duration) * 100);
                        
                        myProgressBar.value = progress;
                        })
                        myProgressBar.addEventListener("change", ()=>{
                        audioElement7.currentTime=myProgressBar.value * audioElement7.duration/100;
                        
                        })

                        //


                        audioElement8.addEventListener("timeupdate", ()=>{
                            progress = parseInt((audioElement8.currentTime/audioElement8.duration) * 100);
                            
                            myProgressBar.value = progress;
                            })
                            myProgressBar.addEventListener("change", ()=>{
                            audioElement8.currentTime=myProgressBar.value * audioElement8.duration/100;
                            
                            })

//
                            audioElement9.addEventListener("timeupdate", ()=>{
                                progress = parseInt((audioElement9.currentTime/audioElement9.duration) * 100);
                                
                                myProgressBar.value = progress;
                                })
                                myProgressBar.addEventListener("change", ()=>{
                                audioElement9.currentTime=myProgressBar.value * audioElement9.duration/100;
                                
                                })

                                //

                                audioElement1.addEventListener("timeupdate", ()=>{
                                    progress = parseInt((audioElement1.currentTime/audioElement1.duration) * 100);
                                    
                                    myProgressBar.value = progress;
                                    })
                                    myProgressBar.addEventListener("change", ()=>{
                                    audioElement1.currentTime=myProgressBar.value * audioElement1.duration/100;
                                    
                                    })
                                    //

                                    document.getElementById("next").addEventListener("click", ()=>{
                                    if(masterPlay=played){audioElement2.play}
                                   


                                    })


                                    document.getElementById("previous").addEventListener("click", ()=>{
                                        if(masterPlay=masterPlay){audioElement.pause}
                                       
                                
    
                                        })