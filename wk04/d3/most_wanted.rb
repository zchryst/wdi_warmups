require 'pry'
require 'fileutils'

wanted_file = File.open('source_file_txt.txt')

file_array = []
wanted_file.each do |line|
  file_array.push(line.chomp.split(','))
end

keys = file_array.shift
keys.shift

wanted_hash = {}
file_array.each do |wanted|
  wanted_hash[wanted[0]] = []
end

file_array.each do |wanted|
  wanted_hash[wanted[0]].push(Hash[keys.zip wanted[1..-1]])
end

binding.pry

wanted_file.close
