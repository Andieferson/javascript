function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value)> ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'guri.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'rapaz.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else {
                //idoso
                img.setAttribute('src', 'senhor.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } 
            

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'guria.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'moça.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else {
                //idoso
                img.setAttribute('src', 'senhora.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }

}