# Write a program that, given a word, computes the scrabble score for that word. Do this using classes.

# game = Scrabble.new
# game.score "cabbage"
# # => 14

# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
# Letter Values:
# Letters 	Values
# A, E, I, O, U, L, N, R, S, T 	1
# D, G 	2
# B, C, M, P 	3
# F, H, V, W, Y 	4
# K 	5
# J, X 	8
# Q, Z 	10
require 'pry'

class Scrabble

    attr_accessor :letters

    def initialize
        @letters = {
            1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
            2 => ["D", "G"],
            3 => ["B", "C", "M", "P"],
            4 => ["F", "H", "V", "W", "Y"],
            5 => ["K"],
            8 =>["J", "X"],
            10 => ["Q", "Z"]
        }

    end #end initalize


    def score word
        total_score  = 0;
        #iterate over each character of the word 
        word.each_char do |c|
          c =  c.upcase
          #iterate over letters
          @letters.each do|key, value|
                if value.include?(c)
                    total_score += key
                end #end if
          end #end each letters
        end #end each word
        total_score
    end #end game

end #end scrabble

game = Scrabble.new
puts game.score "quixotic"