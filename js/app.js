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
        for (let i = 0; i < letters.length; i += 1){ 
            if(button.textContent === letters[i]){
                letters.classList.add('show');
                button.textContent = match;  
            }
        }
        return match; 
    }
    
    //listen for the onscreen keyboard to be clicked
  qwerty.addEventListener('click', event => {
    if(event.target.tagName ==='BUTTON'){
        event.target.classList.add('chosen');
        event.target.disabled = true; 
        const matched = checkLetter(event.target.textContent); 
        if(!matched){
            const image = document.querySelectorAll('img');

            let i; 
            do{
                i = 0; 
                i += 1;
                missed += 1;
            }while(i < 1)  
            image[i].src = 'images/lostHeart.png'; 
        }
    }
  }); 

    
   
   //adds the letters of a string to the display

    //check if the game has been won or lost
    
 
}); 

