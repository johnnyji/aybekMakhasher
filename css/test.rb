class BankAccount

	def initialize(name)
		@transactions = []
		@balance = 0
	end

	def deposit
		puts "How much would you like to deposit?"
		amount = gets.chomp
		@balance += amount.to_f
		puts "You've deposited #{amount}"
	end

	def withdrawl
		puts = "How much would you like to withdrawl?"
		amount = gets.chomp
		@balance -= amount.to_f
		puts "You took out #{amount}"
	end

	def show_balance
		puts "Your remaining balance is #{@balance}"
	end

end

bank_account = BankAccount.new("Johnny")

bank_account.deposit
bank_account.withdrawl
bank_account.show_balance