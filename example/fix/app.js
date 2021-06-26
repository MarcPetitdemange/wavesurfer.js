'use strict';

// Create an instance
var wavesurfer;
var wavesurfer2;

// Init & load
document.addEventListener('DOMContentLoaded', function() {
    let playButton = document.querySelector('#playBtn'),
        toggleMuteButton = document.querySelector('#toggleMuteBtn'),
        setMuteOnButton = document.querySelector('#setMuteOnBtn'),
        setMuteOffButton = document.querySelector('#setMuteOffBtn');

    // Init wavesurfer
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'red',
        keyboardZoomable: true
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    wavesurfer.load('../media/demo.wav');

    wavesurfer2 = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'blue'
    });

    wavesurfer2.on('error', function(e) {
        console.warn(e);
    });

    wavesurfer.once('ready', function() {
        // wavesurfer2.setKeyboardZoomable(false);
        playButton.onclick = function() {
            wavesurfer.playPause();
            wavesurfer2.playPause();
        };

        toggleMuteButton.onclick = function() {
            wavesurfer.toggleMute();
        };

        setMuteOnButton.onclick = function() {
            wavesurfer.setMute(true);
        };

        setMuteOffButton.onclick = function() {
            wavesurfer.setMute(false);
        };
    });


    wavesurfer2.load('../media/demo.wav');
});
