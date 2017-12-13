var nestedData = require("./data.js");

var expect = require("chai").expect;
var func = require("../exercises.js");

describe("JS Fundamental Drills", function() {
  it("#getAllUsernames is a function that takes in an object and returns an array of all usernames.", function() {
    var getUsernames = func.getAllUsernames(nestedData.users);
    expect(getUsernames).to.deep.equal(["user1", "user2", "user3"]);
  });
  it("#hometownCity is a function that takes in an array and returns a string of the users hometown city.", function() {
    var cityName = func.hometownCity(nestedData.users.data.id["3"].citiesLived);
    expect(cityName).to.deep.equal("Missoula");
  });
  it("#usersCurrentState is a function that takes 2 arguments 'data' and 'usernames' and returns a new object with the username as the key and the user's current state as the value.", function() {
    var states = func.usersCurrentState(
      [
        nestedData.users.data.id["1"].citiesLived,
        nestedData.users.data.id["2"].citiesLived,
        nestedData.users.data.id["3"].citiesLived
      ],
      ["user1", "user2", "user3"]
    );
    expect(states).to.deep.equal({
      user1: {
        hawaii: {
          city: "Honolulu",
          population: 402694
        }
      },
      user2: {
        california: {
          city: "San Francisco",
          population: 870887
        }
      },
      user3: {
        newYork: {
          city: "New York City",
          population: 8500000
        }
      }
    });
  });
  it("#findAdmin is a function that takes in an object and returns the username of the admin", function() {
    var admin = func.findAdmin(nestedData.users);
    expect(admin).to.deep.equal("user2");
  });
  it("#addNewMovie is a function that takes in 3 arguments 'data', 'id', 'newMovie'. Returns an array of movie titles.", function() {
    var newMovie = func.addNewMovie(nestedData.users, 2, "The Hobbit");
    expect(newMovie).to.deep.equal([
      "The Fellowship of the Ring",
      "The Two Towers",
      "The Return of the King",
      "The Hobbit"
    ]);
  });
  it("#favoriteBooks is a function that takes in an object and returns an array containing an object with the users favorite books with the author as the key and the title as the value.", function() {
    var favBooks = func.favoriteBooks(nestedData.users);
    expect(favBooks).to.deep.equal([
      {
        "Kyle Simpson": "You Dont Know JS",
        "Marijn Haverbeke": "Eloquent Javascript",
        "Robert Martin": "Clean Code"
      }
    ]);
  });
  it("#countTracks is a function that takes in an object and returns the number amount of tracks offered.", function() {
    var numberOfTracks = func.countTracks(nestedData.schools);
    expect(numberOfTracks).to.deep.equal(3);
  });
  it("#fullTimeStatus is a function that takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.", function() {
    var setToTrue = func.fullTimeStatus(
      nestedData.schools.devLeague.tracks,
      "cyberSecurity"
    );
    expect(setToTrue).to.deep.equal({
      offered: true,
      currentStudents: 0
    });
  });
  it("#newTrack is a function that takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.", function() {
    var addTrack = func.newTrack(
      nestedData.schools.devLeague.tracks,
      [
        [
          {
            fullTime: {
              offered: false,
              currentStudents: 0
            }
          },
          {
            partTime: {
              offered: true,
              currentStudents: 5
            }
          }
        ]
      ],
      "enterprise"
    );
    expect(addTrack).to.deep.equal({
      javascript: [
        {
          fullTime: {
            offered: true,
            currentStudents: 10
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 12
          }
        }
      ],
      cyberSecurity: [
        {
          fullTime: {
            offered: true,
            currentStudents: 0
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 5
          }
        }
      ],
      bigData: [
        {
          fullTime: {
            offered: false,
            currentStudents: 0
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 5
          }
        }
      ],
      enterprise: [
        {
          fullTime: {
            offered: false,
            currentStudents: 0
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 5
          }
        }
      ]
    });
  });
  it("#studentCount is a function that takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.", function() {
    var count = func.studentCount(nestedData.schools.devLeague, "bigData");
    expect(count).to.deep.equal({
      bigData: {
        offered: true,
        currentStudents: 10
      }
    });
  });
  it("#incrementAge is a function that takes in 2 arrays where each index in the first array is the value and each index in the the second array is the key, and returns an object {key1: val1, key2:val2, key3:val3}", function() {
    var increment = func.incrementAge(
      [
        nestedData.users.data.id["1"].age,
        nestedData.users.data.id["2"].age,
        nestedData.users.data.id["3"].age
      ],
      ["user1", "user2", "user3"]
    );
    expect(increment).to.deep.equal({
      user1: "33 years old",
      user2: "30 years old",
      user3: "41 years old"
    });
  });
  it("#movieRatings is a function that takes in 2 arguments where the first argument is the key and second argument is the value {key1: val1, key2:val2, key3:val3, etc...}", function() {
    var ratings = func.movieRatings(
      [
        nestedData.users.data.id["1"].favoriteMovies,
        nestedData.users.data.id["2"].favoriteMovies,
        nestedData.users.data.id["3"].favoriteMovies
      ],
      [9.5, 8, 8.6, 9, 8.9, 9.4, 7.8, 8.3, 7.5]
    );
    expect(ratings).to.deep.equal({
      "Star Wars": 9.5,
      "The Empire Strikes Back": 8,
      "Return of the Jedi": 8.6,
      "The Fellowship of the Ring": 9.5,
      "The Two Towers": 8,
      "The Return of the King": 8.6,
      "The Hobbit": 9,
      Ghostbusters: 9.5,
      "Napolean Dynamite": 8
    });
  });
  it("#sumOfAllStudents is a function that takes in an object and returns the sum of all currently enrolled students.", function() {
    var sum = func.sumOfAllStudents(nestedData.schools.devLeague.tracks);
    expect(sum).to.deep.equal(42);
  });
  it("#mapLanguageToCreator is a function that takes in 3 arguments 'data', 'createdBy', and 'year' and returns key-value pairs { name: language }.", function() {
    var mapToCreator = func.mapLanguageToCreator(
      nestedData.languages,
      ["Brendan Eich", "James Gosling"],
      1995
    );
    expect(mapToCreator).to.deep.equal({
      "Brendan Eich": "javascript",
      "James Gosling": "java"
    });
  });
  it("#mapOccurrences is a function that takes in an object and returns key-value pairs that count how many languages were created in given years { 2017: 1 }.", function() {
    var frequency = func.mapOccurrences(nestedData.languages);
    expect(frequency).to.deep.equal({
      "1972": 1,
      "1989": 1,
      "1993": 1,
      "1995": 2,
      "2011": 1
    });
  });
  it("#countLanguages is a function that takes in an object and returns the number of languages in the dataset.", function() {
    var countLang = func.countLanguages(nestedData.languages);
    expect(countLang).to.deep.equal(6);
  });
  it("#phoneNumber is a function that takes in a string and returns only the numbers in an array.", function() {
    var getNums = func.phoneNumber(nestedData.schools.devLeague.phoneNumber);
    expect(getNums).to.deep.equal([8, 0, 8, 7, 3, 8, 6, 4, 0, 6]);
  });
  it("#reverseStrings is a function that takes in an object and returns the names of the tracks offered reversed.", function() {
    var reverseStr = func.reverseStrings(nestedData.schools);
    expect(reverseStr).to.deep.equal([
      "tpircsavaj",
      "ytiruceSrebyc",
      "ataDgib",
      "esirpretne"
    ]);
  });
  it("#getAgeById is a function that takes in an object and returns an array with the user's username and age.", function() {
    var ageById = func.getAgeById(nestedData.users, 3);
    expect(ageById).to.deep.equal(["user3", 40]);
  });
  it("#allTheStates is a function that takes in an object and returns an array with all of the state names of where user's have lived. ", function() {
    var states = func.allTheStates([
      nestedData.users.data.id["1"],
      nestedData.users.data.id["2"],
      nestedData.users.data.id["3"]
    ]);
    expect(states).to.deep.equal([
      "louisiana",
      "hawaii",
      "washington",
      "california",
      "montana",
      "newYork"
    ]);
  });
  it("#allTheMovies is a function that takes in an object and returns an array of strings with all the names of each user's favorite movies.", function() {
    var allMovies = func.allTheMovies([
      nestedData.users.data.id["1"],
      nestedData.users.data.id["2"],
      nestedData.users.data.id["3"]
    ]);
    expect(allMovies).to.deep.equal([
      "Star Wars",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Fellowship of the Ring",
      "The Two Towers",
      "The Return of the King",
      "The Hobbit",
      "Ghostbusters",
      "Napolean Dynamite"
    ]);
  });
});
