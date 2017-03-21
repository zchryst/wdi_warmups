require 'pry'

coffees = []

class Coffee
  attr_accessor :collected

  @@counter = 0

  def initialize type, sugar, size, name
    @type = type
    @sugar = "#{sugar}"
    @size = size
    @name = wrong_name name
    @ready_time = rand(2.0...5.0)
    @start_time = Time.new
    @@counter += 1
  end

  def to_s
    "#{@name}'s #{@type}, #{@size}, #{@sugar}"
  end

  def wrong_name name
    name[rand(name.length)] = ('a'..'z').to_a.sample
    name
  end

  def ready?
    if (Time.new - @start_time)/60 > @ready_time
      "#{@type} for #{@name}"
    else
      "#{(@ready_time - (Time.new - @start_time)/60).ceil} miuntes to go #{@name}"
    end
  end

  def self.get_count
    puts @@counter
  end



end

binding.pry
