function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    // var data = new Date()
    var hora = data.getHours()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        //BOM DIA!
        img.src='/imagens/fotomanha.png'
        document.body.style.background = ''
    } else if (hora >= 0 && hora <12){
        //BOM TARDE!
        img.src='/imagens/fototarde.png'
        document.body.style.background = ''
    } else {
        //BOM NOITE!
        img.src='/imagens/fotonoite.png'
        document.body.style.background = ''

    }
}