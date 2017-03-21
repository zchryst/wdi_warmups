require 'pry'



class Say

  def initialize number
    @number = number
    @ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    @tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    @special = ['ten', 'eleven', 'twelve', 'thirteen', 'fifteen']
  end

  def in_english
    if @number == 10
      english = @special[0]
    elsif @number == 11
      english = @special[1]
    elsif @number == 12
      english = @special[2]
    elsif @number == 13
      english = @special[3]
    elsif @number == 15
      english = @special[4]
    else
      num_array = @number.to_s.split''
      english_array = []
      if num_array.count == 2 && num_array[0].to_i != 1
        english_array.push(@tens[num_array[0].to_i - 2])
      elsif num_array.count == 2 && num_array[0].to_i == 1
        english = "#{@ones[num_array.last.to_i - 1]}teen"
        return english
      end
      english_array.push(@ones[num_array.last.to_i - 1])
      english = english_array.join('-')
    end
    return english
  end

end

binding.pry
