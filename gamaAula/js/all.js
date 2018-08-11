console.log("Qualquer coisa");

getAPI();

function getAPI() {
    var requisita = new XMLHttpRequest();
    requisita.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10', false);
    requisita.send();
    var data = JSON.parse(requisita.response);

    for (let index = 0; index < 10; index++) {
        var tr = document.createElement('tr');
        
        var td = document.createElement('td');
        td.textContent = data[index].rank;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = data[index].name;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = data[index].symbol;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = data[index].price_usd;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = data[index].price_btc;
        tr.appendChild(td);



        // td.textContent = data[index].name;
        // td.textContent = data[index].symbol;
        // td.textContent = data[index].price_usd;
        // td.textContent = data[index].price_usd;
        // td.textContent = data[index].price_btc;

        // const element = array[index];


        var tbody = document.querySelector('tbody');
        tbody.appendChild(tr);
        console.log(data);
    }




    // data.forEach(element => {
    //     var tr = document.createElement('tr');

    //     element.forEach(elementTd => {
    //         var td = document.createElement('td');
            
    //     });
        
    // });

    // console.log(data);
}

// var tr = document.createElement('tr');

// campos.forEach(function (campo) {

//     var td = document.createElement('td');
//     td.textContent = campo.value;
//     tr.appendChild(td);
// });

// var tdVolume = document.createElement('td');
// tdVolume.textContent = campos[1].value * campos[2].value;

// tr.appendChild(tdVolume);

// tbody.appendChild(tr);


function convert() {
    
}



// https://api.coinmarketcap.com/v1/ticker/
// https://api.coinmarketcap.com/v1/ticker/Bitcoin/?convert=BRL
// http://entendendoes6.com.br/
// http://diegopinho.com.br/