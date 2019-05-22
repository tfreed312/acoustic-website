

// Trevanna Entertainment Audio Webpage //

var didCreateContext = false;

function myFunction() {

  if (didCreateContext == false) {

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



var sources = [];
var elements = [];

var selection = 1;
var delta = 0;
var padPosition = -3;
var lastPadPos = -3;




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
source1.setGain(0.95);

// Set source position coordinates.
var source1x = 3 * Math.cos(3.14 * (1 - (1 / firstMenu_TotalItems)));
var source1y = 3 * Math.sin(3.14 * (1 - (1 / firstMenu_TotalItems)));
var source1z = 0;

source1.setPosition(source1x, source1y, source1z);

// Add sources, elements to arrays.
sources[1] = source1;
elements[1] = audioElement1;

//////// End ///////////////////// 

// 2 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = './src/audio/note2.mp3';
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.95);

var source2x = 3 * Math.cos(3.14 * (1 - (2 / firstMenu_TotalItems)));
var source2y = 3 * Math.sin(3.14 * (1 - (2 / firstMenu_TotalItems)));
var source2z = 0;

source2.setPosition(source2x, source2y, source2z);

sources[2] = source2;
elements[2] = audioElement2;

// 3 // 

let audioElement3 = document.createElement('audio');
audioElement3.crossOrigin = "anonymous";
audioElement3.src = './src/audio/note3.mp3';
let audioElementSource3 = audioContext.createMediaElementSource(audioElement3);
let source3 = resonanceAudioScene.createSource();
audioElementSource3.connect(source3.input);
source3.setRolloff('logarithmic');
source3.setGain(0.95);

var source3x = 3 * Math.cos(3.14 * (1 - (3 / firstMenu_TotalItems)));
var source3y = 3 * Math.sin(3.14 * (1 - (3 / firstMenu_TotalItems)));
var source3z = 0;

source3.setPosition(source3x, source3y, source3z);

sources[3] = source3;
elements[3] = audioElement3;

// 4 //

let audioElement4 = document.createElement('audio');
audioElement4.crossOrigin = "anonymous";
audioElement4.src = './src/audio/note4.mp3';
let audioElementSource4 = audioContext.createMediaElementSource(audioElement4);
let source4 = resonanceAudioScene.createSource();
audioElementSource4.connect(source4.input);
source4.setRolloff('logarithmic');
source4.setGain(0.95);

var source4x = 3 * Math.cos(3.14 * (1 - (4 / firstMenu_TotalItems)));
var source4y = 3 * Math.sin(3.14 * (1 - (4 / firstMenu_TotalItems)));
var source4z = 0;

source4.setPosition(source4x, source4y, source4z);

sources[4] = source4;
elements[4] = audioElement4;

 
// 5 //

let audioElement5 = document.createElement('audio');
audioElement5.crossOrigin = "anonymous";
audioElement5.src = './src/audio/note5.mp3';
let audioElementSource5 = audioContext.createMediaElementSource(audioElement5);
let source5 = resonanceAudioScene.createSource();
audioElementSource5.connect(source5.input);
source5.setRolloff('logarithmic');
source5.setGain(0.95);

var source5x = 3 * Math.cos(3.14 * (1 - (5 / firstMenu_TotalItems)));
var source5y = 3 * Math.sin(3.14 * (1 - (5 / firstMenu_TotalItems)));
var source5z = 0;

source5.setPosition(source5x, source5y, source5z);

sources[5] = source5;
elements[5] = audioElement5;

// 6 //

let audioElement6 = document.createElement('audio');
audioElement6.crossOrigin = "anonymous";
audioElement6.src = './src/audio/note6.mp3';
let audioElementSource6 = audioContext.createMediaElementSource(audioElement6);
let source6 = resonanceAudioScene.createSource();
audioElementSource6.connect(source6.input);
source6.setRolloff('logarithmic');
source6.setGain(0.95);

var source6x = 3 * Math.cos(3.14 * (1 - (6 / firstMenu_TotalItems)));
var source6y = 3 * Math.sin(3.14 * (1 - (6 / firstMenu_TotalItems)));
var source6z = 0;

source6.setPosition(source6x, source6y, source6z);

sources[6] = source6;
elements[6] = audioElement6;

// 7 //

let audioElement7 = document.createElement('audio');
audioElement7.crossOrigin = "anonymous";
audioElement7.src = './src/audio/note7.mp3';
let audioElementSource7 = audioContext.createMediaElementSource(audioElement7);
let source7 = resonanceAudioScene.createSource();
audioElementSource7.connect(source7.input);
source7.setRolloff('logarithmic');
source7.setGain(0.95);

var source7x = 3 * Math.cos(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source7y = 3 * Math.sin(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source7z = 0;

source7.setPosition(source7x, source7y, source7z);

sources[7] = source7;
elements[7] = audioElement7;

// 8 //

let audioElement8 = document.createElement('audio');
audioElement8.crossOrigin = "anonymous";
audioElement8.src = './src/audio/note8.mp3';
let audioElementSource8 = audioContext.createMediaElementSource(audioElement8);
let source8 = resonanceAudioScene.createSource();
audioElementSource8.connect(source8.input);
source8.setRolloff('logarithmic');
source8.setGain(0.95);

var source8x = 3 * Math.cos(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source8y = 3 * Math.sin(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source8z = 0;

source8.setPosition(source8x, source8y, source8z);

sources[8] = source8;
elements[8] = audioElement8;

// 9 //

let audioElement9 = document.createElement('audio');
audioElement9.crossOrigin = "anonymous";
audioElement9.src = './src/audio/note9.mp3';
let audioElementSource9 = audioContext.createMediaElementSource(audioElement9);
let source9 = resonanceAudioScene.createSource();
audioElementSource9.connect(source9.input);
source9.setRolloff('logarithmic');
source9.setGain(0.95);

var source9x = 3 * Math.cos(3.14 * (1 - (9 / firstMenu_TotalItems)));
var source9y = 3 * Math.sin(3.14 * (1 - (9 / firstMenu_TotalItems)));
var source9z = 0;

source9.setPosition(source9x, source9y, source9z);

sources[9] = source9;
elements[9] = audioElement9;

// 10 //

let audioElement10 = document.createElement('audio');
audioElement10.crossOrigin = "anonymous";
audioElement10.src = './src/audio/note10.mp3';
let audioElementSource10 = audioContext.createMediaElementSource(audioElement10);
let source10 = resonanceAudioScene.createSource();
audioElementSource10.connect(source10.input);
source10.setRolloff('logarithmic');
source10.setGain(0.95);

var source10x = 3 * Math.cos(3.14 * (1 - (10 / firstMenu_TotalItems)));
var source10y = 3 * Math.sin(3.14 * (1 - (10 / firstMenu_TotalItems)));
var source10z = 0;

source10.setPosition(source10x, source10y, source10z);

sources[10] = source10;
elements[10] = audioElement10;

// 11 //

let audioElement11 = document.createElement('audio');
audioElement11.crossOrigin = "anonymous";
audioElement11.src = './src/audio/note11.mp3';
let audioElementSource11 = audioContext.createMediaElementSource(audioElement11);
let source11 = resonanceAudioScene.createSource();
audioElementSource11.connect(source11.input);
source11.setRolloff('logarithmic');
source11.setGain(0.95);

var source11x = 3 * Math.cos(3.14 * (1 - (11 / firstMenu_TotalItems)));
var source11y = 3 * Math.sin(3.14 * (1 - (11 / firstMenu_TotalItems)));
var source11z = 0;

source11.setPosition(source11x, source11y, source11z);

sources[11] = source11;
elements[11] = audioElement11;

// 12 //

let audioElement12 = document.createElement('audio');
audioElement12.crossOrigin = "anonymous";
audioElement12.src = './src/audio/note12.mp3';
let audioElementSource12 = audioContext.createMediaElementSource(audioElement12);
let source12 = resonanceAudioScene.createSource();
audioElementSource12.connect(source12.input);
source12.setRolloff('logarithmic');
source12.setGain(0.95);

var source12x = 3 * Math.cos(3.14 * (1 - (12 / firstMenu_TotalItems)));
var source12y = 3 * Math.sin(3.14 * (1 - (12 / firstMenu_TotalItems)));
var source12z = 0;

source12.setPosition(source12x, source12y, source12z);

sources[12] = source12;
elements[12] = audioElement12;

// 13 //

let audioElement13 = document.createElement('audio');
audioElement13.crossOrigin = "anonymous";
audioElement13.src = './src/audio/note13.mp3';
let audioElementSource13 = audioContext.createMediaElementSource(audioElement13);
let source13 = resonanceAudioScene.createSource();
audioElementSource13.connect(source13.input);
source13.setRolloff('logarithmic');
source13.setGain(0.95);

var source13x = 3 * Math.cos(3.14 * (1 - (13 / firstMenu_TotalItems)));
var source13y = 3 * Math.sin(3.14 * (1 - (13 / firstMenu_TotalItems)));
var source13z = 0;

source13.setPosition(source13x, source13y, source13z);

sources[13] = source13;
elements[13] = audioElement13;

// 14 //

let audioElement14 = document.createElement('audio');
audioElement14.crossOrigin = "anonymous";
audioElement14.src = './src/audio/note14.mp3';
let audioElementSource14 = audioContext.createMediaElementSource(audioElement14);
let source14 = resonanceAudioScene.createSource();
audioElementSource14.connect(source14.input);
source14.setRolloff('logarithmic');
source14.setGain(0.95);

var source14x = 3 * Math.cos(3.14 * (1 - (14 / firstMenu_TotalItems)));
var source14y = 3 * Math.sin(3.14 * (1 - (14 / firstMenu_TotalItems)));
var source14z = 0;

source14.setPosition(source14x, source14y, source14z);

sources[14] = source14;
elements[14] = audioElement14;

// 15 //

let audioElement15 = document.createElement('audio');
audioElement15.crossOrigin = "anonymous";
audioElement15.src = './src/audio/note15.mp3';
let audioElementSource15 = audioContext.createMediaElementSource(audioElement15);
let source15 = resonanceAudioScene.createSource();
audioElementSource15.connect(source15.input);
source15.setRolloff('logarithmic');
source15.setGain(0.95);

var source15x = 3 * Math.cos(3.15 * (1 - (15 / firstMenu_TotalItems)));
var source15y = 3 * Math.sin(3.15 * (1 - (15 / firstMenu_TotalItems)));
var source15z = 0;

source15.setPosition(source15x, source15y, source15z);

sources[15] = source15;
elements[15] = audioElement15;

// 16 //

let audioElement16 = document.createElement('audio');
audioElement16.crossOrigin = "anonymous";
audioElement16.src = './src/audio/note16.mp3';
let audioElementSource16 = audioContext.createMediaElementSource(audioElement16);
let source16 = resonanceAudioScene.createSource();
audioElementSource16.connect(source16.input);
source16.setRolloff('logarithmic');
source16.setGain(0.95);

var source16x = 3 * Math.cos(3.16 * (1 - (16 / firstMenu_TotalItems)));
var source16y = 3 * Math.sin(3.16 * (1 - (16 / firstMenu_TotalItems)));
var source16z = 0;

source16.setPosition(source16x, source16y, source16z);

sources[16] = source16;
elements[16] = audioElement16;

// 17 //

let audioElement17 = document.createElement('audio');
audioElement17.crossOrigin = "anonymous";
audioElement17.src = './src/audio/note17.mp3';
let audioElementSource17 = audioContext.createMediaElementSource(audioElement17);
let source17 = resonanceAudioScene.createSource();
audioElementSource17.connect(source17.input);
source17.setRolloff('logarithmic');
source17.setGain(0.95);

var source17x = 3 * Math.cos(3.17 * (1 - (17 / firstMenu_TotalItems)));
var source17y = 3 * Math.sin(3.17 * (1 - (17 / firstMenu_TotalItems)));
var source17z = 0;

source17.setPosition(source17x, source17y, source17z);

sources[17] = source17;
elements[17] = audioElement17;

// 18 //

let audioElement18 = document.createElement('audio');
audioElement18.crossOrigin = "anonymous";
audioElement18.src = './src/audio/note18.mp3';
let audioElementSource18 = audioContext.createMediaElementSource(audioElement18);
let source18 = resonanceAudioScene.createSource();
audioElementSource18.connect(source18.input);
source18.setRolloff('logarithmic');
source18.setGain(0.95);

var source18x = 3 * Math.cos(3.18 * (1 - (18 / firstMenu_TotalItems)));
var source18y = 3 * Math.sin(3.18 * (1 - (18 / firstMenu_TotalItems)));
var source18z = 0;

source18.setPosition(source18x, source18y, source18z);

sources[18] = source18;
elements[18] = audioElement18;

// 19 //

let audioElement19 = document.createElement('audio');
audioElement19.crossOrigin = "anonymous";
audioElement19.src = './src/audio/note19.mp3';
let audioElementSource19 = audioContext.createMediaElementSource(audioElement19);
let source19 = resonanceAudioScene.createSource();
audioElementSource19.connect(source19.input);
source19.setRolloff('logarithmic');
source19.setGain(0.95);

var source19x = 3 * Math.cos(3.19 * (1 - (19 / firstMenu_TotalItems)));
var source19y = 3 * Math.sin(3.19 * (1 - (19 / firstMenu_TotalItems)));
var source19z = 0;

source19.setPosition(source19x, source19y, source19z);

sources[19] = source19;
elements[19] = audioElement19;

// 20 //

let audioElement20 = document.createElement('audio');
audioElement20.crossOrigin = "anonymous";
audioElement20.src = './src/audio/note20.mp3';
let audioElementSource20 = audioContext.createMediaElementSource(audioElement20);
let source20 = resonanceAudioScene.createSource();
audioElementSource20.connect(source20.input);
source20.setRolloff('logarithmic');
source20.setGain(0.95);

var source20x = 3 * Math.cos(3.20 * (1 - (20 / firstMenu_TotalItems)));
var source20y = 3 * Math.sin(3.20 * (1 - (20 / firstMenu_TotalItems)));
var source20z = 0;

source20.setPosition(source20x, source20y, source20z);

sources[20] = source20;
elements[20] = audioElement20;

// 21 //

let audioElement21 = document.createElement('audio');
audioElement21.crossOrigin = "anonymous";
audioElement21.src = './src/audio/note21.mp3';
let audioElementSource21 = audioContext.createMediaElementSource(audioElement21);
let source21 = resonanceAudioScene.createSource();
audioElementSource21.connect(source21.input);
source21.setRolloff('logarithmic');
source21.setGain(0.95);

var source21x = 3 * Math.cos(3.21 * (1 - (21 / firstMenu_TotalItems)));
var source21y = 3 * Math.sin(3.21 * (1 - (21 / firstMenu_TotalItems)));
var source21z = 0;

source21.setPosition(source21x, source21y, source21z);

sources[21] = source21;
elements[21] = audioElement21;

// 22 //

let audioElement22 = document.createElement('audio');
audioElement22.crossOrigin = "anonymous";
audioElement22.src = './src/audio/note22.mp3';
let audioElementSource22 = audioContext.createMediaElementSource(audioElement22);
let source22 = resonanceAudioScene.createSource();
audioElementSource22.connect(source22.input);
source22.setRolloff('logarithmic');
source22.setGain(0.95);

var source22x = 3 * Math.cos(3.22 * (1 - (22 / firstMenu_TotalItems)));
var source22y = 3 * Math.sin(3.22 * (1 - (22 / firstMenu_TotalItems)));
var source22z = 0;

source22.setPosition(source22x, source22y, source22z);

sources[22] = source22;
elements[22] = audioElement22;

// 23 //

let audioElement23 = document.createElement('audio');
audioElement23.crossOrigin = "anonymous";
audioElement23.src = './src/audio/note23.mp3';
let audioElementSource23 = audioContext.createMediaElementSource(audioElement23);
let source23 = resonanceAudioScene.createSource();
audioElementSource23.connect(source23.input);
source23.setRolloff('logarithmic');
source23.setGain(0.95);

var source23x = 3 * Math.cos(3.23 * (1 - (23 / firstMenu_TotalItems)));
var source23y = 3 * Math.sin(3.23 * (1 - (23 / firstMenu_TotalItems)));
var source23z = 0;

source23.setPosition(source23x, source23y, source23z);

sources[23] = source23;
elements[23] = audioElement23;

// 24 //

let audioElement24 = document.createElement('audio');
audioElement24.crossOrigin = "anonymous";
audioElement24.src = './src/audio/note24.mp3';
let audioElementSource24 = audioContext.createMediaElementSource(audioElement24);
let source24 = resonanceAudioScene.createSource();
audioElementSource24.connect(source24.input);
source24.setRolloff('logarithmic');
source24.setGain(0.95);

var source24x = 3 * Math.cos(3.24 * (1 - (24 / firstMenu_TotalItems)));
var source24y = 3 * Math.sin(3.24 * (1 - (24 / firstMenu_TotalItems)));
var source24z = 0;

source24.setPosition(source24x, source24y, source24z);

sources[24] = source24;
elements[24] = audioElement24;

// 25 //

let audioElement25 = document.createElement('audio');
audioElement25.crossOrigin = "anonymous";
audioElement25.src = './src/audio/note25.mp3';
let audioElementSource25 = audioContext.createMediaElementSource(audioElement25);
let source25 = resonanceAudioScene.createSource();
audioElementSource25.connect(source25.input);
source25.setRolloff('logarithmic');
source25.setGain(0.95);

var source25x = 3 * Math.cos(3.25 * (1 - (25 / firstMenu_TotalItems)));
var source25y = 3 * Math.sin(3.25 * (1 - (25 / firstMenu_TotalItems)));
var source25z = 0;

source25.setPosition(source25x, source25y, source25z);

sources[25] = source25;
elements[25] = audioElement25;

// 26 //

let audioElement26 = document.createElement('audio');
audioElement26.crossOrigin = "anonymous";
audioElement26.src = './src/audio/note26.mp3';
let audioElementSource26 = audioContext.createMediaElementSource(audioElement26);
let source26 = resonanceAudioScene.createSource();
audioElementSource26.connect(source26.input);
source26.setRolloff('logarithmic');
source26.setGain(0.95);

var source26x = 3 * Math.cos(3.26 * (1 - (26 / firstMenu_TotalItems)));
var source26y = 3 * Math.sin(3.26 * (1 - (26 / firstMenu_TotalItems)));
var source26z = 0;

source26.setPosition(source26x, source26y, source26z);

sources[26] = source26;
elements[26] = audioElement26;

// 27 //

let audioElement27 = document.createElement('audio');
audioElement27.crossOrigin = "anonymous";
audioElement27.src = './src/audio/note27.mp3';
let audioElementSource27 = audioContext.createMediaElementSource(audioElement27);
let source27 = resonanceAudioScene.createSource();
audioElementSource27.connect(source27.input);
source27.setRolloff('logarithmic');
source27.setGain(0.95);

var source27x = 3 * Math.cos(3.27 * (1 - (27 / firstMenu_TotalItems)));
var source27y = 3 * Math.sin(3.27 * (1 - (27 / firstMenu_TotalItems)));
var source27z = 0;

source27.setPosition(source27x, source27y, source27z);

sources[27] = source27;
elements[27] = audioElement27;

// 28 //

let audioElement28 = document.createElement('audio');
audioElement28.crossOrigin = "anonymous";
audioElement28.src = './src/audio/note28.mp3';
let audioElementSource28 = audioContext.createMediaElementSource(audioElement28);
let source28 = resonanceAudioScene.createSource();
audioElementSource28.connect(source28.input);
source28.setRolloff('logarithmic');
source28.setGain(0.95);

var source28x = 3 * Math.cos(3.28 * (1 - (28 / firstMenu_TotalItems)));
var source28y = 3 * Math.sin(3.28 * (1 - (28 / firstMenu_TotalItems)));
var source28z = 0;

source28.setPosition(source28x, source28y, source28z);

sources[28] = source28;
elements[28] = audioElement28;

// 29 //

let audioElement29 = document.createElement('audio');
audioElement29.crossOrigin = "anonymous";
audioElement29.src = './src/audio/note29.mp3';
let audioElementSource29 = audioContext.createMediaElementSource(audioElement29);
let source29 = resonanceAudioScene.createSource();
audioElementSource29.connect(source29.input);
source29.setRolloff('logarithmic');
source29.setGain(0.95);

var source29x = 3 * Math.cos(3.29 * (1 - (29 / firstMenu_TotalItems)));
var source29y = 3 * Math.sin(3.29 * (1 - (29 / firstMenu_TotalItems)));
var source29z = 0;

source29.setPosition(source29x, source29y, source29z);

sources[29] = source29;
elements[29] = audioElement29;

// 30 //

let audioElement30 = document.createElement('audio');
audioElement30.crossOrigin = "anonymous";
audioElement30.src = './src/audio/note30.mp3';
let audioElementSource30 = audioContext.createMediaElementSource(audioElement30);
let source30 = resonanceAudioScene.createSource();
audioElementSource30.connect(source30.input);
source30.setRolloff('logarithmic');
source30.setGain(0.95);

var source30x = 3 * Math.cos(3.30 * (1 - (30 / firstMenu_TotalItems)));
var source30y = 3 * Math.sin(3.30 * (1 - (30 / firstMenu_TotalItems)));
var source30z = 0;

source30.setPosition(source30x, source30y, source30z);

sources[30] = source30;
elements[30] = audioElement30;

// 31 //

let audioElement31 = document.createElement('audio');
audioElement31.crossOrigin = "anonymous";
audioElement31.src = './src/audio/note31.mp3';
let audioElementSource31 = audioContext.createMediaElementSource(audioElement31);
let source31 = resonanceAudioScene.createSource();
audioElementSource31.connect(source31.input);
source31.setRolloff('logarithmic');
source31.setGain(0.95);

var source31x = 3 * Math.cos(3.31 * (1 - (31 / firstMenu_TotalItems)));
var source31y = 3 * Math.sin(3.31 * (1 - (31 / firstMenu_TotalItems)));
var source31z = 0;

source31.setPosition(source31x, source31y, source31z);

sources[31] = source31;
elements[31] = audioElement31;

// 32 //

let audioElement32 = document.createElement('audio');
audioElement32.crossOrigin = "anonymous";
audioElement32.src = './src/audio/note32.mp3';
let audioElementSource32 = audioContext.createMediaElementSource(audioElement32);
let source32 = resonanceAudioScene.createSource();
audioElementSource32.connect(source32.input);
source32.setRolloff('logarithmic');
source32.setGain(0.95);

var source32x = 3 * Math.cos(3.32 * (1 - (32 / firstMenu_TotalItems)));
var source32y = 3 * Math.sin(3.32 * (1 - (32 / firstMenu_TotalItems)));
var source32z = 0;

source32.setPosition(source32x, source32y, source32z);

sources[32] = source32;
elements[32] = audioElement32;

// 33 //

let audioElement33 = document.createElement('audio');
audioElement33.crossOrigin = "anonymous";
audioElement33.src = './src/audio/note33.mp3';
let audioElementSource33 = audioContext.createMediaElementSource(audioElement33);
let source33 = resonanceAudioScene.createSource();
audioElementSource33.connect(source33.input);
source33.setRolloff('logarithmic');
source33.setGain(0.95);

var source33x = 3 * Math.cos(3.33 * (1 - (33 / firstMenu_TotalItems)));
var source33y = 3 * Math.sin(3.33 * (1 - (33 / firstMenu_TotalItems)));
var source33z = 0;

source33.setPosition(source33x, source33y, source33z);

sources[33] = source33;
elements[33] = audioElement33;

// 34 //

let audioElement34 = document.createElement('audio');
audioElement34.crossOrigin = "anonymous";
audioElement34.src = './src/audio/note34.mp3';
let audioElementSource34 = audioContext.createMediaElementSource(audioElement34);
let source34 = resonanceAudioScene.createSource();
audioElementSource34.connect(source34.input);
source34.setRolloff('logarithmic');
source34.setGain(0.95);

var source34x = 3 * Math.cos(3.34 * (1 - (34 / firstMenu_TotalItems)));
var source34y = 3 * Math.sin(3.34 * (1 - (34 / firstMenu_TotalItems)));
var source34z = 0;

source34.setPosition(source34x, source34y, source34z);

sources[34] = source34;
elements[34] = audioElement34;

// 35 //

let audioElement35 = document.createElement('audio');
audioElement35.crossOrigin = "anonymous";
audioElement35.src = './src/audio/note35.mp3';
let audioElementSource35 = audioContext.createMediaElementSource(audioElement35);
let source35 = resonanceAudioScene.createSource();
audioElementSource35.connect(source35.input);
source35.setRolloff('logarithmic');
source35.setGain(0.95);

var source35x = 3 * Math.cos(3.35 * (1 - (35 / firstMenu_TotalItems)));
var source35y = 3 * Math.sin(3.35 * (1 - (35 / firstMenu_TotalItems)));
var source35z = 0;

source35.setPosition(source35x, source35y, source35z);

sources[35] = source35;
elements[35] = audioElement35;

// 36 //

let audioElement36 = document.createElement('audio');
audioElement36.crossOrigin = "anonymous";
audioElement36.src = './src/audio/note36.mp3';
let audioElementSource36 = audioContext.createMediaElementSource(audioElement36);
let source36 = resonanceAudioScene.createSource();
audioElementSource36.connect(source36.input);
source36.setRolloff('logarithmic');
source36.setGain(0.95);

var source36x = 3 * Math.cos(3.36 * (1 - (36 / firstMenu_TotalItems)));
var source36y = 3 * Math.sin(3.36 * (1 - (36 / firstMenu_TotalItems)));
var source36z = 0;

source36.setPosition(source36x, source36y, source36z);

sources[36] = source36;
elements[36] = audioElement36;

// 37 //

let audioElement37 = document.createElement('audio');
audioElement37.crossOrigin = "anonymous";
audioElement37.src = './src/audio/note37.mp3';
let audioElementSource37 = audioContext.createMediaElementSource(audioElement37);
let source37 = resonanceAudioScene.createSource();
audioElementSource37.connect(source37.input);
source37.setRolloff('logarithmic');
source37.setGain(0.95);

var source37x = 3 * Math.cos(3.37 * (1 - (37 / firstMenu_TotalItems)));
var source37y = 3 * Math.sin(3.37 * (1 - (37 / firstMenu_TotalItems)));
var source37z = 0;

source37.setPosition(source37x, source37y, source37z);

sources[37] = source37;
elements[37] = audioElement37;

// 38 //

let audioElement38 = document.createElement('audio');
audioElement38.crossOrigin = "anonymous";
audioElement38.src = './src/audio/note38.mp3';
let audioElementSource38 = audioContext.createMediaElementSource(audioElement38);
let source38 = resonanceAudioScene.createSource();
audioElementSource38.connect(source38.input);
source38.setRolloff('logarithmic');
source38.setGain(0.95);

var source38x = 3 * Math.cos(3.38 * (1 - (38 / firstMenu_TotalItems)));
var source38y = 3 * Math.sin(3.38 * (1 - (38 / firstMenu_TotalItems)));
var source38z = 0;

source38.setPosition(source38x, source38y, source38z);

sources[38] = source38;
elements[38] = audioElement38;

// 39 //

let audioElement39 = document.createElement('audio');
audioElement39.crossOrigin = "anonymous";
audioElement39.src = './src/audio/note39.mp3';
let audioElementSource39 = audioContext.createMediaElementSource(audioElement39);
let source39 = resonanceAudioScene.createSource();
audioElementSource39.connect(source39.input);
source39.setRolloff('logarithmic');
source39.setGain(0.95);

var source39x = 3 * Math.cos(3.39 * (1 - (39 / firstMenu_TotalItems)));
var source39y = 3 * Math.sin(3.39 * (1 - (39 / firstMenu_TotalItems)));
var source39z = 0;

source39.setPosition(source39x, source39y, source39z);

sources[39] = source39;
elements[39] = audioElement39;

// 40 //

let audioElement40 = document.createElement('audio');
audioElement40.crossOrigin = "anonymous";
audioElement40.src = './src/audio/note40.mp3';
let audioElementSource40 = audioContext.createMediaElementSource(audioElement40);
let source40 = resonanceAudioScene.createSource();
audioElementSource40.connect(source40.input);
source40.setRolloff('logarithmic');
source40.setGain(0.95);

var source40x = 3 * Math.cos(3.40 * (1 - (40 / firstMenu_TotalItems)));
var source40y = 3 * Math.sin(3.40 * (1 - (40 / firstMenu_TotalItems)));
var source40z = 0;

source40.setPosition(source40x, source40y, source40z);

sources[40] = source40;
elements[40] = audioElement40;

// 41 //

let audioElement41 = document.createElement('audio');
audioElement41.crossOrigin = "anonymous";
audioElement41.src = './src/audio/note41.mp3';
let audioElementSource41 = audioContext.createMediaElementSource(audioElement41);
let source41 = resonanceAudioScene.createSource();
audioElementSource41.connect(source41.input);
source41.setRolloff('logarithmic');
source41.setGain(0.95);

var source41x = 3 * Math.cos(3.41 * (1 - (41 / firstMenu_TotalItems)));
var source41y = 3 * Math.sin(3.41 * (1 - (41 / firstMenu_TotalItems)));
var source41z = 0;

source41.setPosition(source41x, source41y, source41z);

sources[41] = source41;
elements[41] = audioElement41;

// 42 //

let audioElement42 = document.createElement('audio');
audioElement42.crossOrigin = "anonymous";
audioElement42.src = './src/audio/note42.mp3';
let audioElementSource42 = audioContext.createMediaElementSource(audioElement42);
let source42 = resonanceAudioScene.createSource();
audioElementSource42.connect(source42.input);
source42.setRolloff('logarithmic');
source42.setGain(0.95);

var source42x = 3 * Math.cos(3.42 * (1 - (42 / firstMenu_TotalItems)));
var source42y = 3 * Math.sin(3.42 * (1 - (42 / firstMenu_TotalItems)));
var source42z = 0;

source42.setPosition(source42x, source42y, source42z);

sources[42] = source42;
elements[42] = audioElement42;

// 43 //

let audioElement43 = document.createElement('audio');
audioElement43.crossOrigin = "anonymous";
audioElement43.src = './src/audio/note43.mp3';
let audioElementSource43 = audioContext.createMediaElementSource(audioElement43);
let source43 = resonanceAudioScene.createSource();
audioElementSource43.connect(source43.input);
source43.setRolloff('logarithmic');
source43.setGain(0.95);

var source43x = 3 * Math.cos(3.43 * (1 - (43 / firstMenu_TotalItems)));
var source43y = 3 * Math.sin(3.43 * (1 - (43 / firstMenu_TotalItems)));
var source43z = 0;

source43.setPosition(source43x, source43y, source43z);

sources[43] = source43;
elements[43] = audioElement43;

//44 //

let audioElement44 = document.createElement('audio');
audioElement44.crossOrigin = "anonymous";
audioElement44.src = './src/audio/note44.mp3';
let audioElementSource44 = audioContext.createMediaElementSource(audioElement44);
let source44 = resonanceAudioScene.createSource();
audioElementSource44.connect(source44.input);
source44.setRolloff('logarithmic');
source44.setGain(0.95);

var source44x = 3 * Math.cos(3.44 * (1 - (44 / firstMenu_TotalItems)));
var source44y = 3 * Math.sin(3.44 * (1 - (44 / firstMenu_TotalItems)));
var source44z = 0;

source44.setPosition(source44x, source44y, source44z);

sources[44] = source44;
elements[44] = audioElement44;

// 45 //

let audioElement45 = document.createElement('audio');
audioElement45.crossOrigin = "anonymous";
audioElement45.src = './src/audio/note45.mp3';
let audioElementSource45 = audioContext.createMediaElementSource(audioElement45);
let source45 = resonanceAudioScene.createSource();
audioElementSource45.connect(source45.input);
source45.setRolloff('logarithmic');
source45.setGain(0.95);

var source45x = 3 * Math.cos(3.45 * (1 - (45 / firstMenu_TotalItems)));
var source45y = 3 * Math.sin(3.45 * (1 - (45 / firstMenu_TotalItems)));
var source45z = 0;

source45.setPosition(source45x, source45y, source45z);

sources[45] = source45;
elements[45] = audioElement45;


////////////////////


// Extra sound source for Menu tones.

let audioElement46 = document.createElement('audio');
audioElement46.crossOrigin = "anonymous";
audioElement46.src = './src/audio/firstMenu.mp3';
let audioElementSource46 = audioContext.createMediaElementSource(audioElement46);
let source46 = resonanceAudioScene.createSource();
audioElementSource46.connect(source46.input);
source46.setRolloff('logarithmic');
source46.setGain(0.95);

var source46x = 0;
var source46y = 1;
var source46z = 0;

source46.setPosition(source46x, source46y, source46z);

sources[46] = source46;
elements[46] = audioElement46;


////////////////////////

audioElement46.play();


// Create keyboard response functions.

    window.addEventListener('keydown', function (e) {

        // left arrow
        if (e.key === 'ArrowLeft') {

          if (selection > 0) selection -= 1;


          let currElement = elements[selection + 1];
          let currSource = sources[selection + 1];

          currElement.play();
          
        }

        // right arrow
        if (e.key === 'ArrowRight') {

          if (selection < firstMenu_TotalItems) selection += 1;

          console.log(selection);

          let currElement = elements[selection];
          let currSource = sources[selection];

          currElement.play();
          
        }
      }, false);
    }

    didCreateContext = true;

  }























