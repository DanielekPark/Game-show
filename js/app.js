document.addEventListener('DOMContentLoaded', () => {
        
    const overlay = document.querySelector('#overlay');
    const startButton = document.querySelector('.btn__reset');
    const phrase = document.querySelector('#phrase');
    const qwerty = document.querySelector('#qwerty');
    let missed = 0; 
    const gamePhrase = ['browser', 'web', 'javascript', 'html', 'css'];

    
    //listen for the start game button to be pressed
    startButton.addEventListener('click', () => {
        overlay.style.display = 'none'; 
    }); 

    //return a random phrase from an array 
    const getRandomPhraseAsArray = arr => {
        let randomNumber = Math.floor(Math.random() * arr.length) + 1;
        let index = arr.indexOf(randomNumber); 
        return randomNumber; 
    }
    getRandomPhraseAsArray(gamePhrase);

    //check if a letter is in the phrase
    const checkLetter = button => {
        const letters = document.getElementsByTagName('li');
        let match = null; 
        for (let i = 0; letters.length; i += 1){ 
            if(button.textContent === letters[i]){
                letters.classList.add('show');
                button.textContent = match;  
            }
        }
        return match; 
    }
    
    //listen for the onscreen keyboard to be clicked
   qwerty.addEventListener('click', (event) => {
       if(event.target.tagName ==='BUTTON'){
          event.target.classList.add('chosen');
          event.target.disabled = true; 
          const matched = checkLetter(event.target);

          if(!matched){
            //remove the one heart image
            const ol = document.querySelector('ol'); 
            const li = ol.children; 
            const images = document.querySelectorAll('img'); 
            

            for (let i = 0; i < li.length; i += 1){
                li[i].removeChild(images[i])
                missed += 1; 
            }
            
          }   
       }
   });

    //adds the letters of a string to the display

    //check if the game has been won or lost
    
 
}); 

// images/lostHeart.png