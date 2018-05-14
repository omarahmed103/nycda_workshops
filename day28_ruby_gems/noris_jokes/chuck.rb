require "httparty"

class ChuckJokes
    def initialize()
        @response = HTTParty.get("http://api.icndb.com/jokes")
        # puts @response["value"]["joke"]
    end
    # puts @response
    def help()
        puts "Chuck Norris is not easy to understand. Use Google to learn more about him"
    end
  
    def get_joke_by_id(id)
        # response = HTTParty.get("http://api.icndb.com/jokes")
        @id = id.to_i
        return @response["value"][@id]["joke"]
    end
  
    def replace_name(name)
        @name = name.to_s
        rand = rand(603)
        respond = @response["value"][rand]["joke"] 
        respond ["Chuck Norris"] = @name
        return respond
        
    end
  
    def random()
        # random = HTTParty.get("http://api.icndb.com/jokes/random")
        rand = rand(603)
        puts @response["value"][rand]["joke"]
    end
  end
  
#   cj = ChuckJokes.new()

#     cj.random()
#     puts cj.replace_name("Omar")
#    puts cj.get_joke_by_id(528)
# for arg in ARGV
#     puts arg
#  end

    