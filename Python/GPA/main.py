sub_list = ["Bangla", "English", "Math", "Science"]

total = 0
for sub in sub_list:
    mark = int(input(f"Please input your mark in {sub}: "))
    total += mark
avarage = total / len(sub_list)

if avarage <= 40:
    print("You Failed.")
elif avarage > 40 and avarage <= 60:
    print("You got D.")
elif avarage > 60 and avarage <= 70:
    print("You got C.")
elif avarage > 70 and avarage <= 80:
    print("You got B.")
elif avarage > 80 and avarage <= 90:
    print("You got A.")
elif avarage > 90 and avarage <= 100:
    print("You got A+.")
else:
    print("Avarage Shouldn't be more than 100. :(")
