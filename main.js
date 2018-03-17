// Finish the claimReservation function
var reservations1 = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

var name1 = prompt('Please enter the name for your reservation');

var claimReservation1 = function() {
  if(reservations1.hasOwnProperty(name1)) {
    if(!reservations1[name1].claimed) {
      alert('Hello ' + name1 + ', your order is not claimed.');
    } else {
      alert('Hello ' + name1 + ', your order is already claimed.');
    }
  } else {
    alert('There is no reservation under the name: ' + name1);
  }
};

claimReservation1();

// INDIVIDUAL EXERCISE 1
var reservations2 = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

var name2 = prompt('Please enter the name for your reservation');

var claimReservation2 = function() {
  if(reservations2.hasOwnProperty(name2)) {
    if(!reservations2[name2].claimed) {
      alert('Hello ' + name2 + ', your order is not claimed.');
    } else {
      alert('Hello ' + name2 + ', your order is already claimed.');
    }
  } else {
    alert('We are making a reservation under the name: ' + name2);
    reservations2[name2] = {claimed: true};
    alert('Hello ' + name2 + ', your order is already claimed.');
  }
};

claimReservation2();

// INDIVIDUAL EXERCISE 2
var reservations3 = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};
reservations3.BOB = reservations3.Bob;
delete reservations3.Bob;
reservations3.TED = reservations3.Ted;
delete reservations3.Ted;

var name3 = prompt('Please enter the name for your reservation');
name3 = name3.toUpperCase();

var claimReservation3 = function() {
  if(reservations3.hasOwnProperty(name3)) {
    if(!reservations3[name3].claimed) {
      alert('Hello ' + name3 + ', your order is not claimed.');
    } else {
      alert('Hello ' + name3 + ', your order is already claimed.');
    }
  } else {
    alert('There is no reservation under the name: ' + name3);
  }
};

claimReservation3();


