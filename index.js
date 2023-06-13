// Declare customerName in the global scope
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

const leastFavoriteCustomer = "initial value";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new value";
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  bestCustomer,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
};
