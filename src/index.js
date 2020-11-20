(() => {
    const createColumn = (row, putBomb) => {
        let button = document.createElement('button');
        button.appendChild(document.createTextNode('⬛'));
        let col = document.createElement("td")
        col.appendChild(button)
        row.appendChild(col);
        return col;
    }
    const createRow = () => document.createElement("tr")

    const lose = () => {
        //TODO on click bomb ded && afficher toutes bombes
    }

    const win = () => {
        //TODO if toutes td dont td.id !== bomb clickées alors win
    }

    const createGrid = (x, y, bombNumber) => {
        let bombs = bombNumber
        let putBomb
        let table = document.createElement("table")
        for (let j = 0; j < y; j++) {
            let row = createRow();
            table.appendChild(row)
            for (let i = 0; i < x; i++) {
                putBomb = (Math.floor(Math.random() * 100) <= 25 && bombs > 0);
                if (putBomb) bombs--

                let col = createColumn(row, putBomb);
                if (putBomb) col.setAttribute('id', 'bomb')
                col.addEventListener('click', () => {
                    //TODO ajouter detecteur de click si bombe
                    // if tr.id === bomb alors lose()
                })
            }
        }
        return table
    }

    let app = document.getElementById('grid');

    app.appendChild(createGrid(10, 10, 20));
})();
