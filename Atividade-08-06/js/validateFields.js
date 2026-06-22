function validateFields() {

    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let year = document.getElementById("inputYear").value;

    let emailValidation = Email.validarEmail(email);

    if(emailValidation === false){
        document.getElementById("inputEmailHelp").innerHTML = "Endereço de e-mail incorreto!";
    } 
    else{
        document.getElementById("inputEmailHelp").innerHTML = " ";
    }

    var yearValidation = Ano.validarAno(year);

    if(yearValidation === false){
       document.getElementById("inputYearHelp").innerHTML = "Ano inválido!";
    }
    else{
        document.getElementById("inputYearHelp").innerHTML = " ";
    }

    let passStrength = Senha.validarSenha(name,year,password);
    
    switch (passStrength) {
        case false:
            document.getElementById("inputPasswordHelp").innerHTML = "Senha inválida!";
            document.getElementById("passStrengthMeter").value = 0;
            break;
        case 'fraca':
            document.getElementById("inputPasswordHelp").innerHTML = "Senha fraca";
            document.getElementById("passStrengthMeter").value = 10;
            break;
        case 'moderada':
            document.getElementById("inputPasswordHelp").innerHTML = "Senha Moderada";
            document.getElementById("passStrengthMeter").value = 20;
            break;
        case 'forte':
            document.getElementById("inputPasswordHelp").innerHTML = "Senha Forte";
            document.getElementById("passStrengthMeter").value = 30;
            break;
    }

    if (passStrength && emailValidation && yearValidation) {
        document.getElementById("inputResult").innerHTML = "Parabéns seus dados foram registrados :)";
    } else {
        document.getElementById("inputResult").innerHTML = "Seus dados não foram registrados :(";
    }
}
