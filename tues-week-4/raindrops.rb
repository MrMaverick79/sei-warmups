# Raindrops

# Write a method in Ruby called raindrops that takes a number and returns a string based on whether or not the number has a factor of 3, 5 or 7 (or some combination of the three).

#     If the number is divisible by 3, the method returns "Pling".
#     If the number is divisible by 5, the method returns "Plang".
#     If the number is divisible by 7, the method returns "Plong".
#     If the number is divisible by more than one of the above, the method returns their sounds combined.
#     If the number is not divisible by 3, 5 or 7, the method just returns the number.

# Examples:

# raindrops(28) # => "Plong"
# raindrops(35) # => "PlangPlong"
# raindrops(26) # => "26"


def raindrops (num)
    final_string = "" #this will be the final string

    if num % 3 == 0 #check each of the conditions
        final_string += "Pling" #add to final string
    end

    if num % 5 == 0
        final_string += "Plang"   
    end

    if num % 7 == 0
        final_string += "Plong"
    elsif final_string == ""
        return num #returns num if it does not meet the conditions.
    end
    
    final_string
end #end raindrops


##testing 
puts raindrops(30) #=> "PlingPlang"
puts raindrops(28) # => "Plong"
puts raindrops(35) # => "PlangPlong"
puts raindrops(26) # => "26"