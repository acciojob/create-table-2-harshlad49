function createTable() {
  // Prompt for number of rows
  let rows = prompt("Input number of rows");
  let cols = prompt("Input number of columns");

  // Convert to integers
  rows = parseInt(rows);
  cols = parseInt(cols);

  // Validate input
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Invalid input. Please enter positive numbers only.");
    return;
  }

  // Get reference to the table
  const table = document.getElementById("myTable");

  // Clear previous table content
  table.innerHTML = "";

  // Create table rows and columns
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

