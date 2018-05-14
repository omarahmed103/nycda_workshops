require "sinatra"
require "sinatra/activerecord"
require "sinatra/flash"
require "./models"
enable :sessions

set :database, "sqlite3:app.db"

get '/' do
    erb :index
  end

get '/admin' do

end