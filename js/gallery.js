window.onload=function(){makeGallery("gallery")};



function makeGallery(id) {

        //Подключаем после загрузки документа
        var gallery;
        var imagesArray;
        var navbarBlock;
        var arrowLeft;
        var arrowRight;
        var showBlock;
        var cursor;

        gallery = document.getElementById(id);
        imagesArray  =  gallery.getElementsByTagName('img');


        //Если ошибок нет то создаем галерею
        if(validateImages(imagesArray)){

            // Добавляем к блоку класс галерей
            gallery.setAttribute('class','gallery');

            //Чистим блок чтобы создать элементы галереи
            showBlock   = makeShowBlock();
            navbarBlock = makeNavbar();

            if(showBlock && navbarBlock){

                    removeAllChild(gallery);
                    makeArrow();
                    clickItem();
                    clickArrow();
                    gallery.appendChild(showBlock);
                    gallery.appendChild(navbarBlock);
            }

        }


    function validateImages() {

        let error = false;

        if(imagesArray && imagesArray[0].src){
            //Перебрал все изображения и проверил на существование
            for (var i = 0; i < imagesArray.length;++i){
                if (imagesArray[i].height === 0) {
                    console.log("Ошибка в пути к изображению " + imagesArray[i].src);
                    error = true;
                }
            }
            //Если ошибок нет выкидывает true
            if(!error){
                return true;
            }
            return false;
        }
    }


//Функция удаляет все дочерние елементы
    function removeAllChild(element) {
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
    }


    function removeAllChildImages(element) {
        var images = element.getElementsByTagName('img');
        for(var i=0; i < images.length; i++) {
            images[i].parentNode.removeChild(images[i]);
        }
    }


//Функция создания миниатюр

    function makeNavbar() {
        let divNavbar =  document.createElement("div");
        divNavbar.setAttribute('class', "navbar-block");
        let div;
        let img;
        for (var i = 0; i < imagesArray.length;++i){
            div = document.createElement('div');
            if(i === 0){
                div.setAttribute('class','item active');
            }else{div.setAttribute('class','item');}

            img = document.createElement('img');
            img.setAttribute('src', imagesArray[i].src);
            img.setAttribute('alt', imagesArray[i].alt);

            div.appendChild(img);
            divNavbar.appendChild(div);
        }

        //возвращаем готовый html код
        return divNavbar;

    }


    function makeShowBlock() {
        let divShow =  document.createElement("div");
        let imgFirst;
        divShow.setAttribute('class', "show-block");

        imgFirst = document.createElement('img');
        imgFirst.setAttribute('src', imagesArray[0].src);
        imgFirst.setAttribute('alt', imagesArray[0].alt);

        divShow.appendChild(imgFirst);

        //Устанавливаем курсор
        cursor = 0;

        return divShow;
    }

    function makeArrow() {
        arrowLeft = document.createElement("div");
        arrowRight = document.createElement("div");

        arrowLeft.setAttribute('class','arrow-left');
        arrowRight.setAttribute('class','arrow-right');

        showBlock.appendChild(arrowLeft);
        showBlock.appendChild(arrowRight);

    }


    function clickItem() {
        let action = navbarBlock.querySelectorAll(".item");

        for (var i = 0; i < action.length; i++) {
            action[i].addEventListener("click", function (event) {
                setImages(event);
            }, false);
        }
    }

    function setImages(target) {
        //Удаляем старое изображение
        removeAllChildImages(showBlock);

        //Определяем ихображение
        for (var i = 0; i < imagesArray.length;++i){
            if(imagesArray[i].src == target.target.src){
                cursor = i;
            }
        }

        //Устанавливаем изображение
        let img;
        img = document.createElement('img');
        img.setAttribute('src', imagesArray[cursor].src);
        img.setAttribute('alt', imagesArray[cursor].alt);
        showBlock.appendChild(img);
    }

    function clickArrow() {
        let action = showBlock.querySelectorAll("div");

        for (var i = 0; i < action.length; i++) {
            action[i].addEventListener("click", function (event) {
                slideArrow(event);
            }, false);
        }
    }

    function slideArrow(event) {

        if(event.target.className === "arrow-right" && cursor < (imagesArray.length - 2)){
            ++cursor;
        }

        if(event.target.className === "arrow-left" && cursor !== 0){
            --cursor;
        }

        removeAllChildImages(showBlock);

        let img;
        img = document.createElement('img');
        img.setAttribute('src', imagesArray[cursor].src);
        img.setAttribute('alt', imagesArray[cursor].alt);
        showBlock.appendChild(img);

    }









}









