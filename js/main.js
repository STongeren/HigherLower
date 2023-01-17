const userName = prompt("State your username","User1");


if (userName != null) {
    document.getElementById('name').innerText = userName;
  }

let credits = Number( document.querySelector(".creditNum").innerHTML)




function thrower() {
    let bettingAmount = Number( document.querySelector(".bet").value)
    let currentCredits = credits
    
    let firstRandomNum = Math.floor(Math.random() * 6) + 1;
    let secondRandomNum = Math.floor(Math.random() * 6) + 1;

    const firstDiceImage = '/img/dice' + firstRandomNum + '.png';

    document.querySelectorAll
        ('img')[0].setAttribute('src', firstDiceImage);

    const secondDiceImage = '/img/dice' + secondRandomNum + '.png';
    
    document.querySelectorAll
        ('img')[1].setAttribute('src', secondDiceImage);

    if (firstRandomNum > secondRandomNum) {
        document.querySelector('h1').innerHTML = 'You won!';
        document.querySelector('h1').style.color = '#AAFE81';
        currentCredits = currentCredits + bettingAmount 
        
    } else if (firstRandomNum < secondRandomNum) {
        document.querySelector('h1').innerHTML = 'The Computer won!';
        document.querySelector('h1').style.color = '#FE8181';
        currentCredits = currentCredits - bettingAmount  
        
    } else {
        document.querySelector('h1').innerHTML = "It's A draw";
        document.querySelector('h1').style.color = '#F3FE81'
        
    }   
        document.querySelector(".creditNum").innerHTML = currentCredits;
        console.log(credits)
        credits = currentCredits
}
