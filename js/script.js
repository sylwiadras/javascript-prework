var computerMove, randomNumber, playerInput, playerMove;

randomNumber = Math.floor(Math.random() * 3 + 1);

console.log(('wylosowana liczba to: ' + randomNumber));

if (randomNumber == '1') {
    computerMove = 'kamień';
}

else {
    computerMove ='nieznany ruch';
}

if (randomNumber == '2') {
    computerMove = 'papier';
}

if (randomNumber == '3') {
    computerMove = 'nożyce';
}

printMessage (('Mój ruch to: ' + computerMove));

playerInput = window.prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3. nożyce');

console.log (('wpisana odpowiedź to: ' + playerInput));

if (playerInput == '1') {
    playerMove = 'kamień';
}

else if (playerInput == '2') {
    playerMove = 'papier';
}

else if (playerInput == '3') {
    playerMove = 'nożyce';
}

else {
    playerMove = 'nieznany ruch';
}



printMessage (('Twój ruch to: ' + playerMove));