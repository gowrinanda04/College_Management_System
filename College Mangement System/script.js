let students = [];

const studentTable = document.getElementById("studentTable");
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const courseInput = document.getElementById("course");
const searchInput = document.getElementById("search");

function addStudent() {
  const name = nameInput.value.trim();
  const roll = rollInput.value.trim();
  const course = courseInput.value.trim();

  if (name && roll && course) {
    students.push({ name, roll, course });
    nameInput.value = "";
    rollInput.value = "";
    courseInput.value = "";
    renderTable();
  } else {
    alert("Please fill all fields.");
  }
}

function renderTable() {
  studentTable.innerHTML = "";
  const keyword = searchInput.value.toLowerCase();

  students.forEach((student, index) => {
    if (
      student.name.toLowerCase().includes(keyword) ||
      student.roll.toLowerCase().includes(keyword)
    ) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><img src="student.jpg" class="avatar" alt="avatar">${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      `;

      studentTable.appendChild(row);
    }
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}

function editStudent(index) {
  const student = students[index];
  nameInput.value = student.name;
  rollInput.value = student.roll;
  courseInput.value = student.course;

  students.splice(index, 1);
  renderTable();
}
