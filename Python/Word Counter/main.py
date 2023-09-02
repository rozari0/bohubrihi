search_words = ["Python", "C", "OOP", "Hello", "Java"]
for index in range(len(search_words)):
    search_words[index] = search_words[index].lower()

temp_list = {}
for word in search_words:
    temp_list[word.lower()] = 0


with open("input.txt", "r") as file:
    for line in file.readlines():
        if line.strip().rstrip().lower() in search_words:
            temp_list[line.strip().rstrip().lower()] += 1


for word in temp_list:
    print(f"{word.capitalize()} -> {temp_list.get(word)}")
