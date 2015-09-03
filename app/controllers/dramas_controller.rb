class DramasController < ApplicationController
  def index
     @dramas = Drama.where.not(poster_file_name: nil).limit(20)
     @genres = Genre.limit(10)
  end
end
