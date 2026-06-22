class Ano {

    static validarAno(ano){ 
        ano = String(ano);
        const regex = /[^0-9]/;
        
       // if( (ano.match(regex) != null) || (ano.length != 4)){
       //     return false;
       // }
       return true;
    }
    
}

/* if(typeof exports !== 'undefined'){
    module.exports = Ano;
} */

