const secondPassenger = new Car('Gol', 'Prata', 4);

secondPassenger.followTo();
secondPassenger.inXMetersTurnToY(300, 'direita');
secondPassenger.speedUp(2);
secondPassenger.inXMetersTurnToY(200, 'esquerda');
secondPassenger.turnTo('esquerda');
secondPassenger.inXMetersTurnToY(400, 'direita');
secondPassenger.turnTo('direita');
secondPassenger.destinyMeters(100);
secondPassenger.finalDestiny();
