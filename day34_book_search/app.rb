require "sinatra"
require "sinatra/reloader"
require "googlebooks"


get '/' do
    erb :index
end

post '/' do
    @books = GoogleBooks.search(params[:query])

    erb :result
 end

# post "/" do
#     @books = GoogleBooks.search(params[:query]).first
#     puts @books.authors
#     erb :index
# end