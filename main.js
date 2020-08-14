function play(track) {
	audioController = getAudioController();
	audioController["playing"].innerHTML = "Now Playing: " + track;
	audioController["controlsSource"].src = "./Music/" + track + ".mp3";
	audioController["controls"].load();
	audioController["controls"].play();
}

function getAudioController() {
	audioController = {
		controls: document.getElementById("controls"),
		controlsSource: document.getElementById("controls source"),
		playing: document.getElementById("playing"),
	};
	return audioController;
}

//function toggleNewRelease() {
//var newReleaseNav = document.getElementById("new release nav");
//var discographyNav = document.getElementById("discography nav");
//var newRelease = document.getElementById("new release");
//var discography = document.getElementById("discography");
//newReleaseNav.class = "nav-link active";
//discographyNav.class = "nav-link";
//newRelease.style.display = "block";
//discography.style.display = "none";
//}

//function toggleDiscography() {
//var newReleaseNav = document.getElementById("new release nav");
//var discographyNav = document.getElementById("discography nav");
//var newRelease = document.getElementById("new release");
//var discography = document.getElementById("discography");
//newReleaseNav.class = "nav-link";
//discographyNav.class = "nav-link active";
//newRelease.style.display = "none";
//discography.style.display = "block";

//}
