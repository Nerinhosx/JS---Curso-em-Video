function tabuada() {
    let num = document.querySelector('input#txtN');
    let tab = document.querySelector('select#selTab');
    if(num.value.length == 0){
        alert('Por favor, informe um valor numérico.')
    } else{
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}