audioController = {
	controls: document.getElementById("controls"),
	controlsSource: document.getElementById("controls source"),
	playing: document.getElementById("playing"),
};

function play(track) {
	updateTrack(track);
	audioController["controls"].play();
}

function updateTrack(track) {
	audioController["playing"].innerHTML = "Now Playing: " + track;
	audioController["controlsSource"].src = "./Music/" + track + ".mp3";
	audioController["controls"].load();
}

// var albumDiv = document.createElement("div");
// albumDiv.className = "card mb-3";
// albumDiv.style = "max-width: 95vw; background-color: #282828; color: white;";
// albumDiv.innerHTML = `
// <div class="row no-gutters">
// 				<div class="col-md-4">
// 					<img src="./Images/Dark Presence.png" class="card-img" />
// 				</div>
// 				<div class="col-md-8">
// 					<div class="card-body">
// 						<h5 class="card-title">Dark Presence</h5>
// 						<h6 class="text-muted" style="background-color: #282828; font-size: small;">
// 							Akshay
// 							R. Kapadia <span class="badge badge-dark text-muted">Guitars</span><span
// 								class="badge badge-dark text-muted">Production</span><span
// 								class="badge badge-dark text-muted">Album
// 								Art</span></h6>
// 						<h6 class="text-muted" style="background-color: #282828; font-size: small;">Rhea R.
// 							Kapadia <span class="badge badge-dark text-muted">Album
// 								Art</span></h6>
// 						<p class="card-text">
// 							<small class="text-muted">August 12, 2020</small>
// 						</p>
// 						<div class="list-group">
// 							<a class="list-group-item list-group-item" style="background-color: #1b1c1b;"
// 								onclick="play('Third Eye');"><span class="badge badge-dark badge-pill">1.</span>
// 								Third Eye</a>
// 							<a class="list-group-item list-group-item" style="background-color: #1b1c1b;"
// 								onclick="play('Dark Presence');"><span class="badge badge-dark badge-pill">2.</span>
// 								Dark Presence</a>
// 						</div>
// 						<br>
// 						<div>
// 							<a class="btn btn-primary disabled" href="./Music/Dark Presence.zip"
// 								download="Dark Presence">Download</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// `;
// var discographyDiv = document.getElementById("discography");
// discographyDiv.appendChild(albumDiv);