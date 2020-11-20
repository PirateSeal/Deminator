(() => {
    function createGridConfig() {
        let sizes = document.createElement('div');

        let x = document.createElement('INPUT');
        x.setAttribute('id', 'x');
        x.setAttribute('type', 'number');

        let y = document.createElement('INPUT');
        y.setAttribute('id', 'y');
        y.setAttribute('type', 'number');

        sizes.appendChild(x);
        sizes.appendChild(y);

        return sizes;
    }

    function createSubmitButton() {
        let b = document.createElement('button');
        b.appendChild(document.createTextNode('GO'));
        b.addEventListener('click', () => {
            console.log('SUBMIT');
        });
        return b;
    }

    function createDifficulties() {
        let select = document.createElement('SELECT');
        select.setAttribute('id', 'difficulty');

        let eOpt = document.createElement('option');
        eOpt.appendChild(document.createTextNode('Easy'));
        eOpt.value = '25';
        select.appendChild(eOpt);

        let mOpt = document.createElement('option');
        mOpt.appendChild(document.createTextNode('Medium'));
        select.value = '50';
        select.appendChild(mOpt);

        let hOpt = document.createElement('option');
        hOpt.appendChild(document.createTextNode('Hard'));
        hOpt.value = '75';
        select.appendChild(hOpt);
        return select;
    }
    function createConfig() {
        let config = document.createElement('div');
        config.setAttribute('id', 'config');

        config.appendChild(createDifficulties());
        config.appendChild(createGridConfig());
        config.appendChild(createSubmitButton());
        return config;
    }
    const createColumn = (row) => {
        let button = document.createElement('button');
        button.appendChild(document.createTextNode('⬛'));
        let col = document.createElement('td');
        col.appendChild(button);
        row.appendChild(col);
        return col;
    };
    const createRow = () => document.createElement('tr');

    const lose = () => {
        alert('YOU LOOSE');
        //TODO on click bomb ded && afficher toutes bombes
    };

    const win = () => {
        //TODO if toutes td dont td.id !== bomb clickées alors win
    };

    function revealEmpty(col) {
        console.log(col);
        col.style.backgroudColor = 'green';
    }

    const createGrid = (x, y, bombNumber) => {
        let bombs = bombNumber;
        let emptyBoxes = x * y - bombNumber;
        let putBomb;
        let table = document.createElement('table');
        for (let j = 0; j < y; j++) {
            let row = createRow();
            table.appendChild(row);
            for (let i = 0; i < x; i++) {
                putBomb = Math.floor(Math.random() * 100) <= 25 && bombs > 0;

                let col = createColumn(row);
                if (putBomb) {
                    bombs--;
                    col.setAttribute('id', 'bomb');
                    col.addEventListener(
                        'click',
                        () => lose() //TODO ajouter detecteur de click si bombe
                    );
                } else {
                    col.setAttribute('id', 'vide');
                    col.addEventListener('click', () => {
                        revealEmpty(col);
                    });
                }
            }
        }
        return table;
    };

    let app = document.getElementById('grid');

    app.appendChild(createConfig());
    app.appendChild(createGrid(10, 10, 20));
})();
