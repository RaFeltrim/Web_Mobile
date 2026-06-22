
class Email {

    static validarEmail(e){ 

        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        const regex1 = /^[a-z0-9.]+@unifei\.edu\.br/i;

        if(e.match(regex) == null){
            return false;
        }
       return true;
    }
    
}

if(typeof exports !== 'undefined'){
    module.exports = Email;
}

