function play(track) {
        var controls = document.getElementById("controls");
        var controlsSource = document.getElementById("controls source");
        var playing = document.getElementById("playing");
        playing.innerHTML = "Now Playing: " + track;
        controlsSource.src = "./Music/" + track + ".mp3";
        controls.load();
        controls.play();
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
