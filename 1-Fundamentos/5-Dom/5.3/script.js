function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

//01
function createMonthsList() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  //For para criar a lista com os dias.
  const idText = document.querySelector("#days");
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dias = dezDaysList[i];

    const listaDias = document.createElement("li");
    listaDias.innerText = dias;
    listaDias.classList = "day";

    idText.appendChild(listaDias);

  }
  // idText.sort();
    //for para criar os feriados
    const feriados = [24, 25, 31];
    for (let f = 0; f < feriados.length; f+=1) {
      let diasFeriados = feriados[f];

      const diasFeriadosLista = document.querySelector('.day');

      diasFeriadosLista.innerText = diasFeriados;
      // diasFeriadosLista.classList = "day";
      diasFeriadosLista.classList = "holiday";

      idText.appendChild(diasFeriadosLista);
  }

  //for para criar sexta-feira
  const sextaFeira = [4, 11, 18, 25];
  for (let s = 0; s < sextaFeira.length; s+=1) {
    let diasSextaFeira = sextaFeira[s];

    const sextaFeiraLista = document.querySelector('.day');

    sextaFeiraLista.innerText = diasSextaFeira;
    // sextaFeiraLista.classList = "day";
    sextaFeiraLista.classList = "friday";

    idText.appendChild(sextaFeiraLista);
}
}

//02-03
function createButton (feriados){
  const pegarClasse = document.querySelector('.buttons-container');

  const button = document.createElement('button');
  button.innerText = 'Feriados';
  button.id = 'btn-holiday';

  pegarClasse.appendChild(button);

  button.addEventListener('click', () => {
    const classeDays = document.querySelectorAll('.holiday');
    for (c = 0; c < classeDays.length; c+=1) {
      const classeDaysLista = classeDays[c];

      let corInicial = 'rgb(238,238,238)';
      let corNova = 'green';
        if (classeDays[c].style.backgroundColor === corNova) {
          classeDays[c].style.backgroundColor = corInicial;
          } else {
          classeDays[c].style.backgroundColor = corNova;
    }
    }
  })
}

//04
function createButtonFriday (Sextafeira) {
  const pegarClasseSexta = document.querySelector('.buttons-container');

  const buttonSexta = document.createElement('button');
  buttonSexta.innerText = 'Sexta-Feira';
  buttonSexta.id = 'btn-friday';

  pegarClasseSexta.appendChild(buttonSexta);

  buttonSexta.addEventListener('click', () => {
    const classeDaysSexta = document.querySelectorAll('.friday');
    for (let s = 0; s < classeDaysSexta.length; s+=1) {
      const classeDaysListaSexta = classeDaysSexta[s];
      classeDaysListaSexta.innerText = 'SEXTOU!'
    }
  })

  buttonSexta.addEventListener('dblclick', () => {
    const classeDaysSexta = document.querySelectorAll('.friday');
    for (let s = 0; s < classeDaysSexta.length; s+=1) {
      const classeDaysListaSexta = classeDaysSexta[s];
      classeDaysListaSexta.remove('SEXTOU!');
    };
  });
}

createDaysOfTheWeek();
createMonthsList();
createButton();
createButtonFriday();
