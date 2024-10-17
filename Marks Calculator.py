num_students = int(input("Enter the Number of Students: "))
students = []

for i in range(num_students):
    name = input(f"Enter the Name of Student {i + 1}: ")
    sub = int(input(f"Enter the Number of Subjects : "))
    marks = []

    for j in range(sub):
        mark = float(input(f"{name}, enter your Marks for Subject {j + 1}: "))
        marks.append(mark)

    total_marks = sum(marks)
    students.append((name, total_marks))
    print("\n")

# Compare scores
highest_scoring_student = max(students, key=lambda x: x[1])
print(f"{highest_scoring_student[0]} scored the highest with {highest_scoring_student[1]} marks.")

# Print scores for all students
print("\nScores of all students:")
for student in students:
    print(f"{student[0]} scored {student[1]} marks.")