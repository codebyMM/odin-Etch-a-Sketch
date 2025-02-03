const container = document.querySelector('.container');
const btnCreate = document.querySelector('#createBtn');
const btnReset = document.querySelector("#reset");

let btnOne = document.querySelector('#one');
let btnTwo = document.querySelector('#two');
let btnThree = document.querySelector('#three');

let total = 16;
let bgColor = 1;
let colorArray = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#2ECC71", "#E74C3C", "#1ABC9C",
    "#D35400", "#2980B9", "#C0392B", "#16A085", "#F39C12", "#27AE60", "#8E44AD", "#F4D03F",
    "#5DADE2", "#D98880", "#A569BD", "#58D68D", "#F7DC6F", "#DC7633", "#AED6F1", "#ABEBC6",
    "#F1948A", "#BB8FCE", "#7DCEA0", "#F8C471", "#AAB7B8", "#EB984E", "#D7BDE2", "#7FB3D5",
    "#A3E4D7", "#F5B7B1", "#D2B4DE", "#82E0AA", "#F9E79F", "#D5DBDB", "#7D3C98", "#C39BD3",
    "#73C6B6", "#F5CBA7", "#D0ECE7", "#EBDEF0", "#FAD7A0", "#F4ECF7", "#1F618D", "#D4AC0D",
    "#F8F9F9", "#212F3D", "#839192", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
    "#00FFFF", "#800000", "#808000", "#008000", "#800080", "#808080", "#C0C0C0", "#FFA500",
    "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#DC143C",
    "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#006400", "#BDB76B", "#8B008B",
    "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F",
    "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#1E90FF", "#B22222", "#FFFAF0",
    "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF"
];

function pickColor(pick) {
    let number = Math.floor(Math.random() * colorArray.length);
    let color = '';
    if (pick == 1) {
        color = '#1266b8';
    } else if (pick == 2) {
        color = '#b81233';
    } else {
        color = colorArray[number];
    }
    return color;
}

function createGrid(size) {
    const containerWidth = 600;
    const squereSize = containerWidth / size;
    for (let i = 1; i <= size; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');
        gridRow.classList.add('item');
        for (let j = 1; j <= size; j++) {
            let gridCol = document.createElement('div');
            gridCol.classList.add('column');
            gridCol.classList.add('item');
            gridCol.style.width = `${squereSize}px`;
            gridCol.style.height = `${squereSize}px`;
            gridRow.appendChild(gridCol);
            gridCol.addEventListener('mouseover', (e) => {
                e.target.style.background = pickColor(bgColor);
            });
        }
        container.appendChild(gridRow);
    }
}
btnOne.addEventListener('click', () => {
    bgColor = 1;
});
btnTwo.addEventListener('click', () => {
    bgColor = 2;
});
btnThree.addEventListener('click', () => {
    bgColor = 3;
});
btnReset.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid(16);
});
btnCreate.addEventListener("click", (e) => {
    total = prompt('Pick Number for Grid Size', 16);
    if (total > 100) {
        return alert('Pick Number From 16 to 100');
        createGrid(total);
    } else if (total < 16) {
        return alert('Start from 16!');
        createGrid(total);
    } else {
        container.innerHTML = "";
        createGrid(total);
    }
});
createGrid(total);