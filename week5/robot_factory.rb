# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up. The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot. Names typically take the format of things like "BX777" or "SD234".
# Example:

# robot1 = Robot.new
# puts robot1.name
# => "BX777"
# robot2 = Robot.new
# puts robot2.name
# => "SD234"
# puts robot2.name
# => "SD234"


class Robot
    attr_accessor :name, :instructions, :time_born, :total_age

    def initialize (instructions=0, time_born=Time.now, total_age=Time.now)
        @instructions = instructions
        @time_born = time_born
        @total_age = total_age
    end

    def name
        add_count
        random_name
        
    end

    def random_name 
        letters =  ('A'..'Z').to_a
        numbers = ('0'.. '9').to_a
        @name = "#{randomSelection(letters) * 2}" + "#{randomSelection(numbers)*3}"
    
    end

    def randomSelection (array)
        array [rand array.length]
     end
    
    def reset
        @time_born = Time.now
        add_count
        name = random_name
    end 

    def add_count
        @instructions += 1
    end

    def instruction_count
        self.instructions
    end

    def timer
        "I was rebooted #{Time.now - self.time_born} seconds ago. I was born #{Time.now - self.total_age} seconds ago." 
    end 
   


end #end robot

puts "====Creating New Robot====="
robot1 = Robot.new
robot1.name 
puts robot1.name

puts "====Resetting Robot======"
robot1.reset
puts robot1.name

puts "=====Fire Extinguishger===="
puts robot1.instruction_count

puts "=====Time Watch====="
sleep(3)
puts robot1.timer

robot1.reset
sleep(8)
puts robot1.timer

# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.

# If I say:

# robot3 = Robot.new
# puts robot3.name
# => "RF629"
# robot3.reset
# puts robot3.name
# => "ZC532"

# Bonus: fire_extinguisher
# Counters 1234

# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away. For every action our robot takes, we should keep track of it.

# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count
# => 5

# Robot Time watch

# Number of instructions is important, but so is the total age of the robot.

# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"
# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"