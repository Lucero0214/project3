// Get a handle to the player
player       = document.getElementById('video-element');
btnPlayPause = document.getElementById('btnPlayPause');
btnMute      = document.getElementById('btnMute');
volumeBar    = document.getElementById('volume-bar');

// Update the video volume
volumeBar.addEventListener("change", function(evt) {
    player.volume = evt.target.value;
});

// Add a listener for the play and pause events so the buttons state can be updated
player.addEventListener('play', function() {
    // Change the button to be a pause button
    changeButtonType(btnPlayPause, 'pause');
}, false);

player.addEventListener('pause', function() {
    // Change the button to be a play button
    changeButtonType(btnPlayPause, 'play');
}, false);

player.addEventListener('volumechange', function(e) { 
    // Update the button to be mute/unmute
    if (player.muted) changeButtonType(btnMute, 'unmute');
    else changeButtonType(btnMute, 'mute');
}, false);	


function playPauseVideo() {
  if (player.paused || player.ended) {
      // Change the button to a pause button
      changeButtonType(btnPlayPause, 'pause');
      player.play();
  }
  else {
      // Change the button to a play button
      changeButtonType(btnPlayPause, 'play');
      player.pause();
  }
}

// Stop the current media from playing, and return it to the start position
function stopVideo() {
  player.pause();
  if (player.currentTime) player.currentTime = 0;
}

// Toggles the media player's mute and unmute status
function muteVolume() {
  if (player.muted) {
      // Change the button to a mute button
      changeButtonType(btnMute, 'mute');
      player.muted = false;
  }
  else {
      // Change the button to an unmute button
      changeButtonType(btnMute, 'unmute');
      player.muted = true;
  }
}

// Replays the media currently loaded in the player
function replayVideo() {
  resetPlayer();
  player.play();
}

// Updates a button's title, innerHTML and CSS class
function changeButtonType(btn, value) {
  btn.title     = value;
  btn.innerHTML = value;
  btn.className = value;
}
function resetPlayer() {
    // Move the media back to the start
    player.currentTime = 0;
    // Set the play/pause button to 'play'
    changeButtonType(btnPlayPause, 'play');
}  