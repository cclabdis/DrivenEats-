let finish_button = document.querySelector(".bottom-button");
finish_button.disabled = true; 

let food, drink, dessert;


function selectorFood(selector) {
    const lastSelect = document.querySelector(".food-select");

    if (lastSelect !== null) { 
        lastSelect.classList.remove("food-select"); 
    }

    selector.classList.add("food-select");
    food = selector.innerHTML;
    enableButton();
}

function selectDrink(selector) {
    const lastSelect = document.querySelector(".drink-select");

    if (lastSelect !== null) { 
        lastSelect.classList.remove("drink-select"); 
    }

    selector.classList.add("drink-select");
    drink = selector.innerHTML;
    enableButton();
}

function selectDessert(selector) {
    const lastSelect = document.querySelector(".dessert-select");

    if (lastSelect !== null) { // verificação se já tinha algo selecionado
        lastSelect.classList.remove("dessert-select"); // desmarca algo selecionado anteriormente
    }

    selector.classList.add("dessert-select");
    dessert = selector.innerHTML;

    enableButton();
}

function enableButton() {

    if (food !== undefined) {
        if (drink !== undefined) {
            if (dessert !== undefined) {
                const finish_text = document.querySelector(".bottom-button>p");
                finish_text.innerHTML = "Fechar pedido"
                finish_button.disabled = false;
                finish_button.classList.add("allow-button");
            }
        }
    }

}
function whatsapp() {
    const food = (document.querySelector(".food-select>.solicitation").innerHTML); // armazena o nome do prato
    const drink = (document.querySelector(".drink-select>.solicitation").innerHTML); // armazena o nome da bebida
    const dessert = (document.querySelector(".dessert-select>.solicitation").innerHTML); // armazena o nome da sobremesa
    let price = 0; // "price" irá armazenar a soma dos valores que x receber.
    let x = (document.querySelector(".food-select>.price").innerHTML).replace("R$ ", ""); // x receberá o valor de cada parte da refeição

    const nome = prompt("Qual é seu nome?");
    const adress = prompt("Qual é seu endereço?");
    // Cálculo do preço total
    x = x.replace(",", ".");
    x = Number(x);
    price += x;    
    x = (document.querySelector(".drink-select>.price").innerHTML).replace("R$ ", ""); // preço bebida
    x = x.replace(",", ".");
    x = Number(x);
    price += x;    
    x = (document.querySelector(".dessert-select>.price").innerHTML).replace("R$ ", ""); // preço sobremesa
    x = x.replace(",", ".");
    x = Number(x);
    price += x;    

    price = String(price.toFixed(2).replace(".", ",")); // price é convertido para uma string com "," e duas casas decimais
    
    let str = `Olá, gostaria de fazer o pedido:\n- Prato: ${food}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${price}\n\n Nome: ${nome}\n Endereço: ${adress} `;
    str = encodeURIComponent(str);

    window.open("https://wa.me/5553984693364?text=" + str);
}