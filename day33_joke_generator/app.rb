require "sinatra"
require "sinatra/reloader"
require "rubyjokes"
# require "unirest"



def generate_jokes(value)
    joke = RubyJoke.new
    if(value == "nerdy")
       return joke.get_joke({limitTo: ['nerdy']})
    elsif (value == "explicit")
        return joke.get_joke({limitTo: ['explicit']})
    elsif(value == "surprise")
        return joke.get_joke({limitTo: ['nerdy','explicit'].sample})
    else
        return "Try some other time"
    end
end


get '/' do
    "Hello world!"
end



get '/jokes/:type' do
    value = params[:type]
    generate_jokes(value)
end

