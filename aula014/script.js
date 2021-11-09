function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Os Dados Não Foram Prenchidos Corretamente!')
    } else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/bebe-macho.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', './imagens/jovem-macho.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/adulto-macho.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso-macho.png')
            }
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/bebe-femea.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/jovem-femea.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/adulto-femea.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso-femea.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }


}