
book = ["Gourd of the Flies", "J.W. Gourding"]
_______________________________________________


books["Gourd of the Flies"] = "J.W. Gourding"
_______________________________________________


favorite_book[:title]="Gourd of the Flies"
favorite_book[:author]="J.W. Gourding"

book = {title: "Gourd of the Flies", author: "JW. Gourding"}

_______________________________________________

Write an array and/or hash representation of the following data:

 I have a small library of books:
Design Patterns, by John Vlissides, Richard Helm, Ralph Johnson and Erich Gamma.
Patterns of Enterprise Application Architecture, by Martin Fowler
Domain Driven Design, by Eric Evans



mylibrary = [
  {title: "Design Patterns", author: ["John Vlissides", "Richard Helm", "Ralph Johnson", "Erich Gamma"}
  {title: "Patterns of Enterprise Application Architecture", author: ["Martin Fowler"]}
  {title: "Domain Driven Design", author: ["Eric Evans"]}
]
# _______________________________________________

# Write an array and/or hash representation of the following data about a volunteer:

#  The DoGood organization has just received a new volunteer application.
#  The volunteer's name is Alice. She is 25 years old. Her phone number is 555-555-5555.
#  She is volunteering for the event receptionist position.


volunteer_app = {name: "Alicia", age: 25, phone: "555-555-5555", position: "Event Receptionist"}

# _______________________________________________


# # Write an array and/or hash representation of the following data:

# #  The state of Rhode Island (abbreviated RI) is home to 1,050,292 people -
# #  all of whome are known as Rhode Islanders - and its capital is Providence.
# #  Along with Providence its most populous cities are Warwick and Cranston.
# #  The median household income is $54,619 and the governor is Lincoln Chafee.

 state =
   {
     state_name: "Rhode Island"
     abbreviation: "RI",
     population: 1_050_292,
     capital: "Providence",
     most_populous_cities: ["Providence", "Warwick", "Cranston"],
     median_income: 54_619,
     governor: "Lincoln Chafee"
   }

# _______________________________________________


#    Write an array and/or hash representation of the following data:

#  Patrick just bought a new laptop to take to his coding bootcamp. He chose an Apple
#  MacBook Air with a 256GB solid state drive. He chose 8GB of ram because that was the max allowed.
#  His MacBook also has a Retina display and an i7 processor from Intel. It came preloaded with
#  the following software: iPhoto, Safari, iMovie, and iMessage.


patricks_laptop =
  {
    brand: "Apple"
    model: "MacBook Air",
    storage: {
      size: 256,
      type: "SSD"
    },
    memory: 8,
    display: {
      type: "Retina",
      size: 13.3,
    },
    cpu: {
      manufacturer: "Intel",
      model: "i7"
    },
    software: ["iPhoto", "Safari", "iMovie", "iMessage"]
  }


# _______________________________________________

# Model the following data about Nick's dogs:

# Write an array and/or hash representation of the following data:

#  Nick has two dogs named Maple and Atlas. Maple, age 4, is a brown pitbull
#  whose favorite game is tug-o-war. Atlas, age 3, is a super energetic boxer whose
#  favorite game is fetch. They both love swimming in the lake.


nicks_dogs = [
  {
    name: "Maple",
    age: 4,
    description: "Brown",
    breed: "Pitbull",
    favorite_game: "Tug-o-war"
  }
  {
    name: "Atlas",
    age: 3,
    description: "Energetic",
    breed: "Boxer",
    favorite_game: "Fetch"
  }
]


# _______________________________________________

# Model the following data about a fictional restaurant.

# Write an array and/or hash representation of the following data:

# Nick's new favorite restaurant is Patrick's Pizza Palace. It is located
# at 716 Congress and last received a health score of 100! Nick's favorite
# meal at Patrick's Pizza Palace is mozarella sticks for the appetizer,
# chicken parmigiana for the entree and tiramisu for dessert. Kate's favorite
# meal combo is a calzone for an appetizer, a slice of pizza for the entree and a cannoli for dessert.
# Sometimes they go with Harsh, who is a vegetarian. He usually orders garlic knots, spaghetti &
# eggplant, and cheesecake.


favorite_meals = [
  {
    name: "Nick",
    appetizer: "mozarella sticks",
    entree: "chicken parmigiana",
    dessert: "tiramisu"
  },
  {
    name: "Kate",
    appetizer: "calzone",
    entree: "pizza",
    dessert: "cannoli"
  },
  {
    name: "Harsh",
    appetizer: "garlic knots",
    entree: "spaghetti and eggplant",
    dessert: "cheesecake"
  }
]



class Restaurant

  def initialize(name, location, healthscore=100)
    @name = name
    @location = location
    @healthscore = healthscore
  end


end

 class Customer < Restaurant

  def person(favorite_meals)
    p "Name: #{favorite_meals[:name]}"
  end


