const date = new Date();
createCalendar(date);

function createCalendar() {

  let month = date.getMonth();
  let year = date.getFullYear();	

  let d = new Date(year, month);    
  let table = document.querySelector('table');

  // fill before the first day of the month
  var tr = table.insertRow();
  for (let i = 0; i < getDay(d); i++) {
   	let newTD = tr.insertCell();
   	newTD.innerHTML = '';  
  }

  // fill cells
  while (d.getMonth() == month) {
   	let newTD = tr.insertCell();
   	newTD.innerHTML = d.getDate();

    // line translation if it's sunday
    if (getDay(d) % 7 == 6) { 
      var tr = table.insertRow();
    }

    d.setDate(d.getDate() + 1);
  }

  // get the number day of the week
  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) 
      day = 7;
      return day - 1;
  }

  // let today = document.querySelector('#today');
  // today.innerHTML = date;

  let Headline = document.querySelector('#headline');
  Headline.innerHTML = headline(date) + ' ' + date.getFullYear();
}

// next month
let next = document.querySelector('#right');
next.addEventListener('click', nextMonth);

function nextMonth() {
  clearCalendar();

  let month = date.setMonth(date.getMonth()+1);
  createCalendar(date);
};

// previous month
let previous = document.querySelector('#left');
previous.addEventListener('click', previousMonth);

function previousMonth() {
  clearCalendar();
  
  let month = date.setMonth(date.getMonth()-1);
  createCalendar(date);
};

// clear calendar 
function clearCalendar(){
  let table = document.querySelector('table');
  let trAll = document.querySelectorAll('tr');

  for (let i = trAll.length-1; i > 0; i--) {
    table.deleteRow(i);
  }

};

function headline(){
  debugger;
  let monthIndex = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return monthIndex[date.getMonth()];
}

    



