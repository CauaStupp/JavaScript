let num = [5, 4 ,8 ,2 ,1]
num.push(0)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(1)


if (pos ==  -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
    
