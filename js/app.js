document.addEventListener('DOMContentLoaded', () => {
        
    const overlay = document.querySelector('#overlay');
    const startButton = document.querySelector('.btn__reset');
    const phrase = document.querySelector('#phrase');
    const qwerty = document.querySelector('#qwerty');
    let missed = 0; 
    let i = 0; 
    const ul = document.querySelector('ul'); 
    const gamePhrases = [
    'apple of my eye',
    'a dime a dozen',
    'burst your bubble',
    'cut to the chase',
    'down to earth'];

    
 
/*FUNCTIONS-------------------------------------------------------------*/

    //return a random phrase from an array
    const getRandomPhraseAsArray = arr => {
        const index = Math.floor(Math.random() * arr.length) + 1;
        const random = arr[index]; 
        const randomPhrase = random.split(); 
        return randomPhrase; 
    }
    //const phraseArr = getRandomPhraseAsArray(gamePhrases);

    //adds the letters of a string to the display
    const addPhraseToDisplay = arr => {
        for (let i = 0; i < arr.length; i += 1){
            const li = document.createElement('li');
            li.appendChild.arr[i]; 
            ul.appendChild(li);
            if(arr[i] === arr[i]){
                arr[i].classList.add('letter');
            }else if(arr[i] === ' '){
                arr[i].classList.add('space');
            } 
        }
    }
 //    const displayLetter = addPhraseToDisplay(phraseArr) FUNCTION CALL

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



     //check if the game has been won or lost
    //  const checkWin = () => {
    //     const letterClass = document.querySelectorAll('.letter'); 
    //     const show = document.querySelectorAll('.show');
    //     const div = document.querySelector('.start');
    //     const title = document.querySelector('.title');   
        
    //     if(letterClass.length === show.length){
    //         div.classList.add('win');  
    //         title.textContent = 'YOU WIN!';
    //         overlay.style.display = 'flex';
    //     }

    //     if(missed > 4){
    //         div.classList.add('lose');   
    //         title.textContent = 'YOU HAVE RUN OUT OF HEARTS PLEASE PLAY AGAIN!';
    //         overlay.style.display = 'flex';        
    //     }
    // } 

/*EVENT HANDLERS--------------------------------------------------------*/
    
    //listen for the start game button to be pressed
    startButton.addEventListener('click', () => {
        overlay.style.display = 'none'; 
    });

    //listen for the onscreen keyboard to be clicked
    qwerty.addEventListener('click', event => {
        if(event.target.tagName ==='BUTTON'){
            event.target.classList.add('chosen');
            event.target.disabled = true; 
            const matched = checkLetter(event.target.textContent); 
            if(!matched){
                const image = document.querySelectorAll('img');
                image[i].src = 'images/lostHeart.png';
                i ++;
                missed += 1;
            }
            //checkWin();         
        }
    }); 
 


 
});





