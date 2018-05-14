class Emote
    # attr_reader :str
    public
    def initialize(str)
        @str = str
    end

    def happy()
        "#{ @str } 😀 "
    end

    def sad()
        "#{ @str } ☹️ " 
    end

    def laughing()
        "#{ @str } 😃 " 
    end

    def angry()
        "#{ @str } 😡 " 
    end

    def original()
       @str
    end
end

@hap = "I am very very happy"
@happ = Emote.new(@hap)
@sad = Emote.new("I am sad!")
@angr = Emote.new("I am angy")

puts @happ.happy()
puts @happ.original()

puts @sad.sad()
puts @sad.original()

puts @angr.angr()
