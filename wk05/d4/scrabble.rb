require 'pry'

class Scrabble

  @@values = {
    1 => 'aeioulnrst'.split(''),
    2 => ['d', 'g'],
    3 => 'bcmp'.split(''),
    4 => 'fhvwy'.split(''),
    5 => 'k',
    8 => ['j', 'x'],
    10 => ['q', 'z']
  }

  def self.score word, double_letter = ''
    score = 0
    word_array = word.split('')
    word_array.each do |letter|
      @@values.each do |points, letters|
        if letters.include? letter
          score += points
        end
      end
    end
    score
  end










end

binding.pry
