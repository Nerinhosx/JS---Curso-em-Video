function parImpar(n){
    if(n%2==0){
        return 'Par';
    } else{
        return 'Ímpar';
    }
}

console.log(`O valor informado é ${parImpar(223)}`);