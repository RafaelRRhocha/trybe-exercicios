export class People {
  name: string
  birthDate: string

  constructor(name: string, birthDate: string) {
    this.name = name
    this.birthDate = birt
  }

  getName() {
    return this.name
  }

  getBirthDate() {
    return this.birthDate
  }

  setName(name: string) {
    if(name.length <= 3) {
      throw new Error("name must be at least 3 characters long")
    }
    this.name = name
  }

  setBirthDate(date: string) {
    this.birthDate = date
  }
}
