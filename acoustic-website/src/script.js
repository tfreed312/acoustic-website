// Create an AudioContext
var audioContext = null;
var source1 = null;
var audioElement = null;
var didAddListener = false;

var timeNow = null;
var seconds = null;
var condition = true;
var stamp = 1;

var XYpos = 0;

var XPos = 5;
var YPos = 0;

function myFunction() {
  if (audioContext == null) {
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

  // Create an AudioElement.
  let audioElement1 = document.createElement('audio');
  let audioElement2 = document.createElement('audio');
  let audioElement3 = document.createElement('audio');
  let audioElement4 = document.createElement('audio');
  let audioElement5 = document.createElement('audio');
  let audioElement6 = document.createElement('audio');
  let audioElement7 = document.createElement('audio');
  let audioElement8 = document.createElement('audio');

  // Load an audio file into the AudioElement.
  audioElement1.crossOrigin = "anonymous";
  audioElement2.crossOrigin = "anonymous";
  audioElement3.crossOrigin = "anonymous";
  audioElement4.crossOrigin = "anonymous";
  audioElement5.crossOrigin = "anonymous";
  audioElement6.crossOrigin = "anonymous";
  audioElement7.crossOrigin = "anonymous";
  audioElement8.crossOrigin = "anonymous";

  audioElement1.src = 'https://1317375494.rsc.cdn77.org/audio/UspsHomepage.mp3';
  audioElement2.src = 'https://1317375494.rsc.cdn77.org/audio/Section1.mp3';
  audioElement3.src = 'https://1317375494.rsc.cdn77.org/audio/BeyonceHalo.mp3';
  audioElement4.src = 'https://1317375494.rsc.cdn77.org/audio/section2back.mp3';
  audioElement5.src = 'https://1317375494.rsc.cdn77.org/audio/section3back.mp3';
  audioElement6.src = 'https://1317375494.rsc.cdn77.org/audio/section4back.mp3';

  // Generate a MediaElementSource from the AudioElement.
  let audioElementSource = audioContext.createMediaElementSource(audioElement1);
  let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
  let audioElementSource3 = audioContext.createMediaElementSource(audioElement3);
  let audioElementSource4 = audioContext.createMediaElementSource(audioElement4);
  let audioElementSource5 = audioContext.createMediaElementSource(audioElement5);
  let audioElementSource6 = audioContext.createMediaElementSource(audioElement6);
  let audioElementSource7 = audioContext.createMediaElementSource(audioElement7);
  let audioElementSource8 = audioContext.createMediaElementSource(audioElement8);

  // Add the MediaElementSource to the scene as an audio input source.
  let source1 = resonanceAudioScene.createSource();
  let source2 = resonanceAudioScene.createSource();
  let source3 = resonanceAudioScene.createSource();
  let source4 = resonanceAudioScene.createSource();
  let source5 = resonanceAudioScene.createSource();
  let source6 = resonanceAudioScene.createSource();
  let source7 = resonanceAudioScene.createSource();
  let source8 = resonanceAudioScene.createSource();
  audioElementSource.connect(source1.input);
  audioElementSource2.connect(source2.input);
  audioElementSource3.connect(source3.input);
  audioElementSource4.connect(source4.input);
  audioElementSource5.connect(source5.input);
  audioElementSource6.connect(source6.input);
  audioElementSource7.connect(source7.input);
  audioElementSource8.connect(source7.input);

  // Set sound source parameters.
  source1.setRolloff('logarithmic');
  source2.setRolloff('logarithmic');
  source3.setRolloff('logarithmic');
  source4.setRolloff('logarithmic');
  source5.setRolloff('logarithmic');
  source6.setRolloff('logarithmic');
  source7.setRolloff('logarithmic');
  source8.setRolloff('logarithmic');
  source1.setGain(0.5);
  source2.setGain(0.5);
  source3.setGain(0.95);
  source4.setGain(0.95);
  source5.setGain(0.95);
  source6.setGain(0.95);




  // Make array to contain sounds of Section 1.

  var QuickTools = [];
  var Business = [];
  var Help = [];

  var section1 = [];

  section1[0] = QuickTools;
  section1[1] = 'https://1317375494.rsc.cdn77.org/audio/QuickTools.mp3';
  section1[2] = Business;
  section1[3] = 'https://1317375494.rsc.cdn77.org/audio/Business.mp3';
  section1[4] = Help;
  section1[5] = 'https://1317375494.rsc.cdn77.org/audio/Help.mp3';
  section1[6] = null;
  section1[7] = 'https://1317375494.rsc.cdn77.org/audio/ImageDscrpt.mp3';


  // Make array to contain sounds of Section 2.

  var WhatWeDo = [];
  var LearnMore = [];

  var section2 = [];

  section2[0] = WhatWeDo;
  section2[1] = 'https://1317375494.rsc.cdn77.org/audio/WhatWeDo.mp3';
  section2[2] = LearnMore;
  section2[3] = 'https://1317375494.rsc.cdn77.org/audio/LearnMoreClickable.mp3';

  // Make array to contain sounds of Section 3.

  var OurTeam = [];
  var SampleText = [];

  var section3 = [];

  section3[0] = OurTeam;
  section3[1] = 'https://1317375494.rsc.cdn77.org/audio/OurTeam.mp3';
  section3[2] = SampleText;
  section3[3] = 'https://1317375494.rsc.cdn77.org/audio/SampleTextPara.mp3';

  // Make array to contain sounds of Section 4.

  var MoreSample = [];

  var section4 = [];

  section4[0] = MoreSample;
  section4[1] = 'https://1317375494.rsc.cdn77.org/MoreSample.mp3';

  // Make array to contain all sections.

  var menus = [];

  menus[0] = section1;
  menus[1] = 'https://1317375494.rsc.cdn77.org/audio/Section1.mp3';
  menus[2] = section2;
  menus[3] = 'https://1317375494.rsc.cdn77.org/audio/Section2.mp3';
  menus[4] = section3;
  menus[5] = 'https://1317375494.rsc.cdn77.org/audio/Section3.mp3';
  menus[6] = section4;
  menus[7] = 'https://1317375494.rsc.cdn77.org/audio/Section4.mp3';


  var totals = [4, 2, 2, 1];
  

  var currentMenu = menus;
  var total = currentMenu.length;
  var level = 0;
  var currentItem = 0;
  var currentSound = 1;
  

   // Add listener position coordinates

   var trackZ = 0;
   var listenX = 0;
   var listenY = 0;
   var listenZ = 0;

   // Add section height variables

    var section1Height = 3;
    var section2Height = 5;
    var section3Height = 2;
    var section4Height = 4;

    var maxDist1 = Math.sqrt(15 + (section1Height * section1Height));
    var maxDist2 = Math.sqrt(15 + (section2Height * section2Height));
    var maxDist3 = Math.sqrt(15 + (section3Height * section3Height));
    var maxDist4 = Math.sqrt(15 + (section4Height * section4Height));


  source3.setMaxDistance(maxDist1);
  source4.setMaxDistance(maxDist2);
  source5.setMaxDistance(maxDist3);
  source6.setMaxDistance(maxDist4);


   // Add source coordinates
  var source1X = 0;
  var source1Y = 1;
  var source1Z = 0;
  source1.setPosition(source1X, source1Y, source1Z);

  var source2X = 0;
  var source2Y = 1;
  var source2Z = 0;
  source2.setPosition(source2X, source2Y, source2Z);

  var source3X = 3;
  var source3Y = 0;
  var source3Z = 0;
  source3.setPosition(source3X, source3Y, source3Z);

  var source4X = 3;
  var source4Y = 0;
  var source4Z = -1 * (section1Height + section2Height);
  source4.setPosition(source4X, source4Y, source4Z);

  var source5X = 3;
  var source5Y = 0;
  var source5Z = -1 * (section1Height + (section2Height * 2) + section3Height);
  source5.setPosition(source5X, source5Y, source5Z);

  var source6X = 3;
  var source6Y = 0;
  var source6Z = -1 * (section1Height + (section2Height * 2) + (section3Height * 2) + section4Height);
  source6.setPosition(source6X, source6Y, source6Z);



 // Add audio status boolean

 var playing3 = true;
 var playing4 = false;
 var playing5 = false;
 var playing6 = false;



    
  // Begin webpage activity
    source1.setPosition(0, 1, 0);
    source2.setPosition(0, 1, 0);
    source3.setPosition(3, 0, 0);
    audioElement1.play();
    audioElement3.play();


// Create menu select function.
  window.addEventListener('keypress', function (e) {

  console.log(e.which);
  console.log(currentItem);

      // spacebar
      if (e.which == 32) {

        if (level == 0) {

          currentItem = 0;
          currentSound = 1;

          var source2X = Math.cos(3.14 * (1 - ((currentItem + 1) / (total + 1))));
          var source2Y = Math.sin(3.14 * (1 - ((currentItem + 1) / (total + 1))));
          console.log(source2X);

          source1.setPosition(0, 1, 0);
          source2.setPosition(source2X, source2Y, 0);
          audioElement2.src = currentMenu[currentSound];
          audioElement1.src = 'https://1317375494.rsc.cdn77.org/audio/UspsHomepage.mp3';
          audioElement1.play();

        } else {

          if (currentItem == -1) currentItem += 1;

          level = 0;
          currentMenu = menus;
          total = currentMenu.length;
          currentItem = 0;
          currentSound = 1;

          source2X = Math.cos(3.14 * (1 - ((currentItem + 1) / (total + 1))));
          source2Y = Math.sin(3.14 * (1 - ((currentItem + 1) / (total + 1))));
          console.log(source2X);

          source1.setPosition(0, 1, 0);
          source2.setPosition(source2X, source2Y, 0);
          audioElement1.src = 'https://1317375494.rsc.cdn77.org/audio/UspsHomepage.mp3';
          audioElement1.play();
        }
      }

      // select current menu item / 'enter' key
      if (e.which == 13) {

        currentMenu = currentMenu[currentItem];
        
        level += 1;
        total = currentMenu.length;
        currentItem = 0;
        currentSound = 1;

        source2X = Math.cos(3.14 * (1 - ((currentItem + 1) / (total + 1))));
        source2Y = Math.sin(3.14 * (1 - ((currentItem + 1) / (total + 1))));

        source2.setPosition(source2X, source2Y, 0);
        audioElement2.src = currentMenu[1];
        audioElement2.play();

      }

        // left arrow / 'f' key
      if (e.which == 102) {
            // Returns to previous sound in array (if any)
            if (currentItem > 0) {
                currentItem -= 2;
                currentSound -= 2;

                source2X = Math.cos(3.14 * (1 - ((currentItem + 1) / (total + 1))));
                source2Y = Math.sin(3.14 * (1 - ((currentItem + 1) / (total + 1))));
                source2.setPosition(source2X, source2Y, 0);

                audioElement2.src = currentMenu[currentSound];
                audioElement2.play();
            }

            else {

              audioElement2.src = currentMenu[currentSound];
              audioElement2.play();

            }
      }
      // right arrow / 'j' key
      if (e.which == 106) {
            // Advances to next sound in array (if any)
            if (currentItem < total - 2) {

                currentItem += 2;
                currentSound += 2;

                source2X = Math.cos(3.14 * (1 - ((currentItem + 1) / (total + 1))));
                source2Y = Math.sin(3.14 * (1 - ((currentItem + 1) / (total + 1))));  
                source2.setPosition(source2X, source2Y, 0);

                audioElement2.src = currentMenu[currentSound];
                audioElement2.play();
            }

            else {

              audioElement2.src = currentMenu[currentSound];
              audioElement2.play();

            }
      }
  }, false);



  // Create scrolling function
  window.onwheel = function (event) {
    event.preventDefault();

    if (event.ctrlKey) {
      // Your zoom/scale factor
      scale -= event.deltaY * 0.05;
    } else {
      // Your trackpad Y positions
      trackZ = (event.deltaY / 150);
      listenZ -= trackZ;
        if (listenZ > section1Height) listenZ = section1Height;
        else {
        source3Z += trackZ;
        source4Z += trackZ;
        source5Z += trackZ;
        source6Z += trackZ;
        }
      


      // Source 1
      if (listenZ >= (-1 * section1Height) - 2) {
        if (playing3 == false) {
          audioElement3.src = 'https://1317375494.rsc.cdn77.org/audio/BeyonceHalo.mp3';
          audioElement3.play();
          playing3 = true;  
        }
      } else if (listenZ < (-1 * section1Height) - 2) {
        if (playing3 == true) {
          audioElement3.src = null;
          playing3 = false;
        }
      }


      // Source 2
      if (listenZ <= (-1 * section1Height) + 2 && listenZ >= (-1 * (section1Height + (section2Height * 2))) - 2) {
        if (playing4 == false) {
          console.log(0);
          audioElement4.src = 'https://1317375494.rsc.cdn77.org/audio/section2back.mp3';
          audioElement4.play();
          playing4 = true; 
        }
      } else if (listenZ > (-1 * section1Height) + 2 || listenZ < (-1 * (section1Height + (section2Height * 2))) - 2) {
        if (playing4 == true) {
          audioElement4.src = null;
          playing4 = false;
        }
      }


      // Source 3
      if (listenZ <= (-1 * (section1Height + (section2Height * 2))) + 2 && listenZ >= (-1 * (section1Height + (section2Height * 2) + (section3Height * 2))) - 2) {
        if (playing5 == false) {
          console.log(0);
          audioElement5.src = 'https://1317375494.rsc.cdn77.org/audio/section3back.mp3';
          audioElement5.play();
          playing5 = true; 
        }
      } else if (listenZ > (-1 * (section1Height + (section2Height * 2))) + 2 || listenZ < (-1 * (section1Height + (section2Height * 2) + (section3Height * 2))) - 2) {
        if (playing5 == true) {
          audioElement5.src = null;
          playing5 = false;
        }
      }
     

      console.log(listenZ);

    }
  }





    // Horopter control

    while (seconds < stamp) {
      timeNow = new Date();
      seconds = timeNow.getSeconds;
      var myVar = setInterval(myTimer, 5);
    }
    

    function myTimer() {
      XYpos += 1;
      XPos = 3 * Math.cos((3.14 * XYpos) / 600)
      YPos = 3 * Math.sin((3.14 * XYpos) / 600)
      source3.setPosition(XPos, YPos, source3Z);
      source4.setPosition(XPos, YPos, source4Z);
      source5.setPosition(XPos, YPos, source5Z);
      source6.setPosition(XPos, YPos, source6Z);
    }
  }
}