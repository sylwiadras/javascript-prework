var argMoveId, argPlayerMove, argComputerMove, computerMove, randomNumber, playerInput, playerMove;

playerInput = window.prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3. nożyce');
console.log(('wybór ruchu gracza to: ' + playerInput));
playerMove = getMoveName(playerInput);

randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(('wylosowana liczba to: ' + randomNumber));
computerMove = getMoveName(randomNumber);
console.log(('ruch komputera to: ' + computerMove));

function getMoveName(argMoveId) {
    console.log(('wywołano funkcję getMoveName z argumentem: ' + argMoveId));
    if (argMoveId == '1') {
        return 'kamień';
    }
    else if (argMoveId == '2') {
        return 'papier';
    }
    else if (argMoveId == '3') {
        return 'nożyce';
    }
    else {
        printMessage (('Nie znam ruchu o id: ' + argMoveId + '. Spróbuj jeszcze raz.'))
        return 'nieznany ruch';
    }
}

function displayResult (argPlayerMove, argComputerMove) {
    console.log(('wywołano funkcję displayResult z argumentami: ' + argPlayerMove + ', ' + argComputerMove));
    printMessage (('Zagrałem: ' + argComputerMove + ', a Ty: ' + argPlayerMove));
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage (('Wygrywasz! :)'));
    }
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage (('Wygrywasz! :)'));
    }
    else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage (('Wygrywasz! :)'));
    }
    else if (argPlayerMove == argComputerMove) {
        printMessage (('Remis!'));
    }
    else {
        printMessage (('Nie udało się wygrać. :('));
    }
}

displayResult(playerMove, computerMove);