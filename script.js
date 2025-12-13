let texteEnCours = '';

function updateDisplay() {
    document.getElementById('resultat').textContent = texteEnCours;
}

function taper_lettre_signe(taper) {
    texteEnCours += taper;
    updateDisplay();
}

function taper_espace() {
    texteEnCours += ' ';
    updateDisplay();
}

function supprimerDerniereLettre() {
    texteEnCours = texteEnCours.slice(0, -1);
    updateDisplay();
}


const AZERTY = [
    ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
    ["W", "X", "C", "V", "B", "N", ",", ";", ":", "?"]
];

const QWERTY = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ":"],
    ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"]
];

let currentLayout = AZERTY;

// Générer le clavier
function renderKeyboard() {
    const keyboard = document.getElementById("keyboard");
    keyboard.innerHTML = "";

    currentLayout.forEach(rowLetters => {
        const row = document.createElement("div");
        row.className = "row";

        rowLetters.forEach(letter => {
            const btn = document.createElement("button");
            btn.className = "key";
            btn.textContent = letter;
            btn.onclick = () => {
                taper_lettre_signe(letter);
            };
            row.appendChild(btn);
        });

        keyboard.appendChild(row);
    });

    // Ligne espace et supprimer la derniere lettre
    const lastRow = document.createElement("div");
    lastRow.className = "row";

    const spaceBtn = document.createElement("button");
    spaceBtn.className = "key space";
    spaceBtn.textContent = "ESP";
    spaceBtn.onclick = () => {
        taper_espace();
    };

    const delBtn = document.createElement("button");
    delBtn.className = "key del";
    delBtn.textContent = "←";
    delBtn.onclick = () => {
        supprimerDerniereLettre();
    };

    lastRow.appendChild(spaceBtn);
    lastRow.appendChild(delBtn);
    keyboard.appendChild(lastRow);
}

// Switcher dans les deux claviers AZERTY QWERTY
document.getElementById("switch-btn").onclick = () => {
    if (currentLayout === AZERTY) {
        currentLayout = QWERTY;
        document.getElementById("switch-btn").textContent = "QWERTY";
    } else {
        currentLayout = AZERTY;
        document.getElementById("switch-btn").textContent = "AZERTY";
    }
    renderKeyboard();
};


renderKeyboard();
updateDisplay();
