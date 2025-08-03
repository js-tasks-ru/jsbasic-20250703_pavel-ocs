function highlight(table) {

    for (let y = 1; y < table.rows.length; y++) {
        let row = table.rows[y];
        for (let x = 0; x < row.cells.length; x++) {
            let cell = table.rows[y].cells[x];

            if (cell.textContent === 'm') {
                row.classList.add('male');
            }
            if (cell.textContent === 'f') {
                row.classList.add('female');
            }

            let headCell = table.rows[0].cells[x];
            if (headCell.textContent === 'Status') {
                let statusCell = cell;
                if (statusCell.dataset.available === "true") {
                    row.classList.add("available");
                } else if (statusCell.dataset.available === "false") {
                    row.classList.add("unavailable");
                } else {
                    row.setAttribute('hidden', '');
                }
            }

            if (headCell.textContent === 'Age') {
                let ageCell = cell;
                if (ageCell.textContent < 18) {
                    row.style.textDecoration = 'line-through';
                }
            }

        }

    }

}