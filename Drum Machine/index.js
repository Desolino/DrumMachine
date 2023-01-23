const data = [
  {
    name: "yamaha-rm50-clap",
    type: "clap",
  },
  {
    name: "yamaha-rm50-closed-hi-hat-1",
    type: "hi-hat",
  },
  {
    name: "yamaha-rm50-closed-hi-hat-2",
    type: "hi-hat",
  },
  {
    name: "yamaha-rm50-cowbell-1",
    type: "cowbell",
  },
  {
    name: "yamaha-rm50-cowbell-2",
    type: "cowbell",
  },
  {
    name: "yamaha-rm50-crash-cymbal-1",
    type: "crash",
  },
  {
    name: "yamaha-rm50-crash-cymbal-2",
    type: "crash",
  },
  {
    name: "yamaha-rm50-crash-cymbal-3",
    type: "crash",
  },
  {
    name: "yamaha-rm50-low-bongo",
    type: "low",
  },
  {
    name: "yamaha-rm50-low-tom-1",
    type: "low",
  },
  {
    name: "yamaha-rm50-low-tom-2",
    type: "low",
  },
  {
    name: "yamaha-rm50-rock-kick-1",
    type: "kick",
  },
  {
    name: "yamaha-rm50-rock-kick-2",
    type: "kick",
  },
  {
    name: "yamaha-rm50-studio-kick-1",
    type: "kick",
  },
  {
    name: "yamaha-rm50-pedal-hi-hat-1",
    type: "hi-hat",
  },
  {
    name: "yamaha-rm50-splash-cymbal",
    type: "crash",
  },
];
//console.log(data.length)

//audio
  let kickRock1Audio  = new Audio();
  kickRock1Audio.src='./src/sounds/yamaha-rm50-rock-kick-1.webm';
  
  let kickRock2Audio  = new Audio();
  kickRock2Audio.src='./src/sounds/yamaha-rm50-rock-kick-2.webm';
 
  let kickStudioSound  = new Audio();
  kickStudioSound.src='./src/sounds/yamaha-rm50-studio-kick-1.webm';
  
  let clapSound  = new Audio();
  clapSound.src='./src/sounds/yamaha-rm50-clap.webm';
  
  let openHatSound  = new Audio();
  openHatSound.src='./src/sounds/yamaha-rm50-pedal-hi-hat-1.webm';
  
  let closedHat1Sound  = new Audio();
  closedHat1Sound.src='./src/sounds/yamaha-rm50-closed-hi-hat-1.webm';
  
  let closedHat2Sound  = new Audio();
  closedHat2Sound.src='./src/sounds/yamaha-rm50-closed-hi-hat-2.webm';
  
  let cowbellSound1  = new Audio();
  cowbellSound1.src='./src/sounds/yamaha-rm50-cowbell-1.webm';
  
  let crashSound1  = new Audio();
  crashSound1.src='./src/sounds/yamaha-rm50-crash-cymbal-1.webm';
 
  let crashSound2  = new Audio();
  crashSound2.src='./src/sounds/yamaha-rm50-crash-cymbal-2.webm';
  
  let crashSound3  = new Audio();
  crashSound3.src='./src/sounds/yamaha-rm50-crash-cymbal-3.webm';

  let cowbellSound2  = new Audio();
  cowbellSound2.src='./src/sounds/yamaha-rm50-cowbell-2.webm';
  
  let tomSound1  = new Audio();
  tomSound1.src='./src/sounds/yamaha-rm50-low-tom-1.webm';
  
  let tomSound2  = new Audio();
  tomSound2.src='./src/sounds/yamaha-rm50-low-tom-2.webm';
   
  let bongoSound = new Audio();
  bongoSound.src='./src/sounds/yamaha-rm50-low-bongo.webm';
   
  let splashCrashSound = new Audio();
  splashCrashSound.src='./src/sounds/yamaha-rm50-splash-cymbal.webm';
   
 

//selector tasti
let drumMachine = document.querySelector(".grid");
//console.log("qui va l'event listener", drumMachine)
//kick
  let kickRock1 = document.querySelector(".rock1");
  let kickRock2 = document.querySelector(".rock2");
  let kickStudio = document.querySelector(".studio");
//clap
  let clap = document.querySelector(".clap");
// console.log("RIGA 1",kickRock1,kickRock2,kickStudio,clap)

//hats + cowbell (riga 2)
  let openHat = document.querySelector(".open");
  let closedHat1 = document.querySelector(".closed1");
  let closedHat2 = document.querySelector(".closed2");
  let cowbell1 = document.querySelector(".cowbell1");
//console.log("RIGA 2",openHat,closedHat1,closedHat2,cowbell1);
//crash riga 3  
  let crashCymbal1 = document.querySelector(".crash1");
  let crashCymbal2 = document.querySelector(".crash2");
  let crashCymbal3 = document.querySelector(".crash3");
  let cowbell2 = document.querySelector(".cowbell2");
//console.log("RIGA 3",crashCymbal1,crashCymbal2,crashCymbal3,cowbell2);
// percs riga 4
  let percTom1 = document.querySelector(".perc1");
  let percTom2 = document.querySelector(".perc2");
  let percTom3 = document.querySelector(".perc3");
  let splashCrash = document.querySelector(".splash");
// console.log("RIGA 4",percTom1,percTom2,percTom3,splashCrash);

//player selectors 
  let playerBox = document.querySelector(".player")
  let playBtn = document.querySelector("#play");
  let stopBtn = document.querySelector("#stop");
  let pauseBtn = document.querySelector("#pause");
  let recordBtn = document.querySelector("#record");
  //console.log("bottoni",playBtn,stopBtn,pauseBtn,recordBtn,playerBox)
  //---------------------------------------------------------------
  
  
  
let sampleSuonati=[];

//drumpad 
  // set timeout x luce pad al SOLO touch e poi sparisce
    function myFunction(e) {
      setTimeout(function () {
        e.target.classList.remove("lightBorder")
      }, 250);

    }

  //aggiunge la classe x led pad
    function illumunaTasto(e) {
      if (e.target.classList.contains("grid-item")) {
        //console.log("bottone cliccato", e.target)
        e.target.classList.add("lightBorder");
        myFunction(e); //timer luce tasto
          //check recState+ push suoni riprodotti
          if(!recState.classList.contains("hidden")){
              sampleSuonati.push(e.target.dataset.type)
          }
       
      }

    }

  drumMachine.addEventListener("click", illumunaTasto);
//-------------

let recState = document.querySelector(".recText");
//player
function attivaBtn(e) {
  
  if (e.target.classList.contains("fa")) {
      //attiva bottoni      
     // console.log("bottone del player cliccato",e.target)
      //se è il tasto record, allora fai partire rec.
      if(e.target.classList.contains("fa-circle")){  
        startRecord() // registra i sample schiacciati
      }
      if(e.target.classList.contains("fa-play-circle-o")){
        playBtn.classList.add("lightPlay");  
        setTimeout(()=>{
          playBtn.classList.remove("lightPlay");  
        },250)        
        sampleSuonati.forEach(element => {
         playRecord()              
      });
          
      }
      
    }

  }

  playerBox.addEventListener("click", attivaBtn);
//------------------------------

 

function startRecord(){
  console.log("Samples registrati:",sampleSuonati)
    //record btn e text function
    if(!recordBtn.classList.contains("lightBorder")){
        recordBtn.classList.toggle("lightBorder") 
        //playerBox.insertAdjacentHTML("beforeend", `<h1 class="recText">Recording...</h1>`);
        recState.classList.toggle("hidden");    
    } else{
        recordBtn.classList.toggle("lightBorder")
        recState.classList.toggle("hidden");
    }
  //vedo il primo elemento .play() aggiunto
  //console.log(sampleSuonati[0].attributes.onclick.value);
  
  
};



function fonteAudio(link){ 
  let recorded= new Audio(`./src/sounds/yamaha-rm50-${link}.webm`)  
   //console.log("riprodotto", link)
   //playBtn.classList.toggle("lightBorder")
   recorded.play()
}

function playRecord(){
  let timeout=0;
  sampleSuonati.forEach(audio=>{

    setTimeout(()=>{
      console.log(`Playing audio:${audio}`);
      fonteAudio(audio);
    },timeout);
    timeout+=1000;
  }) 
  
}