console.log("JavaScript is loaded");
document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', function() {
      console.log("Button clicked: " + this.innerText);
    });
  });

  let display = document.getElementById('display');
  console.log(display); 
  
  const sounds = {
    'Q': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3', name: 'Heater 1' },
    'W': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3', name: 'Heater 2' },
    'E': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3', name: 'Heater 3' },
    'A': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3', name: 'Heater 4' },
    'S': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3', name: 'Heater 6' },
    'D': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3', name: 'Clap' },
    'Z': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3', name: 'Kick n’ Hat' },
    'X': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3', name: 'Kick' },
    'C': { sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3', name: 'Closed Hi-Hat' }
  };
 

  
  document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', function() {
      let buttonValue = this.innerText;
      console.log("Button clicked: " + buttonValue); 
  
      if (sounds[buttonValue]) {
        const audio = new Audio(sounds[buttonValue].sound);
        audio.play();
        console.log(sounds[buttonValue].sound);  
        if (display) {
          display.value = 'Playing: ' + sounds[buttonValue].name;
        } else {
          console.log("Display element not found.");
        }
      } else {
        console.log("No sound for this button.");
      }
    });
  });
    