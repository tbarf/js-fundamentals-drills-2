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
      user1: { hawaii: { city: "Honolulu", population: 402694 } },
      user2: { california: { city: "San Francisco", population: 870887 } },
      user3: { newYork: { city: "New York City", population: 8500000 } }
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
    expect(setToTrue).to.deep.equal({ offered: true, currentStudents: 0 });
  });
  it("#newTrack is a function that takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.", function() {
    var addTrack = func.newTrack(
      nestedData.schools.devLeague.tracks,
      [
        [
          { fullTime: { offered: false, currentStudents: 0 } },
          { partTime: { offered: true, currentStudents: 5 } }
        ]
      ],
      "enterprise"
    );
    expect(addTrack).to.deep.equal({
      javascript: [
        { fullTime: { offered: true, currentStudents: 10 } },
        { partTime: { offered: true, currentStudents: 12 } }
      ],
      cyberSecurity: [
        { fullTime: { offered: true, currentStudents: 0 } },
        { partTime: { offered: true, currentStudents: 5 } }
      ],
      bigData: [
        { fullTime: { offered: false, currentStudents: 0 } },
        { partTime: { offered: true, currentStudents: 5 } }
      ],
      enterprise: [
        { fullTime: { offered: false, currentStudents: 0 } },
        { partTime: { offered: true, currentStudents: 5 } }
      ]
    });
  });
  it("#studentCount is a function that takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.", function() {
    var count = func.studentCount(nestedData.schools.devLeague, "bigData");
    expect(count).to.deep.equal({
      bigData: { offered: true, currentStudents: 10 }
    });
  });
});
