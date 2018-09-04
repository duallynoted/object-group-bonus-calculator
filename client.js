class Employee {
  constructor(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee('Atticus', '2405', '47000', 3); // this creates a new object
const jem = new Employee('Jem', '62347', '63500', 4);
const scout = new Employee('Scout', '6243', '74750', 5);
const robert = new Employee('Robert', '26835', '66000', 1);
const mayella = new Employee('Mayella', '89068', '35000', 2);

const employees = [atticus, jem, scout, robert, mayella]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function calculateBonus(employee) {
  let bonusPercentage;
  const maxBonus = 0.13;
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;

  } else if (employee.reviewRating == 3) {
    bonusPercentage = 0.04;
  } else if (employee.reviewRating == 4) {
    bonusPercentage = 0.06;
  } else if (employee.reviewRating == 5) {
    bonusPercentage = 0.10;

  }
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05

  }
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 0.01
  }
  if (bonusPercentage > maxBonus) {
    bonusPercentage = maxBonus;
  }

  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  let newObject = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: ((bonusPercentage + 1) * employee.annualSalary).toFixed(2),
    totalBonus: Math.round(bonusPercentage * employee.annualSalary)
  }
  return newObject;
}

//adding bootstrap features
//put the appended information in div class "card", and styled accordingly
function processEmployeeBonuses() {
  $('#bonusList').empty();
  for (let i = 0; i < employees.length; i++) {
    let object = calculateBonus(employees[i]);
    console.log(object);
    $('#bonusList').append('<div class="col-6">' + '<div class="card">' + '<div class="card-header">'
      + object.name + '</div>' + '<div class="card-body">' + 'Bonus Percentage: ' + object.bonusPercentage + '<div>'
      + 'Total Compensation: $' + object.totalCompensation + '</div>' + '</div>' + '<div class="card-footer">'
      + 'Total Bonus: $' + object.totalBonus + '</div>' + '</div>' + '</div>');
  }
}
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
$(document).ready(function () {
  $('#processBonusesButton').on('click', processEmployeeBonuses)
});

console.log(employees);
