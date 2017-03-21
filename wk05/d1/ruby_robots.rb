require 'pry'

class Robot
  attr_reader :name


  def initialize
    @name = create_name
    @instruction_count = 0

    @mac_address = ""
    @mac_address << (1..6).map { "%0.2X"%rand(256) }.join(":")
  end

  def create_name
    @name = ""
    @name << (0...2).map { ('A'..'Z').to_a[rand(26)] }.join
    @name << (0...3).map { rand 0..9 }.join
  end

  def reset
    @name = create_name
  end

  def self.
    if (defined? instruction_count).nil?
      @instruction_count = 0
    else
      @instruction_count += 1
    end
  end


end



binding.pry
