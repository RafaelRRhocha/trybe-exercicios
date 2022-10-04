class Car {
  brand: string
  color: string
  doors: number

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  followTo(): void {
    console.log('Siga em frente');
  }

  inXMetersTurnToY(meters: number, direction: string): void {
    console.log(`Em ${meters} metros vire a ${direction}`);
  }

  turnTo(direction: string): void {
    console.log(`Vire a ${direction}`);
  }

  inXMeters(meters: number, direction: string): void {
    console.log(`Em ${meters} metros na rotatória pegue a segunda saída a ${direction}`);
  }

  speedUp(meters: number): void {
    console.log(`Mantenha em frente pelos próximos ${meters} quilômetros;`);
  }

  turnDirection(direction: string): void {
    console.log(`Vire a ${direction}`);
  }

  destinyMeters(meters: number): void {
    console.log(`Em ${meters} metros você chegará ao seu destino`);
  }

  finalDestiny(): void {
    console.log('Você chegou ao seu destino.');
  }
}