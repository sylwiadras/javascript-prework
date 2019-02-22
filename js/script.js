var computerMove, randomNumber;

randomNumber = Math.floor(Math.random() * 3 + 1);

console.log(('wylosowana liczba to: ' + randomNumber));

if (randomNumber == '1') {
    computerMove = 'kamień';
}

if (randomNumber == '2') {
    computerMove = 'papier';
}

if (randomNumber == '3') {
    computerMove = 'nożyce';
}

printMessage (('Mój ruch to: ' + computerMove));