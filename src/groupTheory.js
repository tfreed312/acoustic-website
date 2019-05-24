

// Group Theory Audio Webpage //

var didCreateContext = false;

function myFunction() {


  if (didCreateContext == false) {


let audioContext = new AudioContext();

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

//////////////////////////


var firstMenu_TotalItems = 10;


sources = [];
elements = [];


currMenu = [];
var currTotal = firstMenu_TotalItems;


quickTools = [];

quickTools[0] = './src/audio/Home.mp3';
quickTools[1] = './src/audio/About.mp3';
quickTools[2] = './src/audio/Products.mp3';
quickTools[3] = './src/audio/Team.mp3';


firstMenu = [];

firstMenu[0] = './src/audio/GroupTheoryLogo.mp3';
firstMenu[1] = './src/audio/GroupTheory.mp3';
firstMenu[2] = './src/audio/BlindnessPuzzle.mp3';
firstMenu[3] = './src/audio/WeMake.mp3';
firstMenu[4] = './src/audio/LearnMore.mp3';
firstMenu[5] = './src/audio/Enable.mp3';
firstMenu[6] = './src/audio/Educate.mp3';
firstMenu[7] = './src/audio/Employ.mp3';
firstMenu[8] = './src/audio/SocialMedia.mp3';
firstMenu[9] = './src/audio/Copyright.mp3';


socialMedia = [];

socialMedia[0] = './src/audio/LinkedIn.mp3';
socialMedia[1] = './src/audio/Facebook.mp3';
socialMedia[2] = './src/audio/Twitter.mp3';
socialMedia[3] = './src/audio/Instagram.mp3';



allNotes = [];

allNotes[0] = './src/audio/GTnote1.mp3';
allNotes[1] = './src/audio/GTnote2.mp3';
allNotes[2] = './src/audio/GTnote3.mp3';
allNotes[3] = './src/audio/GTnote4.mp3';
allNotes[4] = './src/audio/GTnote5.mp3';
allNotes[5] = './src/audio/GTnote6.mp3';
allNotes[6] = './src/audio/GTnote7.mp3';
allNotes[7] = './src/audio/GTnote8.mp3';
allNotes[8] = './src/audio/GTnote9.mp3';
allNotes[9] = './src/audio/GTnote10.mp3';
allNotes[10] = './src/audio/GTnote11.mp3';
allNotes[11] = './src/audio/GTnote12.mp3';

menuChords = [];

menuChords[0] = './src/audio/GroupTheoryHomepage.mp3';
menuChords[1] = './src/audio/quickChord.mp3';
menuChords[2] = './src/audio/firstMenuChord.mp3';


allMenus = [quickTools, firstMenu, socialMedia];


////// Create a sound source and place it in the soundscape.

////////// Start /////////////////

// Create an AudioElement.
let audioElement1 = document.createElement('audio');

// Load an audio file into the AudioElement.
audioElement1.crossOrigin = "anonymous";
audioElement1.src = firstMenu[0];

// Generate a MediaElementSource from the AudioElement.
let audioElementSource1 = audioContext.createMediaElementSource(audioElement1);

// Add the MediaElementSource to the scene as an audio input source.
let source1 = resonanceAudioScene.createSource();
audioElementSource1.connect(source1.input);

// Set sound source parameters.
source1.setRolloff('logarithmic');
source1.setGain(0.95);

// Set source position coordinates.
var source1x = 3 * Math.cos(3.14 * (1 - (0 / firstMenu_TotalItems)));
var source1y = 3 * Math.sin(3.14 * (1 - (0 / firstMenu_TotalItems)));
var source1z = 0;

source1.setPosition(source1x, source1y, source1z);

// Add sources, elements to arrays.
sources[0] = source1;
elements[0] = audioElement1;

//////// End ///////////////////// 

// 2 //

let audioElement2 = document.createElement('audio');
audioElement2.crossOrigin = "anonymous";
audioElement2.src = firstMenu[1];
let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
let source2 = resonanceAudioScene.createSource();
audioElementSource2.connect(source2.input);
source2.setRolloff('logarithmic');
source2.setGain(0.95);

var source2x = 3 * Math.cos(3.14 * (1 - (1 / firstMenu_TotalItems)));
var source2y = 3 * Math.sin(3.14 * (1 - (1 / firstMenu_TotalItems)));
var source2z = 0;

source2.setPosition(source2x, source2y, source2z);

sources[1] = source2;
elements[1] = audioElement2;

// 3 // 

let audioElement3 = document.createElement('audio');
audioElement3.crossOrigin = "anonymous";
audioElement3.src = firstMenu[2];
let audioElementSource3 = audioContext.createMediaElementSource(audioElement3);
let source3 = resonanceAudioScene.createSource();
audioElementSource3.connect(source3.input);
source3.setRolloff('logarithmic');
source3.setGain(0.95);

var source3x = 3 * Math.cos(3.14 * (1 - (2 / firstMenu_TotalItems)));
var source3y = 3 * Math.sin(3.14 * (1 - (2 / firstMenu_TotalItems)));
var source3z = 0;

source3.setPosition(source3x, source3y, source3z);

sources[2] = source3;
elements[2] = audioElement3;

// 4 //

let audioElement4 = document.createElement('audio');
audioElement4.crossOrigin = "anonymous";
audioElement4.src = firstMenu[3];
let audioElementSource4 = audioContext.createMediaElementSource(audioElement4);
let source4 = resonanceAudioScene.createSource();
audioElementSource4.connect(source4.input);
source4.setRolloff('logarithmic');
source4.setGain(0.95);

var source4x = 3 * Math.cos(3.14 * (1 - (3 / firstMenu_TotalItems)));
var source4y = 3 * Math.sin(3.14 * (1 - (3 / firstMenu_TotalItems)));
var source4z = 0;

source4.setPosition(source4x, source4y, source4z);

sources[3] = source4;
elements[3] = audioElement4;

 
// 5 //

let audioElement5 = document.createElement('audio');
audioElement5.crossOrigin = "anonymous";
audioElement5.src = firstMenu[4];
let audioElementSource5 = audioContext.createMediaElementSource(audioElement5);
let source5 = resonanceAudioScene.createSource();
audioElementSource5.connect(source5.input);
source5.setRolloff('logarithmic');
source5.setGain(0.95);

var source5x = 3 * Math.cos(3.14 * (1 - (4 / firstMenu_TotalItems)));
var source5y = 3 * Math.sin(3.14 * (1 - (4 / firstMenu_TotalItems)));
var source5z = 0;

source5.setPosition(source5x, source5y, source5z);

sources[4] = source5;
elements[4] = audioElement5;

// 6 //

let audioElement6 = document.createElement('audio');
audioElement6.crossOrigin = "anonymous";
audioElement6.src = firstMenu[5];
let audioElementSource6 = audioContext.createMediaElementSource(audioElement6);
let source6 = resonanceAudioScene.createSource();
audioElementSource6.connect(source6.input);
source6.setRolloff('logarithmic');
source6.setGain(0.95);

var source6x = 3 * Math.cos(3.14 * (1 - (5 / firstMenu_TotalItems)));
var source6y = 3 * Math.sin(3.14 * (1 - (5 / firstMenu_TotalItems)));
var source6z = 0;

source6.setPosition(source6x, source6y, source6z);

sources[5] = source6;
elements[5] = audioElement6;

// 7 //

let audioElement7 = document.createElement('audio');
audioElement7.crossOrigin = "anonymous";
audioElement7.src = firstMenu[6];
let audioElementSource7 = audioContext.createMediaElementSource(audioElement7);
let source7 = resonanceAudioScene.createSource();
audioElementSource7.connect(source7.input);
source7.setRolloff('logarithmic');
source7.setGain(0.95);

var source7x = 3 * Math.cos(3.14 * (1 - (6 / firstMenu_TotalItems)));
var source7y = 3 * Math.sin(3.14 * (1 - (6 / firstMenu_TotalItems)));
var source7z = 0;

source7.setPosition(source7x, source7y, source7z);

sources[6] = source7;
elements[6] = audioElement7;

// 8 //

let audioElement8 = document.createElement('audio');
audioElement8.crossOrigin = "anonymous";
audioElement8.src = firstMenu[7];
let audioElementSource8 = audioContext.createMediaElementSource(audioElement8);
let source8 = resonanceAudioScene.createSource();
audioElementSource8.connect(source8.input);
source8.setRolloff('logarithmic');
source8.setGain(0.95);

var source8x = 3 * Math.cos(3.14 * (1 - (7 / firstMenu_TotalItems)));
var source8y = 3 * Math.sin(3.14 * (1 - (7 / firstMenu_TotalItems)));
var source8z = 0;

source8.setPosition(source8x, source8y, source8z);

sources[7] = source8;
elements[7] = audioElement8;

// 9 //

let audioElement9 = document.createElement('audio');
audioElement9.crossOrigin = "anonymous";
audioElement9.src = firstMenu[8];
let audioElementSource9 = audioContext.createMediaElementSource(audioElement9);
let source9 = resonanceAudioScene.createSource();
audioElementSource9.connect(source9.input);
source9.setRolloff('logarithmic');
source9.setGain(0.95);

var source9x = 3 * Math.cos(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source9y = 3 * Math.sin(3.14 * (1 - (8 / firstMenu_TotalItems)));
var source9z = 0;

source9.setPosition(source9x, source9y, source9z);

sources[8] = source9;
elements[8] = audioElement9;

// 10 //

let audioElement10 = document.createElement('audio');
audioElement10.crossOrigin = "anonymous";
audioElement10.src = firstMenu[9];
let audioElementSource10 = audioContext.createMediaElementSource(audioElement10);
let source10 = resonanceAudioScene.createSource();
audioElementSource10.connect(source10.input);
source10.setRolloff('logarithmic');
source10.setGain(0.95);

var source10x = 0;
var source10y = 3;
var source10z = 0;

source10.setPosition(source10x, source10y, source10z);

sources[9] = source10;
elements[9] = audioElement10;

// 11 //

let audioElement11 = document.createElement('audio');
audioElement11.crossOrigin = "anonymous";
audioElement11.src = allNotes[0];
let audioElementSource11 = audioContext.createMediaElementSource(audioElement11);
let source11 = resonanceAudioScene.createSource();
audioElementSource11.connect(source11.input);
source11.setRolloff('logarithmic');
source11.setGain(0.95);

var source11x = 0;
var source11y = 5;
var source11z = 0;

source11.setPosition(source11x, source11y, source11z);

sources[10] = source11;
elements[10] = audioElement11;


////////////////////////


var selection = 0;

var currMenu = allMenus[1];
var currElement = elements[10];
var currNote = allNotes[0];

var tempX = 0;
var tempY = 0;


audioElement10.src = menuChords[0];
audioElement10.play();
audioElement11.src = menuChords[2];
audioElement11.play();


// Create keyboard response functions.

    window.addEventListener('keydown', function (e) {

      console.log(e.key);

        // Enter
        if (e.key === 'Enter') {

          if (currMenu == allMenus[1] && selection == 8) {

            currElement.src = null;

            currMenu = allMenus[2];
            currTotal = currMenu.length;
            selection = 0;

            elements[9].src = menuChords[1];
            elements[9].play();


            for (i = 0; i < currTotal; i++)  {
              tempX = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
              tempY = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));
              sources[i].setPosition(tempX, tempY, 0);
            }

            currElement = elements[0];
            currElement.src = currMenu[0];
            setTimeout(myTimer, 666);

          }

          if (currMenu == allMenus[0] && selection == 0) {

            currElement.src = null;

            currMenu = allMenus[1];
            currTotal = currMenu.length;
            selection = 1;

            elements[9].src = menuChords[2];
            elements[9].play();


            for (i = 0; i < currTotal; i++)  {
              tempX = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
              tempY = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));
              sources[i].setPosition(tempX, tempY, 0);
            }

            currElement = elements[selection];
            currElement.src = currMenu[selection];
            setTimeout(myTimer, 666);
            
          }

        }

        // space bar
        if (e.key === ' ') {

          currElement.src = null;

          currMenu = allMenus[0];
          currTotal = currMenu.length;
          selection = 0;

          elements[9].src = menuChords[1];
          elements[9].play();

          for (i = 0; i < currTotal; i++)  {
            tempX = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
            tempY = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));
            sources[i].setPosition(tempX, tempY, 0);
          }

          currElement = elements[0];
          currElement.src = currMenu[0];
          setTimeout(myTimer, 666);

        }

        // left arrow
        if (e.key === 'ArrowLeft') {

          audioElement10.src = null;
          currElement.src = null;

          if (selection != 0) {
            
            selection -= 1; 

            source11x = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
            source11y = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));    
            sources[10].setPosition(source11x, source11y, 0);
            elements[10].src = allNotes[selection];
            elements[10].play();

            currElement = elements[selection];
            currElement.src = currMenu[selection];
            tempX = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
            tempY = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));
            sources[selection].setPosition(tempX, tempY, 0);

            setTimeout(myTimer, 500);

          } else {

            source11x = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
            source11y = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));    
            sources[10].setPosition(source11x, source11y, 0);
            elements[10].src = allNotes[selection];
            elements[10].play();

            currElement = elements[selection];
            currElement.src = currMenu[selection];
            setTimeout(myTimer, 500);

          }
        }

        // right arrow
        if (e.key === 'ArrowRight') {

          audioElement10.src = null;
          currElement.src = null;

          if (selection != currTotal - 1) {
            
            selection += 1; 

            source11x = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
            source11y = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));    
            sources[10].setPosition(source11x, source11y, 0);
            elements[10].src = allNotes[selection];
            elements[10].play();

            currElement = elements[selection];
            currElement.src = currMenu[selection];
            tempX = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
            tempY = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));
            sources[selection].setPosition(tempX, tempY, 0);

            setTimeout(myTimer, 500);

          } else {

            source11x = 3 * Math.cos(3.14 * (1 - (selection / currTotal)));
            source11y = 3 * Math.sin(3.14 * (1 - (selection / currTotal)));    
            sources[10].setPosition(source11x, source11y, 0);
            elements[10].src = allNotes[selection];
            elements[10].play();

            currElement = elements[selection];
            currElement.src = currMenu[selection];
            setTimeout(myTimer, 500);

          }
        }
      }, false);
    }
    
    function myTimer() {
      currElement.play();
    } 


    didCreateContext = true;

  }

