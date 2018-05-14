require "sinatra"
require "sinatra/reloader"
require 'sendgrid-ruby'
include SendGrid


get "/" do
    @name, @comments = params[:name], params[:comments]
    erb :index
    end
 
   
# post "/" do
#     puts params.inspect
#     from = Email.new(email:'oahmed103140@gmail.com')
#     to = Email.new(email:'oahmed103140@gmail.com')
#     subject = 'Sending with SendGrid is Fun'
#     content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
#     mail = Mail.new(from, subject, to, content)

#     sg = SendGrid::API.new(api_key:ENV['SENDGRID_API_KEY'])
#     response = sg.client.mail._('send').post(request_body: mail.to_json)
    # puts response.status_code
    # puts response.body
    # puts response.parsed_body
    # puts response.headers
        
    # redirect "/"
# end

post "/" do 
    puts params.inspect
    from = Email.new(email:'oahmed103140@gmail.com')
    to = Email.new(email:'oahmed103140@gmail.com')
    subject = params[:name]
    content = Content.new(type: 'text/plain', value:params[:comments] )
    mail = Mail.new(from, subject, to, content)
    
    sg = SendGrid::API.new(api_key:ENV['SENDGRID_API_KEY'])
    response = sg.client.mail._('send').post(request_body: mail.to_json)
    puts response.status_code
    puts response.body
    # puts response.parsed_body
    puts response.headers
    erb :index
    end