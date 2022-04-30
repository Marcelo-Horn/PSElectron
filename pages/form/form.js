let cepInput = document.querySelector('input[name="cep"]');

cepInput.addEventListener('focusout', function () {
    
    let cepValue = cepInput.value;
    const cep = cepValue.replace(/[^0-9]/g, '');
    console.log(cep);
    
    if (cep?.length !==8) {
        console.log("CEP inválido!");
        return;
    }
    
    var finalData = [];

    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((response) => response.json())
        .then((data) => {
            document.querySelector('input[name="pplace"]').value = data.logradouro;
            document.querySelector('input[name="district"]').value = data.bairro;
            document.querySelector('input[name="city"]').value = data.localidade;
            document.querySelector('input[name="state"]').value = data.uf;
            finalData.push(data);
        });
    console.log(finalData);
});

var persistData = document.querySelector('input[name="button"');
persistData.addEventListener("click", function (event) {
    event.preventDefault();
    const register = {
        name: getValue('name'),
        id: getValue('id'),
        cpf: getValue('cpf'),
        phone: getValue('phone'),
        email: getValue('email'),
        adress: getValue('adress'),
        cep: getValue('cep'),
        pplace: getValue('pplace'),
        adress_nember: getValue('adress_number'),
        district: getValue('district'),
        city: getValue('city'),
        state: getValue('state'),
        country: getValue('country')
    }
    localStorage.setItem(getValue('cpf'), JSON.stringify(register));
});

function getValue(params) {
    return document.querySelector(`input[name="${params}"`).value;
}
