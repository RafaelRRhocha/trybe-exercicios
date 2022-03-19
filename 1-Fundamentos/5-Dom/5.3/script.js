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
      let fonteColor = 'black';
      let fonteColorNova = 'white';
        if (classeDays[c].style.backgroundColor === corNova) {
          classeDays[c].style.backgroundColor = corInicial;
          classeDays[c].style.color = fonteColor;
          } else {
          classeDays[c].style.backgroundColor = corNova;
          classeDays[c].style.color = fonteColorNova;
    }
    }
  })
}

//04
function createButtonFriday (Sextafeira) {
  const sextaFeiraDias = [4, 11, 18, 25];
  const pegarClasseSexta = document.querySelector('.buttons-container');
  const fridays = document.getElementsByClassName('friday');

  const buttonSexta = document.createElement('button');
  buttonSexta.innerText = 'Sexta-Feira';
  buttonSexta.id = 'btn-friday';

  pegarClasseSexta.appendChild(buttonSexta);

  const newFridayText = 'SEXTOU!';

  buttonSexta.addEventListener('click', () => {
    for (let pgs = 0; pgs < fridays.length; pgs += 1) {
      if (fridays[pgs].innerText !== newFridayText) {
          fridays[pgs].innerText = newFridayText;
      } else {
          fridays[pgs].innerText = sextaFeiraDias[pgs];
        }
      }
  });
}

//05, 06, 07, 08, 09
function tasks(tarefas, cor) {
  const pegarSpan = document.createElement('span');
  pegarSpan.innerText = 'Cor de Marcação: ';

  const novaClasse = document.createElement('div');
  novaClasse.classList = 'task';
  novaClasse.style.backgroundColor = 'SeaGreen';

  const classeTarefas = document.querySelector('.my-tasks').appendChild(pegarSpan);
  classeTarefas.appendChild(novaClasse);

  const selecionarTarefa = document.querySelectorAll('.task selected');

  novaClasse.addEventListener('click', (event) => {
    if (selecionarTarefa.length === 0 ) {
      event.target.classList = 'task selected';
    } else {
      event.target.classList = 'task';
    }
  });
}

//10
function cor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', (event) => {
    let eventTargetColor = event.target.style.color;

    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;

    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'black';
    }
  });
}

createDaysOfTheWeek();
createMonthsList();
createButton();
createButtonFriday();
tasks();
cor();
