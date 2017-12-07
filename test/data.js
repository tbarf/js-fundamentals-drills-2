var users = {
  data: {
    id: {
      "1": {
        username: "user1",
        admin: false,
        citiesLived: [
          {
            hometown: {
              state: {
                louisiana: {
                  city: "New Orleans",
                  population: 391495
                }
              }
            }
          },
          {
            currentLocation: {
              state: {
                hawaii: {
                  city: "Honolulu",
                  population: 402694
                }
              }
            }
          }
        ],
        favoriteMovies: [
          "Star Wars",
          "The Empire Strikes Back",
          "Return of the Jedi"
        ],
        favoriteBook: {
          title: "Eloquent Javascript",
          author: "Marijn Haverbeke"
        }
      },
      "2": {
        username: "user2",
        admin: true,
        citiesLived: [
          {
            hometown: {
              state: {
                washington: {
                  city: "Seattle",
                  population: 704352
                }
              }
            }
          },
          {
            currentLocation: {
              state: {
                california: {
                  city: "San Francisco",
                  population: 870887
                }
              }
            }
          }
        ],
        favoriteMovies: [
          "The Fellowship of the Ring",
          "The Two Towers",
          "The Return of the King"
        ],
        favoriteBook: {
          title: "You Dont Know JS",
          author: "Kyle Simpson"
        }
      },
      "3": {
        username: "user3",
        admin: false,
        citiesLived: [
          {
            hometown: {
              state: {
                montana: {
                  city: "Missoula",
                  population: 72364
                }
              }
            }
          },
          {
            currentLocation: {
              state: {
                newYork: {
                  city: "New York City",
                  population: 8500000
                }
              }
            }
          }
        ],
        favoriteMovies: ["Ghostbusters", "Napolean Dynamite"],
        favoriteBook: {
          title: "Clean Code",
          author: "Robert Martin"
        }
      }
    }
  }
};

var schools = {
  devLeague: {
    address: "2800 Woodlawn Dr",
    phoneNumber: "(808) 738-6406",
    tracks: {
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
      ]
    }
  }
};

module.exports = {
  users,
  schools
};
