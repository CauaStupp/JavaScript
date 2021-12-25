let num = document.querySelector('input#number')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div.res')
let valores = []


function numero(n) {
    if(Number(n) >= 1 && Number (n <= 100)) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(numero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('O Valor é invalido, ou já foi adicionado na lista!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione um valor antes de finalizar!')
    } else {
        let ele = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / ele
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${ele} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}