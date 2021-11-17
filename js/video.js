// video custom
var video = document.querySelector(".video");
var juice = document.querySelector(".white-juice");
var btn = document.getElementById("play-pause");



// play and pause
function togglePlayPause() {
  if(video.paused){
    btn.className= "pause";
    video.play();
  }else{
  btn.className = "play";
  video.pause();
}
}

// click play and pause
btn.onclick = function(){
  togglePlayPause();
};

// time video
video.addEventListener('timeupdate',function(){
var juicePOS = video.currentTime / video.duration;
juice.style.width = juicePOS *100 + "%";
if(video.ended){
  btn.className = "replay";
}
});