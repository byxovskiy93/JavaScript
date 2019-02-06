
window.onload=function(){basket()};

function basket() {


    var basketProduct = document.getElementsByClassName("basket-product");
    var productArray = [];
    var productSum = document.getElementsByClassName("product-sum");

    clickBuyProduct();


    function clickBuyProduct() {

            let action = document.querySelectorAll(".product-bottom");

            for (var i = 0; i < action.length; i++) {
                action[i].addEventListener("click", function (event) {
                    add(event);
                }, false);
            }

    }



    function add(event) {

        removeAllChild(basketProduct[0]);

        let price = event.target.parentNode.getElementsByClassName('product-price')[0].innerText.match(/\d+/g)[0];
        let name = event.target.parentNode.getElementsByClassName('product-title')[0].innerText;
        for(var i = 0;i < productArray.length;++i){
            if(productArray[i].name === name){
                productArray[i].count+=1;
                createDivProduct();
                getBasketSum();
                return false;
            }
        }
        productArray.push(createProduct(name,price,1));
        createDivProduct();
        getBasketSum();
    }


    function createProduct(name,price,count) {
        let product = {name:name,price:price,count:count};
        return product;
    }
    
    
    function createDivProduct() {

        let divProduct;
        let divName;
        let divPrice;
        let divCount;

        for(var i = 0;i < productArray.length;++i){

             divProduct = document.createElement("div");
             divName =  document.createElement("div");
             divPrice =  document.createElement("div");
             divCount = document.createElement("div");

            divProduct.setAttribute('class','product');

            divPrice.setAttribute('class','price');

            divPrice.innerText = Number(productArray[i].price * productArray[i].count);

            divName.setAttribute('class','name');

            divName.innerText = productArray[i].name;

            divCount.setAttribute('class','count');

            divCount.innerText = productArray[i].count;

            divProduct.appendChild(divName);
            divProduct.appendChild(divPrice);
            divProduct.appendChild(divCount);

            basketProduct[0].appendChild(divProduct);
        }


    }

    function removeAllChild(element) {
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
    }


    function getBasketSum() {
        let sum = 0;
        for(var i = 0;i < productArray.length;++i){
            sum+= productArray[i].price * productArray[i].count;
        }
        productSum[0].innerText = "Итого: "+sum+" руб.";
    }

}