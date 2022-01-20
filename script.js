function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '200px'
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.padding = '2%'
        if (fsex[0].checked){
            gênero = `Homem`
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancamasc.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem masc.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto.png')
            }else{
                img.setAttribute('src', 'velho.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancafem.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem fem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta.png')
            }else{
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }   res.appendChild(img)
}