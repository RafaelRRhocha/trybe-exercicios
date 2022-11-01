
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  console.log("bem vinda,", info.personagem);
  console.log(info);

  for (disney in info) {
      console.log(disney);
  }

  for (disney in info) {
    console.log(info[disney]);
}


let person = {
    tio: info.personagem + " e " + 'Tio Patinhas',
    story: info.origem + " e" + "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    mac: info.nota + " e " + 'O último MacPatinhas',
    yes: info.recorrente + " e " + 'Sim'
};

for (toons in person) {
    console.log(person[toons]);
}



