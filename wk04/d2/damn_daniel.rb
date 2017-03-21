require 'fileutils'
require 'pry'


loop do
  puts 'Daniel: What do you want?'
  user_input = gets
  user_input = user_input.chomp
  # binding.pry
  if user_input.empty?
    puts "Daniel: Fine. Be that way!"
  elsif user_input == user_input.upcase
    puts "Daniel: Woah, chill out!"
  elsif user_input[0..4] == "Bro, "
    l33t_sP34k = user_input[5..(user_input.length - 1)]
    l33t_sP34k = l33t_sP34k.tr('aeio','4310')
    puts "Daniel: #{l33t_sP34k}"
  elsif user_input[-1] == '?'
    puts "Daniel: Whatever."
  elsif user_input == "Goodbye"
    break
  else
    puts "Daniel: Sure."
  end
end
