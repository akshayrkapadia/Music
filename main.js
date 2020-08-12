function toggle(track) {
        var controls = document.getElementById("controls");
        var controlsSource = document.getElementById("controls source");
        controlsSource.src = "./Music/" + track + ".mp3";
        controls.load();
        controls.play();
}
