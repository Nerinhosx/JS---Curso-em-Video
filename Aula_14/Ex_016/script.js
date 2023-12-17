function contar(){
    var ini = document.getElementById('txtIn');
    var end = document.getElementById('txtEnd');
    var pas = document.getElementById('txtPas');
    var result = document.getElementById('res');
    if((ini.value == "") || (end.value == "") || (pas.value == "")){
        result.innerHTML = 'Impossível contar: Campo(s) vazio(s) detectado(s).';
    } else{
        result.innerHTML = 'Contando: ';
        let i = Number(ini.value);
        let e = Number(end.value);
        let p = Number(pas.value);
        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1.');
            p = 1;
        }
        if(i > p){
            //Contagem crescente
            for(var c = i; c >= e; c -= p){
                result.innerHTML += `${c} \u{1F449}`;
            }
        } else{
            //Contagem regressiva
            for(var c = i; c <= e; c += p){
                result.innerHTML += `${c} \u{1F449}`;
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}