let fields = [
    null,
    'circle',
    'circle',
    'circle',
    null,
    null,
    'cross',
    'cross',
    null,
];

function init(){
    render();
}

function render() {
    let content = document.getElementById('content');
    let table = '<table>';
    for (let i = 0; i < 3; i++) {
        table += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            table += '<td>';
            if (fields[index] === 'circle') {
                table += 'O';
            } else if (fields[index] === 'cross') {
                table += 'X';
            }
            table += '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    content.innerHTML = table;
}