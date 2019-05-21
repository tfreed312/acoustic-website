function myFunction() {

let audioContext = new AudioContext();
var firstMenu_TotalItems = 45;

// Create a (first-order Ambisonic) Resonance Audio scene and pass it
// the AudioContext.
let resonanceAudioScene = new ResonanceAudio(audioContext);
        
// Connect the scene’s binaural output to stereo out.
resonanceAudioScene.output.connect(audioContext.destination);

// Define room dimensions.
// By default, room dimensions are undefined (0m x 0m x 0m).
  let roomDimensions = {
    width: 0,
    height: 0,
    depth: 0,
   };

// Define materials for each of the room’s six surfaces.
// Room materials have different acoustic reflectivity.
  let roomMaterials = {
    // Room wall materials
      left: 'marble',
      right: 'marble',
      front: 'marble',
      back: 'marble',
      
      // Room floor
      down: 'grass',
      
      // Room ceiling
      up: 'transparent',
   };

// Add the room definition to the scene.
resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);


////// Create a sound source and place it in the soundscape.

////////// Start /////////////////

// Create an AudioElement.
let audioElement1 = document.createElement('audio');

// Load an audio file into the AudioElement.
audioElement1.crossOrigin = "anonymous";
audioElement1.src = './src/audio/note1.mp3';

// Generate a MediaElementSource from the AudioElement.
let audioElementSource1 = audioContext.createMediaElementSource(audioElement1);

// Add the MediaElementSource to the scene as an audio input source.
let source1 = resonanceAudioScene.createSource();
audioElementSource1.connect(source1.input);

// Set sound source parameters.
source1.setRolloff('logarithmic');
source1.setGain(0.5);

// Set source position coordinates.
var source1x = 3 * Math.cos(3.14 * (1 - (1 / firstMenu_TotalItems)));
var source1y = 3 * Math.sin(3.14 * (1 - (1 / firstMenu_TotalItems)));
var source1z = 0;

source1.setPosition(source1x, source1y, source1z);

//////// End ///////////////////// 

// 2 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = './src/audio/note2.mp3';
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

var source2x = 3 * Math.cos(3.14 * (1 - (2 / firstMenu_TotalItems)));
var source2y = 3 * Math.sin(3.14 * (1 - (2 / firstMenu_TotalItems)));
var source2z = 0;

source2.setPosition(source2x, source2y, source2z);

// 3 // 

let audioElement3 = document.createElement('audio');
audioElement3.crossOrigin = "anonymous";
audioElement3.src = './src/audio/note3.mp3';
let audioElementSource3 = audioContext.createMediaElementSource(audioElement3);
let source3 = resonanceAudioScene.createSource();
audioElementSource3.connect(source3.input);
source3.setRolloff('logarithmic');
source3.setGain(0.5);

var source3x = 3 * Math.cos(3.14 * (1 - (3 / firstMenu_TotalItems)));
var source3y = 3 * Math.sin(3.14 * (1 - (3 / firstMenu_TotalItems)));
var source3z = 0;

source3.setPosition(source3x, source3y, source3z);

// 4 //

let audioElement4 = document.createElement('audio');
audioElement4.crossOrigin = "anonymous";
audioElement4.src = './src/audio/note4.mp3';
let audioElementSource4 = audioContext.createMediaElementSource(audioElement4);
let source4 = resonanceAudioScene.createSource();
audioElementSource4.connect(source4.input);
source4.setRolloff('logarithmic');
source4.setGain(0.5);

var source4x = 3 * Math.cos(3.14 * (1 - (4 / firstMenu_TotalItems)));
var source4y = 3 * Math.sin(3.14 * (1 - (4 / firstMenu_TotalItems)));
var source4z = 0;

source4.setPosition(source4x, source4y, source4z);

 
// 5 //

let audioElement5 = document.createElement('audio');
audioElement5.crossOrigin = "anonymous";
audioElement5.src = './src/audio/note5.mp3';
let audioElementSource5 = audioContext.createMediaElementSource(audioElement5);
let source5 = resonanceAudioScene.createSource();
audioElementSource5.connect(source5.input);
source5.setRolloff('logarithmic');
source5.setGain(0.5);

var source5x = 3 * Math.cos(3.14 * (1 - (5 / firstMenu_TotalItems)));
var source5y = 3 * Math.sin(3.14 * (1 - (5 / firstMenu_TotalItems)));
var source5z = 0;

source5.setPosition(source5x, source5y, source5z);

// 6 //

let audioElement6 = document.createElement('audio');
audioElement6.crossOrigin = "anonymous";
audioElement6.src = './src/audio/note6.mp3';
let audioElementSource6 = audioContext.createMediaElementSource(audioElement6);
let source6 = resonanceAudioScene.createSource();
audioElementSource6.connect(source6.input);
source6.setRolloff('logarithmic');
source6.setGain(0.5);

var source6x = 3 * Math.cos(3.14 * (1 - (6 / firstMenu_TotalItems)));
var source6y = 3 * Math.sin(3.14 * (1 - (6 / firstMenu_TotalItems)));
var source6z = 0;

source6.setPosition(source6x, source6y, source6z);

// 7 //

let audioElement7 = document.createElement('audio');
audioElement7.crossOrigin = "anonymous";
audioElement7.src = './src/audio/note7.mp3';
let audioElementSource7 = audioContext.createMediaElementSource(audioElement7);
let source7 = resonanceAudioScene.createSource();
audioElementSource7.connect(source7.input);
source7.setRolloff('logarithmic');
source7.setGain(0.5);

var source7x = 3 * Math.cos(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source7y = 3 * Math.sin(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source7z = 0;

source7.setPosition(source7x, source7y, source7z);


// 8 //

let audioElement8 = document.createElement('audio');
audioElement8.crossOrigin = "anonymous";
audioElement8.src = './src/audio/note8.mp3';
let audioElementSource8 = audioContext.createMediaElementSource(audioElement8);
let source8 = resonanceAudioScene.createSource();
audioElementSource8.connect(source8.input);
source8.setRolloff('logarithmic');
source8.setGain(0.5);

var source8x = 3 * Math.cos(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source8y = 3 * Math.sin(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source8z = 0;

source8.setPosition(source8x, source8y, source8z);

// 9 //

let audioElement9 = document.createElement('audio');
audioElement9.crossOrigin = "anonymous";
audioElement9.src = './src/audio/note9.mp3';
let audioElementSource9 = audioContext.createMediaElementSource(audioElement9);
let source9 = resonanceAudioScene.createSource();
audioElementSource9.connect(source9.input);
source9.setRolloff('logarithmic');
source9.setGain(0.5);

var source9x = 3 * Math.cos(3.14 * (1 - (9 / firstMenu_TotalItems)));
var source9y = 3 * Math.sin(3.14 * (1 - (9 / firstMenu_TotalItems)));
var source9z = 0;

source9.setPosition(source9x, source9y, source9z);

// 10 //

let audioElement10 = document.createElement('audio');
audioElement10.crossOrigin = "anonymous";
audioElement10.src = './src/audio/note10.mp3';
let audioElementSource10 = audioContext.createMediaElementSource(audioElement10);
let source10 = resonanceAudioScene.createSource();
audioElementSource10.connect(source10.input);
source10.setRolloff('logarithmic');
source10.setGain(0.5);

var source10x = 3 * Math.cos(3.14 * (1 - (10 / firstMenu_TotalItems)));
var source10y = 3 * Math.sin(3.14 * (1 - (10 / firstMenu_TotalItems)));
var source10z = 0;

source10.setPosition(source10x, source10y, source10z);

// 11 //

let audioElement11 = document.createElement('audio');
audioElement11.crossOrigin = "anonymous";
audioElement11.src = './src/audio/note11.mp3';
let audioElementSource11 = audioContext.createMediaElementSource(audioElement11);
let source11 = resonanceAudioScene.createSource();
audioElementSource11.connect(source11.input);
source11.setRolloff('logarithmic');
source11.setGain(0.5);

var source11x = 3 * Math.cos(3.14 * (1 - (11 / firstMenu_TotalItems)));
var source11y = 3 * Math.sin(3.14 * (1 - (11 / firstMenu_TotalItems)));
var source11z = 0;

source11.setPosition(source11x, source11y, source11z);

// 12 //

let audioElement12 = document.createElement('audio');
audioElement12.crossOrigin = "anonymous";
audioElement12.src = './src/audio/note12.mp3';
let audioElementSource12 = audioContext.createMediaElementSource(audioElement12);
let source12 = resonanceAudioScene.createSource();
audioElementSource12.connect(source12.input);
source12.setRolloff('logarithmic');
source12.setGain(0.5);

var source12x = 3 * Math.cos(3.14 * (1 - (12 / firstMenu_TotalItems)));
var source12y = 3 * Math.sin(3.14 * (1 - (12 / firstMenu_TotalItems)));
var source12z = 0;

source12.setPosition(source12x, source12y, source12z);

/*

// 13 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 14 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 15 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 16 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 17 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 18 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 19 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 20 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 21 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 22 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 23 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 24 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 25 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 26 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 27 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 28 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 29 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 30 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 31 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 32 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 33 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 34 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 35 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 36 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 37 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 38 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 39 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 40 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 41 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 42 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 43 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

//44 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

// 45 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = null;
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.5);

*/

var played = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];

var sources = [source1, source2, source3, source4, source5, source6, source7, source8, source9, source10, source11, source12];
var sourceXpos = [source1x, source2x, source3x, source4x, source5x, source6x, source7x, source8x, source9x, source10x, source11x, source12x]
var elements = [audioElement1, audioElement2, audioElement3, audioElement4, audioElement5, audioElement6,audioElement7, audioElement8, audioElement9, audioElement10, audioElement11, audioElement12];

var selection = 0;
var delta = 0;
var padPosition = -3;
var lastPadPos = -3;

var scrollDirection = 1;

 // Create menu select function.
    window.addEventListener('keypress', function (e) {

    console.log(e.which);

        // spacebar
        if (e.which == 32) {
          let currElement = elements[selection];
          currElement.play();
          selection += 1;
         }
    }, false);

     // Create scrolling function
    window.onwheel = function (event) {
      event.preventDefault();

      if (event.ctrlKey) {
        // Your zoom/scale factor
        scale -= event.deltaX * 0.005;
      } else {
        // Your trackpad Y positions
        delta = (event.deltaX / 1000);
        if (padPosition >= -3 && padPosition <= 3) {
          padPosition -= delta;
          if (padPosition < -3) padPosition = -3;
          if (padPosition > 3) padPosition = 3;
        }
      }


      if (padPosition > lastPadPos) {

        lastPadPos = padPosition;

        for (var i = 0; i < firstMenu_TotalItems; i++ ) {
          let temp = sourceXpos[i];
          let currElement = elements[i];
          let didPlay = played[i];
          if (padPosition > temp) {
            if (didPlay == false) {
              console.log(i);
              played[i] = true;
              currElement.play();
            }
          }
        }

      } else {

        lastPadPos = padPosition;

        for (var i = 0; i < firstMenu_TotalItems; i++ ) {
          let temp = sourceXpos[i];
          let currElement = elements[i];
          let didPlay = played[i];
          if (padPosition < temp) {
            if (didPlay == true) {
              console.log(i);
              played[i] = false;
              currElement.play();
            }
          }
        }

      }

    }
  }























