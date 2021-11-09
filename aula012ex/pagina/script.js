function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = '../imagens/fotodia.png'
        document.body.style.background = '#cebeb7'
        function paraColorChange() {
            document.getElementById('para').style.color = '#0000';
        }
        
    } else if (hora >= 12 && hora < 18) {
        img.src = '../imagens/fotomanha.png'
        document.body.style.background = '#fc7300'
    } else {
        img.src = '../imagens/fotonoite.png'
        document.body.style.background = '#191f30'
    }
}
