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
                table += generateAnimatedCircleSVG();
            } else if (fields[index] === 'cross') {
                table += generateAnimatedCrossSVG();
            }
            table += '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    content.innerHTML = table;
}

function generateAnimatedCircleSVG() {
    const svgCode = `
        <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="25" fill="none" stroke="#00b0EF" stroke-width="5">
                <animate attributeName="r" from="0" to="25" dur="250ms" begin="0s" fill="freeze"/>
            </circle>
        </svg>
    `;
    return svgCode;
}

const svgHTML = generateAnimatedCircleSVG();
console.log(svgHTML);

function generateAnimatedCrossSVG() {
    const svgCode = `
        <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="10" x2="60" y2="60" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x1" from="10" to="0" dur="250ms" begin="0s" fill="freeze"/>
                <animate attributeName="y1" from="10" to="0" dur="250ms" begin="0s" fill="freeze"/>
                <animate attributeName="x2" from="60" to="70" dur="250ms" begin="0s" fill="freeze"/>
                <animate attributeName="y2" from="60" to="70" dur="250ms" begin="0s" fill="freeze"/>
            </line>
            <line x1="60" y1="10" x2="10" y2="60" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x1" from="60" to="70" dur="250ms" begin="0s" fill="freeze"/>
                <animate attributeName="y1" from="10" to="0" dur="250ms" begin="0s" fill="freeze"/>
                <animate attributeName="x2" from="10" to="0" dur="250ms" begin="0s" fill="freeze"/>
                <animate attributeName="y2" from="60" to="70" dur="250ms" begin="0s" fill="freeze"/>
            </line>
        </svg>
    `;
    return svgCode;
}

const cross = generateAnimatedCrossSVG();
console.log(svgHTML);

