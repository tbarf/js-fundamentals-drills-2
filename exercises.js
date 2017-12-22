/* #getAllUsernames
 *
 * Takes in an object and returns an array of all usernames.
 *
 * @param {Object}
 * @return {Array}
 */

var getAllUsernames;

/* #hometownCity
 *
 * Takes in an array and returns a string of the users hometown city.
 *
 * @param {Array}
 * @return {String}
 */

var hometownCity;

/* #usersCurrentState
 *
 * Takes 2 arguments 'data' and 'usernames' and returns a new object with the username as the key and the user's current state as the value.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var usersCurrentState;

/* #findAdmin
 *
 * Takes in an object and returns the username of the admin.
 *
 * @param {Object}
 * @return {String}
 */

var findAdmin;

/* #addNewMovie
 *
 * Takes in 3 arguments 'data', 'id', 'newMovie'. Returns an array of movie titles.
 *
 * @param {Object}
 * @param {Number} id
 * @param {String} movie to add to array
 * @return {Array}
 */

var addNewMovie;

/* #favoriteBooks
 *
 * Takes in an object and returns an array containing an object with the users favorite books with the author as the key and the title as the value.
 *
 * @param {Object}
 * @return {Array}
 */

var favoriteBooks;

/* #countTracks
 *
 * Takes in an object and returns the number amount of tracks offered.
 *
 * @param {Object}
 * @return {Number}
 */

var countTracks;

/* #fullTimeStatus
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var fullTimeStatus;

/* #newTrack
 *
 * Takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.
 *
 * @param {Object}
 * @param {Array}
 * @param {String}
 * @return {Object}
 */

var newTrack;

/* #bigDataTrack
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true and doubles the amount of current students attending.
 *
 * @param {Object}
 * @param {String}
 * @return {Object }
 */

var bigDataTrack;

/* #incrementAge
 *
 * Takes in 2 arguments 'value' and 'key' and returns key-value pairs in an object.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var incrementAge;

/* #movieRatings
 *
 * Takes in 2 arguments 'key' and 'value' and returns key-value pairs in an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var movieRatings;

/* #sumOfAllStudents
 *
 * Takes in an object and returns the sum of all currently enrolled students.
 *
 * @param {Object}
 * @return {Number}
 */

var sumOfAllStudents;

/* #mapLanguageToCreator
 *
 * Takes in 3 arguments 'data', 'createdBy', and 'year' and returns key-value pairs { name: language }.
 *
 * @param {Object} data
 * @param {Array} names
 * @param {Number} year
 * @return {Object}
 */

var mapLanguageToCreator;

/* #mapOccurrences
 *
 * Takes in an object and returns key-value pairs that count how many languages were created in given years { 2017: 1 }.
 *
 * @param {Object} data
 * @return {Object}
 */

var mapOccurrences;

/* #countLanguages
 *
 * Takes in an object and returns the number of languages in the dataset.
 *
 * @param {Object}
 * @return {Number}
 */

var countLanguages;

/* #phoneNumber
 *
 * Takes in a string and returns only the numbers in an array.
 *
 * @param {String} phone number
 * @return {Array}
 */

var phoneNumber;

/* #phoneNumber
 *
 * Takes in an object and returns the names of the tracks offered reversed.
 *
 * @param {Object}
 * @return {Array}
 */

var reverseStrings;

/* #getAgeById
 *
 * Takes in an object and returns an array with the user's username and age.
 *
 * @param {Object}
 * @return {Array}
 */

var getAgeById;

/* #allTheStates
 *
 * Takes in an object and returns an array with all of the state names of where user's have lived.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheStates;

/* #allTheMovies
 *
 * Takes in an object and returns an array of strings with all the names of each user's favorite movies.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheMovies;

/* #addCoffeeFlavor
 *
 * Takes in an object and returns a new object with the name of the coffee as the key and the value as an array of flavors plus a new flavor added to each array.
 *
 * @param {Object}
 * @param {String} flavor
 * @return {Object}
 */

var addCoffeeFlavor;

/* #avgCoffeePrice
 *
 * Takes in 2 arguments 'data' and 'number'. Returns the average price of coffee based on total/number.
 *
 * @param {Object}
 * @param {Number} number of coffee types
 * @return {Number}
 * 
 */

var avgCoffeePrice;

/* #updateBakedGoodsPrice
 *
 * Takes in 2 arguments 'data' and 'discountedPrice' and returns the data object with the new discountedPrice of all bakedGoods.
 *
 * @param {Object}
 * @param {Number} discountedPrice
 * @return {Number}
 * 
 */

var updateBakedGoodsPrice;

/* #costOfCoffeeOnOrder
 *
 * Takes in an object and returns the total cost of all coffee's on order.
 *
 * @param {Object}
 * @return {Number}
 * 
 */

var costOfCoffeeOnOrder;

/* #costOfCoffeeOnOrder
 *
 * Takes in an array and returns a new array with all the flavors of coffee displaying only once in the array.
 *
 * @param {Array}
 * @return {Array}
 * 
 */

var uniqueCoffeeFlavors;

/* #cheapestSandwich
 *
 * Takes in an object and returns a string with the price of the cheapest sandwich and the name of the sandwich. (eg. "$1 sandwichName")
 *
 * @param {Object}
 * @return {String}
 * 
 */

var cheapestSandwich;

/* #allcafeItems
 *
 * Takes in an object and returns key value pairs where the key is the category product (coffee, baked goods, etc) and the value is an array of strings. (eg. { category: ['']})
 *
 * @param {Object}
 * @return {String}
 * 
 */

var allcafeItems;

/* #halfOffSandwiches
 *
 * Takes in an 'array' and a 'number'. If the price of the item is greater than the 'number', return an object with the sandwich name as the key and the value as half the price of it's current price.
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var halfOffSandwiches;

/* #getNoMeatSandwiches
 *
 * Takes in an array and returns an object of only sandwiches with no meat as an ingredient. The key is the name of the sandwich and the value is the price of the sandwich ( eg: { sandwich1: $5 } ).
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var getNoMeatSandwiches;

/* #updateCoffeeInventory
 *
 * Takes in an object, array, and number. Should return a new object with the property 'inStock' and 'ordered', set the value to an object with key as the coffee name and the value as the new amount.
 *
 * @param {Array}
 * @param {Array} amtToRemoveFromStock,
 * @param {Number} maxStock
 * @return {Object}
 * 
 */

var updateCoffeeInventory;

/* #findCupOfCoffee
 *
 * Takes in an object and number. Returns a new object with the name of the coffee as the key and the value set to true if the cup of coffee cost less than or equal to number param.
 *
 * @param {Object} data
 * @param {Number} budget
 * @return {Object}
 * 
 */

var findCoffee;

/* #totalPopulation
 *
 * Takes in an object and returns the total sum of the all the places every user has lived.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var totalPopulation;

/* #placesLived
 *
 * Takes in an object and returns a new object with 2 properties 'hometown' and 'currentLocation' and set the value to an object with the user's username as the key and the state as the value.
 * 
 * example:
 * { home: {person1: 'homeState'},
 * current: {person1: 'currState'}}
 *
 * @param {Object} data
 * @return {Object} user object containing their username, state of hometown and state of currentLocation
 * 
 */

var placesLived;

/* #addSchool
 *
 * Takes in 3 arguments 'data', 'newSchool', and 'tracks'. Returns the 'data' object with the 'newSchool' object added. Set 'tracks' value to an array of tracks offered.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var addSchool;

/* #updateGitHubRank
 *
 * Takes in an object and a number. Returns a new object with a gitHubRank property set to an object with the rank of each language in the data object.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var updateGitHubRank;

/* #top3rankedLang
 *
 * Takes in an object. Returns a new object with the property 'topRankingLanguages' and the value set to an object of the name of the language as the key and the number rank as the value.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var top3rankedLang;

/* #removeIngredient
 *
 * Takes in an object and string. Returns a new object with the property 'availableBread' and the value set to an array of all available breads listed only once.
 *
 * @param {Object} dataObj
 * @param {String} removeIng
 * @return {Object}
 * 
 */

var removeIngredient;

/* #removeIngredient
 *
 * Takes in an object and returns a new object with the key as the name of the item and the value set to the price.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var getPrices;

/* #addName
 *
 * Takes in an object and array. Returns the object with each user's full name where the first element in the array belonging to the first user, second element belonging to the second user, etc...
 *
 * @param {Object} newObj
 * @param {Array} nameArray
 * @return {Object}
 * 
 */

var addName;

module.exports = {
  getAllUsernames: null,
  hometownCity: null,
  usersCurrentState: null,
  findAdmin: null,
  addNewMovie: null,
  favoriteBooks: null,
  countTracks: null,
  newTrack: null,
  fullTimeStatus: null,
  bigDataTrack: null,
  incrementAge: null,
  movieRatings: null,
  sumOfAllStudents: null,
  mapLanguageToCreator: null,
  mapOccurrences: null,
  countLanguages: null,
  phoneNumber: null,
  reverseStrings: null,
  getAgeById: null,
  allTheStates: null,
  allTheMovies: null,
  addCoffeeFlavor: null,
  avgCoffeePrice: null,
  updateBakedGoodsPrice: null,
  costOfCoffeeOnOrder: null,
  uniqueCoffeeFlavors: null,
  cheapestSandwich: null,
  allcafeItems: null,
  halfOffSandwiches: null,
  getNoMeatSandwiches: null,
  updateCoffeeInventory: null,
  findCoffee: null,
  totalPopulation: null,
  placesLived: null,
  addSchool: null,
  updateGitHubRank: null,
  top3rankedLang: null,
  removeIngredient: null,
  getPrices: null,
  addName: null
};