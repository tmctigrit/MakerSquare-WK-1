// NUMBER ONE
// Find all the restaurants with ratings 8 and above. Console log them in the following format:

$.get("http://critics.api.mks.io/restaurants", function (reviews) {

  var highRatings = []
  reviews.filter(function(r) {
    if (r.rating == 8) {
      highRatings.push(r)
    }
    if (r.rating == 9) {
      highRatings.push(r)
    }
    if (r.rating == 10) {
      highRatings.push(r)
    }
  })
  highRatings.sort(function(a,b) { return parseFloat(b.rating) - parseFloat(a.rating) });
  highRatings.forEach(function(j) {
    console.log(j.rating + " - " + j.venue)
  })
})

// ______________________________________________________________________________
// NUMBER TWO
// Find all the restaurants that have the word "Austin" in it (case-insensitive).
// Console log them in the following format:

$.get("http://critics.api.mks.io/restaurants", function (reviews) {

  var austinRestaurants = []
  reviews.filter(function(r) {
    var allRests = r.venue.toLowerCase()
    if (allRests.indexOf("austin") !=-1) {
      austinRestaurants.push(allRests)
      console.log("Austin Restaurants:\n" + austinRestaurants)
    }
   })
})

// ________________________________________________________________________________
// NUMBER THREE
// Find the top 3 movie genres with the most ratings. Console log them in the following format:

$.get("http://critics.api.mks.io/movie-genres", function (reviews) {

var animeRatings = [];
var comedyRatings = [];
var musicalRatings = [];
var dramaRatings = [];

reviews.filter(function(r) {
  if (r.genre == "comedy") {
    comedyRatings.push(r.rating);

   }
  if (r.genre == "anime") {
    animeRatings.push(r.rating);

  }
  if (r.genre == "musical") {
    musicalRatings.push(r.rating);

  }
  if (r.genre == "drama") {
    dramaRatings.push(r.rating);

  }

  })


// turns the Comedy array of strings into an Integer array

 var comedyResult = comedyRatings.map(function (x) {
   return parseInt(x, 10);
});

// finds the total sum of the Comedy array of integers

 var comedyTotal = comedyResult.reduce(function(a, b) {
 return a + b;
});

 // turns the Anime array of strings into an Integer array

 var animeResult = animeRatings.map(function (x) {
   return parseInt(x, 10);
});


// finds the total sum of the Anime array of integers

 var animeTotal = animeResult.reduce(function(a, b) {
 return a + b;
});

// turns the Drama array of strings into an Integer array

 var dramaResult = dramaRatings.map(function (x) {
   return parseInt(x, 10);
});


// finds the total sum of the Drama array of integers

 var dramaTotal = dramaResult.reduce(function(a, b) {
 return a + b;
});

 // turns the Musical array of strings into an Integer array

 var musicalResult = musicalRatings.map(function (x) {
   return parseInt(x, 10);
});


// finds the total sum of the Musical array of integers

 var musicalTotal = musicalResult.reduce(function(a, b) {
 return a + b;
});

 var comedyAverage = comedyTotal / comedyResult.length

  console.log("Com Average " + comedyAverage)
  console.log("Comedy " + comedyTotal + " Reviews");
  console.log("Anime " + animeTotal + " Reviews");
  console.log("Musical " + musicalTotal + " Reviews");
  console.log("Drama " + dramaTotal + " Reviews");

})


// ________________________________________________________________________
// NUMBER FOUR
// Find the top 3 movie genres with the highest average ratings.
// Console log them in the following format:

$.get("http://critics.api.mks.io/movie-genres", function (reviews) {

var animeRatings = [];
var comedyRatings = [];
var musicalRatings = [];
var dramaRatings = [];

reviews.filter(function(r) {
  if (r.genre == "comedy") {
    comedyRatings.push(r.rating);

   }
  if (r.genre == "anime") {
    animeRatings.push(r.rating);

  }
  if (r.genre == "musical") {
    musicalRatings.push(r.rating);

  }
  if (r.genre == "drama") {
    dramaRatings.push(r.rating);

  }

  })


// turns the Comedy array of strings into an Integer array

 var comedyResult = comedyRatings.map(function (x) {
   return parseInt(x, 10);
});

// finds the total sum of the Comedy array of integers

 var comedyTotal = comedyResult.reduce(function(a, b) {
 return a + b;
});

 // turns the Anime array of strings into an Integer array

 var animeResult = animeRatings.map(function (x) {
   return parseInt(x, 10);
});


// finds the total sum of the Anime array of integers

 var animeTotal = animeResult.reduce(function(a, b) {
 return a + b;
});

// turns the Drama array of strings into an Integer array

 var dramaResult = dramaRatings.map(function (x) {
   return parseInt(x, 10);
});


// finds the total sum of the Drama array of integers

 var dramaTotal = dramaResult.reduce(function(a, b) {
 return a + b;
});

 // turns the Musical array of strings into an Integer array

 var musicalResult = musicalRatings.map(function (x) {
   return parseInt(x, 10);
});


// finds the total sum of the Musical array of integers

 var musicalTotal = musicalResult.reduce(function(a, b) {
 return a + b;
});

 var comedyAverage = comedyTotal / comedyResult.length
 var animeAverage = animeTotal / animeResult.length
 var musicalAverage = musicalTotal / musicalResult.length
 var dramaAverage = dramaTotal / dramaResult.length

  console.log("Top Movie Genres:")
  console.log("Comedy - " + comedyAverage.toFixed(1))
  console.log("Anime - " + animeAverage.toFixed(1))
  console.log("Musical - " + musicalAverage.toFixed(1))
  console.log("Drama - " + dramaAverage.toFixed(1))

})

// ________________________________________________________________________
// NUMBER FIVE
// Find the top 3 movie genres with the highest average ratings.
// Console log them in the following format:

$.get("http://critics.api.mks.io/cheeses", function (reviews) {

  reviews.filter(function(r) {
    console.log(r.cheese + ": " + r.comment + " --" + r.reviewer)
  })
})










