require "httparty"
# require "./chuck"
require_relative "./chuck.rb"

# Check to see if only one argument after the file_name
if ARGV.length == 1
    # If entered argument is 'help', execute the help method of the ChuckJokes class in the chuck.rb file
    if ARGV[0] == 'help'
        puts ChuckJokes.new.help
    # If entered argument is a number, execute the 'get_joke_by_id' method of the ChuckJokes class in the chuck.rb file
    elsif ARGV[0].to_i != 0
        puts ChuckJokes.new.get_joke_by_id(ARGV[0].to_i)
    # If entered argument is 'random', execute the random method of the ChuckJokes class in the chuck.rb file
    elsif ARGV[0] == 'random'
        puts ChuckJokes.new.random
    else
        puts "Invalid Arguments! Type 'ruby chuck.rb help' for more information".colorize(:red) 
    end
# Check to see if two arguments after the file_name
elsif ARGV.length == 2
    # If entered arguments are both words, execute the 'replace_name' method of the ChuckJokes class in the chuck.rb file
    if ARGV[0].to_i == 0 && ARGV[1].to_i == 0 
        str = [ARGV[0],ARGV[1]].join(" ")
        puts ChuckJokes.new.replace_name(str)
    elsif ARGV[0].to_i != 0 && ARGV[1].to_i != 0 
        puts "Invalid Arguments! Type 'ruby chuck.rb help' for more information".colorize(:red) 
    end

else
    puts "Invalid Arguments! Type 'ruby chuck.rb help' for more information".colorize(:red)
end

