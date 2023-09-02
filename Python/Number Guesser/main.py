from random import randint

low = 1
high = 50


def play():
    limit = 5
    correct_answer = randint(low, high)
    # print(correct_answer)

    def playAgain():
        again = input("[r] - Play Again\n[q] - Quit Game!\n:- ")
        if again.lower() == "r":
            play()
        elif again.lower() == "q":
            exit()
        else:
            print("Wrong Input.")
            playAgain()

    while limit > 0:
        try:
            user_input = int(input("Input a number: "))
        except ValueError as e:
            print("Please Input a Number instead of String.")
            play()
        if user_input < correct_answer:
            print("Correct answer is greater!")
        elif user_input > correct_answer:
            print("Correct answer is smaller!")
        elif user_input == correct_answer:
            print("You win!")
            playAgain()
        limit -= 1
    print("You Lose!")
    playAgain()


if __name__ == "__main__":
    play()
