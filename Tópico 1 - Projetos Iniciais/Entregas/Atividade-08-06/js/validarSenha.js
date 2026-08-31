class Senha {
    static quantidade(expressao, palavra) {
        var qte = 0;
        if (palavra.match(expressao) !== null) {
            qte = palavra.match(expressao).length;
        }
        else {
            qte = 0;
        }
        //console.log(qte);
        return qte;
    }
    
    static validarSenha(primeiroNome, anoDeNascimento, senha) {
        primeiroNome = String(primeiroNome);
        senha = String(senha);
        anoDeNascimento = String(anoDeNascimento);
    
        //expressões regulares
        var expLetra = /[a-zA-ZçÇ]/g;
        var expNum = /[0-9]/g; //  /\d/
        var expCarEspecial = /[!@#%&$+]/g;
        var expMaiuscula = /[A-ZÇ]/g;
        //quantidades de maiusculas, numeros e caracteres especiais na senha
        var qtdLetra = this.quantidade(expLetra, senha);
        var qtdNumero = this.quantidade(expNum, senha);
        var qtdCarEspecial = this.quantidade(expCarEspecial, senha);
        var qtdMaiuscula = this.quantidade(expMaiuscula, senha);
    
        //validar se comprimento da senha está fora do intervalo [6,20]
        if (!(senha.length >= 6 && senha.length <= 20)) {
            return false;
        }
    
        //senha não deve conter o primeiroNome nem o anoDeNascimento 
        if ((senha.indexOf(primeiroNome) !== -1) || (senha.indexOf(anoDeNascimento) !== -1)) {
            return false;
        }
    
        //a senha deve conter um caracter especial, uma letra e um número
        if ((qtdLetra > 0) && (qtdNumero > 0) && (qtdCarEspecial > 0)) {
            //calcular a força da senha: fraca, moderada, forte.
    
            if ((senha.length >= 13) && (qtdCarEspecial > 1) && (qtdMaiuscula > 1) && (qtdNumero > 1)) {
                return 'forte';
            }
            else if ((senha.length >= 9) && (qtdMaiuscula > 0)) {
                return 'moderada';
            }
            else {
                return 'fraca';
            }
        }
        else {
            return false;
        }
    }
}

if(typeof exports !== 'undefined'){
    module.exports = Senha;
}
