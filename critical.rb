# Find all the restaurants with ratings 8 and above.

require 'rest-client'

def get_restaurants
  response = RestClient.get("critics.api.mks.io/restaurants")
  ratings = JSON.parse(response)
end

def ratings_above_8
  ratings.select do |r|
    if r["rating"].to_i >= 8
      puts "#{r["rating"]} - #{r["venue"]}"
    end
  end
end


#___________________________________________________
# Find all the restaurants that have the word "Austin" in it (case-insensitive).

def restaurants_with_austin
  ratings.select do |r|
    if r["venue"].downcase.include? "austin"
      puts "#{r["venue"]}"
    end
  end
end


#___________________________________________________

# Find the top 3 movie genres with the most ratings.

def movie_data
  response = RestClient.get("critics.api.mks.io/movie-genres")
  JSON.parse(response)
end




def top_movies
  ratings = movie_data
  sorted_ratings = ratings.sort_by {|h| [ h['rating'].to_i]}
  awesome = sorted_ratings.last(3)

# use each instead - used for its side effects
  awesome.select! do |r|
    puts "#{r["genre"]} - #{r["rating"]} reviews"
  end
end

#___________________________________________________

def top_genres_by_averages

  genre_list = movie_data

  genres = genre_list.map {|x| x["genre"]}.uniq


  averages = genres.map do |x|
    ratings = genre_list.select {|y| y["genre"].to_i == x.to_i}
    average = ratings.inject(:+)/ratings.size
    {x => average}

  end
end

#___________________________________________________

def cheezer
  response = RestClient.get("critics.api.mks.io/cheeses")
  cheezy = JSON.parse(response)

  cheezy_sorted = cheezy.sort_by {|h| [h['id'].to_i]}

  cheezy_sorted.select do |r|
    puts "Cheese#{r["id"]}: #{r["cheese"]} -- #{r["reviewer"]}"
  end

end

