const firstPassenger = new Car('Gol', 'Prata', 4);

firstPassenger.followTo();
firstPassenger.inXMetersTurnToY(600, 'esquerda');
firstPassenger.turnTo('esquerda');
firstPassenger.inXMeters(200, 'direita');
firstPassenger.speedUp(1.2);
firstPassenger.inXMetersTurnToY(300, 'direita');
firstPassenger.turnDirection('direita');
firstPassenger.destinyMeters(400);
firstPassenger.finalDestiny();
