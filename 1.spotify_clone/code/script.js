console.log("welcome to spotify");
let songindex = 0
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar")
let songitomimg = document.querySelectorAll(".songitom img")
let songitom = document.querySelectorAll(".songitom")
let audioelement = new Audio()
let icon = document.querySelectorAll(".ico")
let songs = [
    { songName: "salam-e-ishq", filepath: "../songs/1.mp3", coverpath: "../covers/1.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/2.mp3", coverpath: "../covers/2.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/3.mp3", coverpath: "../covers/3.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/4.mp3", coverpath: "../covers/4.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/5.mp3", coverpath: "../covers/5.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/6.mp3", coverpath: "../covers/6.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/7.mp3", coverpath: "../covers/7.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/8.mp3", coverpath: "../covers/8.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/9.mp3", coverpath: "../covers/9.jpg" },
    { songName: "salam-e-ishq", filepath: "../songs/10.mp3", coverpath: "../covers/10.jpg" },
]
let previous = document.querySelector(".ri-arrow-drop-left-line")
let next = document.querySelector(".ri-arrow-drop-right-line")
//!donot tuch song itom
songitomimg.forEach((e, b) => {
    e.setAttribute("src", songs[b].coverpath);
})


function masterplayadd() {
    masterplay.classList.remove("ri-play-large-fill")
    masterplay.classList.add("ri-pause-large-fill")
    document.querySelector(".songinfo img").style.opacity = "1";
}
function masterplayremove() {
    masterplay.classList.remove("ri-pause-large-fill")
    masterplay.classList.add("ri-play-large-fill")
    document.querySelector(".songinfo img").style.opacity = "0";
}
function audioplay() {
    audioelement.play()
    masterplayadd()
}
function audiopause() {
    audioelement.pause()
    masterplayremove()
}
masterplay.addEventListener("click", () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioplay()
    } else {
        audiopause()
    }
})
icon.forEach((item, index,element) => {
console.log(element)
    item.addEventListener("click", () => {
        audiopause()
        audioelement.src = songs[index].filepath
        audioplay()
        previous.addEventListener("click", function (p) {
            // console.log(p);
        })
        previous.addEventListener("click", function (p) {
            if (index <= 0) {
                audiopause()
                 audioelement = new Audio("../songs/1.mp3")
                 audioplay()
            } else {
                index=--index
                audiopause()
                // console.log(index)
                audioelement.src = songs[index].filepath
                audioplay()
                console.log(`previous${index}`);
            }
            
        })
        next.addEventListener("click", function (p) {
            iconplay()
        if (index < ((element.length)-1)) {
            
            index=++index
            audiopause()
            // console.log(index)
            audioelement.src = songs[index].filepath
            audioplay()
            console.log(`next${index}`);  
        }else{
        audiopause()
        audioelement = new Audio("../songs/10.mp3")
        audioplay()
        console.log(`next${index}`); 
        }
    }
    )
    
    
});
})


audioelement.addEventListener("timeupdate", (e) => {
    let progress = ((audioelement.currentTime / audioelement.duration) * 100) ? ((audioelement.currentTime / audioelement.duration) * 100) : 0
    // console.log(progress)
    myprogressbar.value = progress


    // console.log(audioelement.duration/60+"hel");
    // console.log(audioelement.currentTime+"epep");
})
myprogressbar.addEventListener("change", (e) => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100
})
function iconplay() {
    icon.forEach(function (icon) {
        icon.classList.remove("ri-pause-large-fill")
        icon.classList.add("ri-play-large-fill")
    })
}

function iconpause() {
    icon.forEach(function (icon) {
        icon.addEventListener("click", function (event) {
            iconplay()
            event.target.classList.remove("ri-play-large-fill")
            event.target.classList.add("ri-pause-large-fill")
            console.log(event.target)
        })
    })
}

iconpause()
// for loop
