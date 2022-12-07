console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
	{songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
	{songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
	{songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
	{songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
	{songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
]

masterplay.addEventListener('click',()=>{
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterplay.classList.remove('fa-play-circle');
		masterplay.classList.add('fa-pause-circle');
		gif.style.opacity=1;
	}
	else{
		audioElement.pause();
		masterplay.classList.remove('fa-pause-circle');
		masterplay.classList.add('fa-play-circle');
	}
})

myProgressBar.addEventListener('timeupdate',()=>{
	console.log('timeupdate');
	progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
	console.log(progress);
	myProgressBar.value = progress;
})
