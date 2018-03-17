//INDIVIDUAL EXERCISE EXTENSION 1 + 2
var reservations = {
  Bob: {
    claimed: false
  },
  Ted: {
    claimed: true
  }
};
reservations.BOB = reservations.Bob;
delete reservations.Bob;
reservations.TED = reservations.Ted;
delete reservations.Ted;

/***************************
* update Orders on the page
****************************/
// Update page with initial reservations
updateOrders();

function updateOrders() {
  var orders = document.querySelector('.orders');
  orders.textContent = '';
  var result = '';
  for (var key in reservations) {
    if (reservations.hasOwnProperty(key)) {
      result = key + ': {claimed: ' + reservations[key].claimed + '}\n';
      var para = document.createElement('p');
      var node = document.createTextNode(result);
      para.appendChild(node);
      orders.appendChild(para);
    }
  }
}

/*******************************
* find an order or create one
********************************/
var claimReservation = function(name) {
  var result = document.querySelector('.result');
  // check if name reservation exist
  if (reservations.hasOwnProperty(name)) {
    if (!reservations[name].claimed) {
      result.textContent = 'Hello ' + name + ', your order is not claimed.';
    } else {
      result.textContent = 'Hello ' + name + ', your order is already claimed.';
    }
  } else {
    // add new order to the reservations object
    reservations[name] = {
      claimed: true
    };
    result.textContent =
      'Hello ' + name + ', we created your order and is already claimed.';
    // update orders on the page
    updateOrders();
  }
};


/*******************************
* Button clicked- take user name
 and find order
********************************/

document.querySelector('.btn').addEventListener('click', function() {
  // Get the name the user entered
  var name = document.querySelector('.order-name').value.toUpperCase();
  if (name === '') {
    document.querySelector('.result').textContent =
      'You need to enter a valid name.';
  } else {
    claimReservation(name);
  }
});