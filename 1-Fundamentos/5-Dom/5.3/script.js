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

function createMonthsList() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const idText = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dias = dezDaysList[i];

    const listaDias = document.createElement("li");
    listaDias.innerText = dias;
    listaDias.classList = "day";

    idText.appendChild(listaDias);

    const found = dezDaysList.indexOf(24, 25, 31);
    console.log(found);

    if (found === 25){
      listaDias.classList = 'holiday';
      console.log(listaDias);
    }
    // else if (listaDias === 4, 11, 18, 25) {
    //   listaDias.classList = "friday";
    // }
    // console.log(listaDias);
  }
}

createDaysOfTheWeek();
createMonthsList();
