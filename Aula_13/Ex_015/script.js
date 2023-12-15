function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtAno');
    var res = document.querySelector('div#res');
    if((fAno.value == 0) || (fAno.value > ano)){
        alert('ERRO. Verifique os dados e tente novamente.');
    }
    else{
        var fSex = document.getElementsByName('radSex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fSex[0].checked){
            genero = 'homem';
            if(idade >= 0 && idade < 13){
                img.setAttribute('src', 'criancaM.png');
            }
            else if(idade < 21){
                img.setAttribute('src', 'jovemM.png');
            }
            else if(idade < 55){
                img.setAttribute('src', 'adultoM.png');
            }
            else{
                img.setAttribute('src', 'idosoM.png');
            }
        }
        else if(fSex[1].checked){
            genero = 'mulher';
            if(idade >= 0 && idade < 13){
                img.setAttribute('src', 'criancaF.png');
            }
            else if(idade < 21){
                img.setAttribute('src', 'jovemF.png');
            }
            else if(idade < 55){
                img.setAttribute('src', 'adultoF.png');
            }
            else{
                img.setAttribute('src', 'idosoF.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.width = '550px';
        res.appendChild(img);
    }
}