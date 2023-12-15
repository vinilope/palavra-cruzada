const tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '#a', 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '#q', 'u', 'a', 'd', 'c', 'o', '#r', 'e',],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'd', 0, 0, 'a', 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, '#d', 'm', 'a',],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '#t', 0, 0, 0, 'e', 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'h', 0, 0, '#c', 's', 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, 0, 0, 's', 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'e', 0, 0, 0, 'b', 0, 0, 0, 0,],
    [0, 0, 0, 0, '#m', 0, 0, 0, 0, 0, 0, 'a', 0, 0, 0, 'u', 0, 0, 0, 0,],
    [0, 0, 0, '#r', 'e', 'g', '#i', 's', 't', 'r', 'a', 'd', 'o', 'r', 'e', 's', 0, 0, 0, 0,],
    [0, 0, 0, 0, 'm', 0, '7', 0, 0, 0, 0, 's', 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 'o', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 'r', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, '#i', '5', 0, 0, 0, '#c', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, '#u', 0, 0, 'a', 0, 0, 0, 0, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 'l', 0, 0, '#d', 'a', 't', 'a', 'b', 'u', 's', 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    ['#c', 'a', 'c', 'h', 'e', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 'm', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, '#d', 'u', 'a', 'l', 'c', 'o', 'r', '#e', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 's', 0, 0, 0, 0, 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 's', 0, 0, 0, 0, 'r', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, '#f', 'l', 'a', 's', 'h', 0, '#r', 'o', 'm', 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 'm', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let numeroDica = 0;
for (let y = 0; y < tabuleiro.length; y++) {
    for (let x = 0; x < tabuleiro[0].length; x++) {

        let tamanho = tabuleiro[y][x].length

        if (tamanho == 2) {
            // Inicio da palavra
            numeroDica += 1;
            container_tabuleiro.innerHTML += `
                <div id="div${[x,y]}" class="naoVazio">
                    <input id="inp${[x,y]}" onkeyup="guardarLetra(${[x,y]})" maxlength="1">
                    <span class="numero">${numeroDica}</span>
                </div> `;
        } else if (tamanho == 1) {
            // Letra
            container_tabuleiro.innerHTML += `
                <div id="div${[x,y]}" class="naoVazio">
                    <input id="inp${[x,y]}" onkeyup="guardarLetra(${[x,y]})" maxlength="1">
                </div>`
        } else {
            // Não é letra
            container_tabuleiro.innerHTML += `<div class="vazio"> </div>`
        }
    }
}

const palavras = [
    {
        "palavra": "addressbus",
        "pos": [[15, 0], [15, 1], [15, 2], [15, 3], [15, 4], [15, 5], [15, 6], [15, 7], [15, 8], [15, 9]]
    },
    {
        "palavra": "quadcore",
        "pos": [[12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1]]
    },
    {
        "palavra": "ram",
        "pos": [[18, 1], [18, 2], [18, 3]]
    },
    {
        "palavra": "dma",
        "pos": [[17, 3], [18, 3], [19, 3]]
    },
    {
        "palavra": "threads",
        "pos": [[11, 4], [11, 5], [11, 6], [11, 7], [11, 8], [11, 9], [11, 10]]
    },
    {
        "palavra": "cs",
        "pos": [[14, 5], [15, 5]]
    },
    {
        "palavra": "memoriademassa",
        "pos": [[4, 8], [4, 9], [4, 10], [4, 11], [4, 12], [4, 13], [4, 14], [4, 15], [4, 16], [4, 17], [4, 18], [4, 19], [4, 20], [4, 21]]
    },
    {
        "palavra": "registradores",
        "pos": [[3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [12, 9], [13, 9], [14, 9], [15, 9]]
    },
    {
        "palavra": "i7",
        "pos": [[6, 9], [6, 10]]
    },
    {
        "palavra": "i5",
        "pos": [[4, 13], [5, 13]]
    },
    {
        "palavra": "cpu",
        "pos": [[9, 13], [9, 14], [9, 15]]
    },
    {
        "palavra": "ula",
        "pos": [[1, 14], [1, 15], [1, 16]]
    },
    {
        "palavra": "databus",
        "pos": [[4, 15], [5, 15], [6, 15], [7, 15], [8, 15], [9, 15], [10, 15]]
    },
    {
        "palavra": "cache",
        "pos": [[0, 16], [1, 16], [2, 16], [3, 16], [4, 16]]
    },
    {
        "palavra": "dualcore",
        "pos": [[2, 18], [3, 18], [4, 18], [5, 18], [6, 18], [7, 18], [8, 18], [9, 18]]
    },
    {
        "palavra": "eprom",
        "pos": [[9, 18], [9, 19], [9, 20], [9, 21], [9, 22]]
    },
    {
        "palavra": "flash",
        "pos": [[2, 21], [3, 21], [4, 21], [5, 21], [6, 21]]
    },
    {
        "palavra": "rom",
        "pos": [[8, 21], [9, 21], [10, 21]]
    }
]

const respostas = [];

for (let y = 0; y < 23; y++) {
    const linha = []
    for (let x = 0; x < 20; x++) {
        linha.push(0)
    }
    respostas.push(linha)
}

const palavrasAcertadas = [];

function guardarLetra(x, y) {
    const letraUsuario = document.getElementById(`inp${[x,y]}`).value.toLowerCase();
    respostas[y][x] = letraUsuario;

    let palavraVerificada = verificarPalavra(x, y)

    if (palavraVerificada.finalizou) {
        palavrasAcertadas.push(palavraVerificada.palavra)
        bloquearInputs(x, y, palavraVerificada.id)
        verificarGanhou()
    }
}

function verificarPalavra(x, y) {
    let palavraEncontrada = encontrarPalavraPelaPosicao(x, y)

    let id = palavraEncontrada.id;
    let palavra = palavraEncontrada.palavra;
    let pos = palavraEncontrada.pos;

    let finalizouPalavra = true
    
    for (let i = 0; i < pos.length; i++) {
        let x = pos[i][0]
        let y = pos[i][1]

        if (respostas[y][x] != palavra[i]) {
            finalizouPalavra = false;
            break;
        }
    }

    return {
        "id": id,
        "finalizou": finalizouPalavra,
        "palavra": palavra
    };
}

function encontrarPalavraPelaPosicao(x, y) {
    for (let i = 0; i < palavras.length; i++) {
        for (let n = 0; n < palavras[i].pos.length; n++) {
            if (x == palavras[i].pos[n][0] && y == palavras[i].pos[n][1]) {
                return {
                    "id": i+1,
                    "palavra": palavras[i].palavra,
                    "pos": palavras[i].pos
                }
            }
        }
    }
}

function bloquearInputs(x, y, id) {
    let pos = encontrarPalavraPelaPosicao(x, y).pos;
    
    for (let i = 0; i < pos.length; i++) {
        const x = pos[i][0];
        const y = pos[i][1];
        
        let div = document.getElementById(`div${[x, y]}`)
        div.innerHTML = respostas[y][x]
    }
    
    let dica = document.getElementById(`dica${id}`)
    dica.classList.add('respondido')
}

function verificarGanhou() {
    if (palavras.length == palavrasAcertadas.length) {
        dialogoVenceu.showModal()
    }
}