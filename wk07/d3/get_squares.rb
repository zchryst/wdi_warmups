require 'pry'

def get_squares numbers
  numbers = numbers.uniq.sort
  numbers.select { |x| Math.sqrt(x) % 1 == 0 }
end

binding.pry
