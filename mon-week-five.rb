# Is this a triangle?

# In Ruby, implement a function that accepts 3 integer values a, b, c.

def triangle? side1, side2, side3
    #  use the triangle inequality theorem, which states that the sum of 2 sides of a triangle must be greater than the third side. Therefore, all you have to do is add together each combination of 2 sides to see if it's greater than the third side.
    # (Thanks, internet)
    sides = Array.new [side1, side2, side3]
    sides.sort!
    sides[0] + sides[1] > sides[2]  

end

# The function should return true if a triangle can be built with the sides of given length and false in any other case.
# Tests:

puts triangle? 1, 1, 1 # => true
puts triangle? 4, 2, 3 # => true
puts triangle? 1, 2, 2 # => true
puts triangle? 5, 1, 2 # => false

# Bonus

# Instead of explicitly taking 3 parameters, make your function variadic.

puts "======VARIDAIC VERSION======="

def shape_variadic? *sides_lengths #this uses multiple args
    #  use the triangle inequality theorem, which states that the sum of 2 sides of a triangle must be greater than the third side. Therefore, all you have to do is add together each combination of 2 sides to see if it's greater than the third side.
    # Not really a triangle, but anyway...
    sides = Array.new [*sides_lengths]
    sides.sort!
    check_sides = sides[0..-2]
    total = 0
    check_sides.each do |el|
        total += el
    end 
    puts total
    total > sides[-1] 

end


puts shape_variadic? 10, 1, 2, 1, 2, 2, 3, 1 # => true
puts shape_variadic? 1, 1, 2, 1, 2, 200, 3, 1,6, 9 # => false