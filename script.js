// script.js
const students = [
  { name: "Emma", chemistryMarks: 90, biologyMarks: 90, dob: "12-05-2001" },
  { name: "Tom", chemistryMarks: 85, biologyMarks: 95, dob: "10-10-2001" },
  { name: "John", chemistryMarks: 80, biologyMarks: 90, dob: "12-05-2001" },
  { name: "Jane", chemistryMarks: 85, biologyMarks: 85, dob: "15-06-2002" },
  { name: "Oliver", chemistryMarks: 85, biologyMarks: 85, dob: "15-06-2002" },
];

// Sorting function based on the rules
students.sort((a, b) => {
  const totalA = a.chemistryMarks + a.biologyMarks;
  const totalB = b.chemistryMarks + b.biologyMarks;

  // First priority: Sort by total marks
  if (totalA !== totalB) {
      return totalB - totalA; // Highest total marks first
  }

  // Second priority: Sort by biology marks
  if (a.biologyMarks !== b.biologyMarks) {
      return b.biologyMarks - a.biologyMarks; // Highest biology marks first
  }

  // Third priority: Sort by date of birth (oldest first)
  if (a.dob !== b.dob) {
      return new Date(a.dob) - new Date(b.dob); // Earliest date of birth first
  }

  return 0;
});

// Populate the sorted list into the HTML
const list = document.getElementById('students-list');
students.forEach(student => {
  const listItem = document.createElement('li');
  listItem.textContent = `${student.name} - Total Marks: ${student.chemistryMarks + student.biologyMarks} - Biology Marks: ${student.biologyMarks} - DOB: ${student.dob}`;
  list.appendChild(listItem);
});
