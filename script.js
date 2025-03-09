// script.js

function generateStudentInputs() {
    const numStudents = document.getElementById('numStudents').value;
    const studentInputs = document.getElementById('studentInputs');
    studentInputs.innerHTML = ''; // Clear previous inputs

    for (let i = 1; i <= numStudents; i++) {
        const newStudent = document.createElement('div');
        newStudent.className = 'student';
        newStudent.innerHTML = `
            <label for="name${i}">Name:</label>
            <input type="text" id="name${i}" class="name">
            <label for="subjects${i}">Number of Subjects:</label>
            <input type="number" id="subjects${i}" class="subjects" oninput="addMarksInputs(this)">
            <div class="marks"></div>
        `;
        studentInputs.appendChild(newStudent);
    }
}

function addMarksInputs(element) {
    const marksContainer = element.nextElementSibling;
    marksContainer.innerHTML = '';
    for (let i = 0; i < element.value; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Enter mark for subject ${i + 1}`;
        marksContainer.appendChild(input);
    }
}

function calculateMarks() {
    const studentElements = document.getElementsByClassName('student');
    const students = [];
    for (const studentElement of studentElements) {
        const name = studentElement.querySelector('.name').value;
        const marksElements = studentElement.querySelector('.marks').getElementsByTagName('input');
        const marks = Array.from(marksElements).map(input => parseFloat(input.value));
        const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
        students.push({ name, totalMarks });
    }

    // Find the highest scoring student
    const highestScoringStudent = students.reduce((prev, current) => (prev.totalMarks > current.totalMarks) ? prev : current);

    // Display results
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <h2>Results</h2>
        <p>${highestScoringStudent.name} scored the highest with ${highestScoringStudent.totalMarks} marks.</p>
        <h3>All Students' Scores:</h3>
        <ul>
            ${students.map(student => `<li>${student.name} scored ${student.totalMarks} marks</li>`).join('')}
        </ul>
    `;
}
