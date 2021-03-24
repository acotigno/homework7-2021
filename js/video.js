var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	console.log("Hello");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	let value = document.querySelector("#volume");
	value.innerHTML = parseInt(video.volume) * 100;
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 15;
	if(video.currentTime == video.duration) {
		video.currentTime = 0;
		video.play();
	}
	console.log(video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = (parseFloat(video.volume) * 100).toString()+"%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
});



