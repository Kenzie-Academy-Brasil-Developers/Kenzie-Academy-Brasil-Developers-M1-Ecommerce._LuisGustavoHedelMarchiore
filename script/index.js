let quant = 0;
let amount = 0.00;

function render(filter) {
  if (filter == undefined || filter == "") {
    const cadsTag = document.querySelector(".cards")
    for (let i = 0; i < data.length; i++) {

      let liTag = document.createElement("li");
      let imgTag = document.createElement("img");
      let spanTag = document.createElement("span");
      let h3Tag = document.createElement("h3");
      let pTag = document.createElement("p");
      let spanTag2 = document.createElement("span");
      let btnTag = document.createElement("button");
      
      liTag.id = data[i].id;
      liTag.className = "card";
      spanTag.className = "tag";
      btnTag.className = "addCarinho";
      btnTag.id = data[i].id;

      imgTag.src = data[i].img;
      spanTag.innerHTML = data[i].tag[0];
      h3Tag.innerHTML = data[i].nameItem;
      pTag.innerHTML = data[i].description;
      spanTag2.innerHTML = data[i].value.toFixed(2) + " R$";
      btnTag.innerHTML = "Adicionar no carrinho";

      btnTag.addEventListener("click", function filter(e) {
        quant++;
        document.querySelector("#cont").innerHTML = quant

        let idElement = e.target.id;
        
        let iten = searchIten(idElement);

        let elementIten = addCart(iten)

        document.querySelector(".cart-list").appendChild(elementIten)

        const emp = document.querySelector(".cart-empty")
        document.querySelector(".h5Emp").remove();
        document.querySelector(".pEmp").remove();
        emp.className = "temp"
        console.log(emp);
      })
      
      liTag.appendChild(imgTag);
      liTag.appendChild(spanTag);
      liTag.appendChild(h3Tag);
      liTag.appendChild(pTag);
      liTag.appendChild(spanTag2);
      liTag.appendChild(btnTag);

      cadsTag.appendChild(liTag)
  }
  }else if(filter != undefined){
    let prod = searchByName(filter);

    const cadsTag = document.querySelector(".cards")
    
    for (let i = 0; i < prod.length; i++) {

      let liTag = document.createElement("li");
      let imgTag = document.createElement("img");
      let spanTag = document.createElement("span");
      let h3Tag = document.createElement("h3");
      let pTag = document.createElement("p");
      let spanTag2 = document.createElement("span");
      let btnTag = document.createElement("button");
      
      liTag.id = prod[i].id;
      liTag.className = "card";
      spanTag.className = "tag";
      btnTag.className = "addCarinho";
      btnTag.id = prod[i].id;

      imgTag.src = prod[i].img;
      spanTag.innerHTML = prod[i].tag[0];
      h3Tag.innerHTML = prod[i].nameItem;
      pTag.innerHTML = prod[i].description;
      spanTag2.innerHTML = prod[i].value.toFixed(2) + " R$";
      btnTag.innerHTML = "Adicionar no carrinho";

      btnTag.addEventListener("click", function filter(e) {
        quant++;
        document.querySelector("#cont").innerHTML = quant

        let idElement = e.target.id;
        
        let iten = searchIten(idElement);

        let elementIten = addCart(iten)

        document.querySelector(".cart-list").appendChild(elementIten)

        const emp = document.querySelector(".cart-empty")
        document.querySelector(".h5Emp").remove();
        document.querySelector(".pEmp").remove();
        emp.className = "temp"
        console.log(emp);
      })
      
      liTag.appendChild(imgTag);
      liTag.appendChild(spanTag);
      liTag.appendChild(h3Tag);
      liTag.appendChild(pTag);
      liTag.appendChild(spanTag2);
      liTag.appendChild(btnTag);

      cadsTag.appendChild(liTag)
  }
    
    
    liTag.appendChild(imgTag);
    liTag.appendChild(spanTag);
    liTag.appendChild(h3Tag);
    liTag.appendChild(pTag);
    liTag.appendChild(spanTag2);
    liTag.appendChild(btnTag);

    cadsTag.appendChild(liTag)
  }
  

}

function renderFilter(filter){
  const cadsTag = document.querySelector(".cards")
  let prod = searchByTag(filter);
    for (let i = 0; i < prod.length; i++) {

      let liTag = document.createElement("li");
      let imgTag = document.createElement("img");
      let spanTag = document.createElement("span");
      let h3Tag = document.createElement("h3");
      let pTag = document.createElement("p");
      let spanTag2 = document.createElement("span");
      let btnTag = document.createElement("button");
      
      liTag.id = prod[i].id;
      liTag.className = "card";
      spanTag.className = "tag";
      btnTag.className = "addCarinho";
      btnTag.id = prod[i].id;

      imgTag.src = prod[i].img;
      spanTag.innerHTML = prod[i].tag[0];
      h3Tag.innerHTML = prod[i].nameItem;
      pTag.innerHTML = prod[i].description;
      spanTag2.innerHTML = prod[i].value.toFixed(2) + " R$";
      btnTag.innerHTML = "Adicionar no carrinho";

      btnTag.addEventListener("click", function filter(e) {
        quant++;
        document.querySelector("#cont").innerHTML = quant

        let idElement = e.target.id;
        
        let iten = searchIten(idElement);

        let elementIten = addCart(iten)

        document.querySelector(".cart-list").appendChild(elementIten)

        const emp = document.querySelector(".cart-empty")
        document.querySelector(".h5Emp").remove();
        document.querySelector(".pEmp").remove();
        emp.className = "temp"
        console.log(emp);
      })
      
      liTag.appendChild(imgTag);
      liTag.appendChild(spanTag);
      liTag.appendChild(h3Tag);
      liTag.appendChild(pTag);
      liTag.appendChild(spanTag2);
      liTag.appendChild(btnTag);

      cadsTag.appendChild(liTag)
  }
}

function searchByName(name) {
  let prod = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].nameItem.toUpperCase().includes(name.toUpperCase())) {
      prod.push(data[i])
    }
  }
  return prod;
}

function searchByTag(tag){
  let prod = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].tag[0].toUpperCase() == tag.toUpperCase() ) {
      prod.push(data[i])
    }
  }
  return prod;
}

function searchIten(id){
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
    
  }
}

function addCart(obj) {
  let liCart = document.createElement("li");
  let divCart = document.createElement("div");
  let imgCart = document.createElement("img");
  let divCartText = document.createElement("div");
  let h5Cart = document.createElement("h5");
  let spanCart = document.createElement("span");
  let buttonCart = document.createElement("button");

  liCart.className = "cartCard";
  divCart.className = "imgCard";
  imgCart.className = "imgCart";
  divCartText.className = "cardText"
  buttonCart.classList = "remove"
  buttonCart.id = obj.id;

  amount += obj.value
  document.querySelector("#amount").innerHTML = amount.toFixed(2);

  imgCart.src = obj.img;
  h5Cart.innerHTML = obj.nameItem;
  spanCart.innerHTML = obj.value.toFixed(2) + " R$";
  buttonCart.innerHTML = "Remover do Carrihno";

  buttonCart.addEventListener("click", function(event){
    liCart.remove();
    
    let idElement = event.target.id;
        
    let iten = searchIten(idElement);

    quant--;
    document.querySelector("#cont").innerHTML = quant

    amount -= iten.value;
    document.querySelector("#amount").innerHTML = amount.toFixed(2);

    if (quant == 0) {
      cartEmpty();
    }
  })

  liCart.appendChild(divCart)
  divCart.appendChild(imgCart)
  liCart.appendChild(divCartText)
  divCartText.appendChild(h5Cart)
  divCartText.appendChild(spanCart)
  divCartText.appendChild(buttonCart)

  return liCart;
}

function cartEmpty(){
  let emp = document.querySelector(".temp");
  let h5Tag = document.createElement("h5");
  let pTag = document.createElement("p");

  emp.className = "cart-empty";
  h5Tag.classList = "h5Emp";
  pTag.classList = "pEmp"

  h5Tag.innerHTML = "Carrinho Vazio"
  pTag.innerHTML = "Adicione Itens"

  emp.appendChild(h5Tag);
  emp.appendChild(pTag);


}


const button = document.querySelector('.search-button');
const input = document.querySelector('.search-input');
const todosBtn = document.getElementById('todos');
const acessoriosBtn = document.getElementById('acessorios');
const camisetasBtn = document.getElementById('camisetas');

let filter = "";

todosBtn.addEventListener('click', function() {
  const valorInput = input.value;

  const cardsTag = document.querySelector(".cards");
  cardsTag.innerHTML = "";
  
  filter = ""
  render(filter);
});

acessoriosBtn.addEventListener('click', function() {
  const valorInput = input.value;

  const cardsTag = document.querySelector(".cards");
  cardsTag.innerHTML = "";
  
  filter = "Acessórios"
  renderFilter(filter);
});

camisetasBtn.addEventListener('click', function() {
  const valorInput = input.value;

  const cardsTag = document.querySelector(".cards");
  cardsTag.innerHTML = "";
  
  filter = "Camisetas"
  renderFilter(filter);
});

button.addEventListener('click', function() {
  const valorInput = input.value;

  const cardsTag = document.querySelector(".cards");
  cardsTag.innerHTML = "";
  
  filter = valorInput
  render(filter);
});

let t = "T-Shirt"

console.log(t.includes("Shirt"));

render(filter);