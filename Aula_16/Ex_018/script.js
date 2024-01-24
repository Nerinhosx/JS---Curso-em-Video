let num = document.querySelector('input#txtN');
let seletor = document.querySelector('select#selNum');
let res = document.querySelector('div#res');
let val = [];

function isNum(n){
    if((Number(n) >= 1) && (Number(n) <= 100)){
        return true;
    } else{
        return false;
    }
}

function inList(n){
    if(val.indexOf(Number(n)) == -1){
        return true;
    } else{
        return false;
    }
}

function adicionar(){
    res.innerHTML = null;
    if((isNum(num.value)) && (inList(num.value)) && num.value != null){
        let n = Number(num.value);
        val.push(n);
        let item = document.createElement('option');
        seletor.appendChild(item);
        item.text = `Valor ${n} adicionado.`;
        item.value = val.length;
    } else{
        alert('Valor inválido ou já adicionado.');
    }
    num.value = '';
}

function maior(v){
    v.sort();
    let x = v.length;
    return v[x-1];
}

function menor(v){
    v.sort();
    return v[0];
}

function somatoria(v){
    let lim = v.length;
    let s = 0;
    for(let c = 0; c < lim; c++){
        s += v[c];
    }
    return s;
}

function media(v, soma){
    return soma / v.length;
}

function finalizar(){
    res.innerHTML += `<p>Ao todo temos ${val.length} número(s) cadastrado(s).</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior(val)}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor(val)}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${somatoria(val)}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media(val, somatoria(val))}.</p>`;
}