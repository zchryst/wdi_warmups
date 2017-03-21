require 'pry'


class Dice

  def initialize
    @@roll
  end

  def self.roll num=1
    if num == 1
      @@roll = rand 1..6
    else
      @@roll = []
      num.times do
        @@roll << rand(1..6)
      end
    end
    "# = #{@@roll}"
  end

  

  def self.sum num
    self.roll num
    total = 0
    # binding.pry
    @@roll.each do |a|
      total+=a
    end
    "# = [#{@@roll}, #{total}]"
  end

end

binding.pry
