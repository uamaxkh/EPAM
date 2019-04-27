//Список вхідних даних
var goodsArray = [
{ratingReviews: "264 отзыва", price: {oldUan: "4 333 грн", newUan: "3 799 грн"}, name: "Motorola MOTO G4 (XT1622) Black"},
{ratingReviews: "1355 отзывов", price: "4 999 грн", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"},
{ratingReviews: "426 отзывов", price: "5 199 грн", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"},
{ratingReviews: "403 отзыва", price: "4 349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"},
{ratingReviews: "488 отзывов", price: "6 199 грн", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"},
{ratingReviews: "198 отзывов", price: {oldUan: "3 495 грн", newUan: "2 995 грн"}, name: "Lenovo K5 (A6020a40) Silver"},
{ratingReviews: "352 отзыва", price: {oldUan: "9 799 грн", newUan: "7 999 грн"}, name: "Apple iPhone 5s 16GB Space Gray"},
{ratingReviews: "59 отзывов", price: "5 999 грн", name: "Nokia 5 Dual Sim Tempered Blue"},
{ratingReviews: "119 отзывов", price: "11 999 грн", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"},
{ratingReviews: "1106 отзывов", price: "3 999 грн", name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"},
{ratingReviews: "380 отзывов", price: "2 199 грн", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"},
{ratingReviews: "86 отзывов", price: {oldUan: "24 999 грн", newUan: "22 999 грн"}, name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"},
{ratingReviews: "177 отзывов", price: "6 499 грн", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"},
{ratingReviews: "347 отзывов", price: "4 299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"},
{ratingReviews: "709 отзывов", price: "2 799 грн", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"},
{ratingReviews: "527 отзывов", price: "3 999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"},
{ratingReviews: "66 отзывов", price: "16 499 грн", name: "Apple iPhone 6s 32GB Gold"},
{ratingReviews: "14 отзывов", price: "11 499 грн", name: "Apple iPhone 6 32GB Space Gray"},
{ratingReviews: "70 отзывов", price: {oldUan: "7 399 грн", newUan: "5 999 грн"}, name: "Asus ZenFone 2 32GB (ZE551ML) Black"},
{ratingReviews: "45 отзывов", price: "4 299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"},
{ratingReviews: "376 отзывов", price: "3 899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)"},
{ratingReviews: "111 отзывов", price: {oldUan: "9 999 грн", newUan: "7 999 грн"}, name: "Sony Xperia X Dual (F5122) White"},
{ratingReviews: "40 отзывов", price: "2 222 грн", name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"},
{ratingReviews: "93 отзыва", price: "18 999 грн", name: "Apple iPhone 7 32GB Black"},
{ratingReviews: "33 отзыва", price: "16 999 грн", name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"},
{ratingReviews: "71 отзыв", price: {oldUan: "2 399 грн", newUan: "1 999 грн"}, name: "LG K5 X220ds Gold"},
{ratingReviews: "39 отзывов", price: "2 995 грн", name: "Lenovo C2 Power (K10a40) Black"},
{ratingReviews: "156 отзывов", price: "2 599 грн", name: "Nous NS 5006 Gold"},
{ratingReviews: "40 отзывов", price: "19 689 грн", name: "LG G6 Mystic White"},
{ratingReviews: "24 отзыва", price: "5 995 грн", name: "Motorola MOTO G5 (XT1676) Grey"},
{ratingReviews: "7 отзывов", price: {oldUan: "10 999 грн", newUan: "9 999 грн"}, name: "HTC One X10 Dual Sim Silver"},
{ratingReviews: "18 отзывов", price: {oldUan: "5 999 грн", newUan: "4 999 грн"}, name: "Sony Xperia L1 Dual Black"}
]

//Виводить циклом телефони з вхідного масиву
//Зважає на прапорець 'тільки зі знижкою'
function addPhonesToPage(goodsArray) {

    clearMain();

    for(let i = 0; i < goodsArray.length; i++) {

        //Виводити тільки зі знижкою?
        let checked = document.getElementById('showSale').checked;
        if(checked){
            if(!goodsArray[i].price.newUan) {
                continue;
            }
        }

        var tile = createElFromPhone(goodsArray[i]);
        addChildToMain(tile);
    }
}

//Створює необхідні частинки з необхідними атрибутами
//Збирає з них тайл телефону
function createElFromPhone(phone) {
    //Сам тайл
    var tile = document.createElement('div');
    tile.setAttribute('class', 'tile');

    //Дочірні елементи тайлу, плейсхолдери
    var photoContainer = document.createElement('div');
    photoContainer.setAttribute('class', 'photoContainer');
    var phoneNamePlaceHolder = document.createElement('div');
    phoneNamePlaceHolder.setAttribute('class', 'phoneNamePlaceHolder placeHolder');
    var phonePricePlaceHolder = document.createElement('div');
    phonePricePlaceHolder.setAttribute('class', 'phonePricePlaceHolder placeHolder');
    var phoneReviewsPlaceHolder = document.createElement('div');
    phoneReviewsPlaceHolder.setAttribute('class', 'phoneReviewsPlaceHolder placeHolder');

    // photoContainer - додає атрибути
    var tileImage = document.createElement('img');
    tileImage.setAttribute('class', 'tileImage');
    tileImage.setAttribute('src', 'phone.jpg');
    tileImage.setAttribute('alt', 'no image');

    //phoneNamePlaceHolder - додає атрибути
    var nameSpan = document.createElement('span');
    nameSpan.textContent = nameShorter(phone.name);
    nameSpan.setAttribute('title', phone.name);

    //phonePricePlaceHolder - додає атрибути
    //Якщо є нова ціна, то два елементи, інакше один
    if(phone.price.newUan) {
        var oldPriceDiv = document.createElement('div');
        oldPriceDiv.setAttribute('class', 'oldPrice');
        oldPriceDiv.textContent = phone.price.oldUan;
        
        var newPriceDiv = document.createElement('div');
        newPriceDiv.setAttribute('class', 'newPrice');
        newPriceDiv.textContent = phone.price.newUan;

        phonePricePlaceHolder.appendChild(oldPriceDiv);
        phonePricePlaceHolder.appendChild(newPriceDiv);
    }
    else {
        var onePriceDiv = document.createElement('div');
        onePriceDiv.setAttribute('class', 'onePrice');
        onePriceDiv.textContent = phone.price;

        phonePricePlaceHolder.appendChild(onePriceDiv);
    }

    //phoneReviewsPlaceHolder - додає атрибути
    var reviewSpan = document.createElement('span');
    reviewSpan.textContent = phone.ratingReviews;

    //Далі складає все до купи
    photoContainer.appendChild(tileImage);

    phoneNamePlaceHolder.appendChild(nameSpan);

    phoneReviewsPlaceHolder.appendChild(reviewSpan);

    tile.appendChild(photoContainer);
    tile.appendChild(phoneNamePlaceHolder);
    tile.appendChild(phonePricePlaceHolder);
    tile.appendChild(phoneReviewsPlaceHolder);

    return tile;
}

//Додає елемент в головний елемент div як дочірній
//Для додавання тайлів телефонів
function addChildToMain(childEl) {
    document.querySelector('#mainContent').appendChild(childEl);
}

//Треба перед додаванням нових плиток
//Очищує головний елемент div від старих плиток
function clearMain() {
    var mainContent = document.querySelector('#mainContent');
    console.log('div "mainContent" was cleared');
    while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

//Скорочує довгі назви телефонів й додає '...'
function nameShorter(name) {
    if(name.length > 55)
        return name = name.substring(0, 55)+'...';
    else
        return name;
}

//Функція-аргумент для sort для сортування за цінами
//Береться ціна, якщо вона одна, нова ціна, якщо є нова і стара
function sortByPriceFunction (phone1, phone2) {
    let price1, price2;
    price1 = phone1.price.newUan ? phone1.price.newUan: phone1.price;
    price2 = phone2.price.newUan ? phone2.price.newUan: phone2.price;
    price1 = stringToIntParce(price1);
    price2 = stringToIntParce(price2);
    return price1 - price2;
}

//Функція-аргумент для sort для сортування за відгуками
function sortByReviewsFunction (phone1, phone2) {
    let ratingReviews1 = stringToIntParce(phone1.ratingReviews);
    let ratingReviews2 = stringToIntParce(phone2.ratingReviews);

    return ratingReviews1 - ratingReviews2;
}

//Функція-аргумент для sort для сортування за іменами
function sortByNamesFunction (phone1, phone2) {
    let name1 = phone1.name;
    let name2 = phone2.name;
    
    if (name1 < name2)
        return -1;
    else if (name1 > name2)
        return 1;
    else 
        return 0;
}

//Повертає функцію сортування для sort за вхідним налаштуваннням sortObject
//Також додає зворотній порядок сортування
function getSortFunction(sortObject) {
    switch(sortObject) {
        case sortObj.price_ASC: {
            console.log('price_ASC was selected');
            return sortByPriceFunction;
        }
        case sortObj.price_DESC: {
            console.log('price_DESC was selected');
            return function(a, b) {
                return sortByPriceFunction(b, a);
            };
        }
        case sortObj.review_ASC: {
            console.log('review_ASC was selected');
            return sortByReviewsFunction;
        }
        case sortObj.review_DESC: {
            console.log('review_DESC was selected');
            return function(a, b) {
                return sortByReviewsFunction(b, a);
            };
        }
        case sortObj.name_ASC: {
            console.log('name_ASC was selected');
            return sortByNamesFunction;
        }
        case sortObj.name_DESC: {
            console.log('name_DESC was selected');
            return function(a, b) {
                return sortByNamesFunction(b, a);
            };
        }
        default: {
            console.log('default - price_ASC, no selected'); 
            return sortByPriceFunction;
        }
    }
}

//Прибирає зайві пробіли й перетворює на число
function stringToIntParce(price) {
    return Number.parseInt(price.replace(' ',''));
}

//Щось накшталт ENUM в C#, об'єкт-перелічення
//Можливі налаштування для сортування
const sortObj = {
    price_ASC: 1,
    price_DESC: 2,
    review_ASC: 3,
    review_DESC: 4,
    name_ASC: 5,
    name_DESC: 6
}
Object.freeze(sortObj);

//Автоматично викликається при натисканні кнопки (вже зашито в onClick в HTML)
//За визначеним об'єктом-параметром проводимо сортування і виведення телефонів
function sortAndPrint(sortObject) {

    if(document.querySelector('.selectedSortedButton')) {

        btnDisactivete(document.querySelector('.selectedSortedButton'));
    }

    switch(sortObject) {
        case sortObj.price_ASC: {
            btnActivete(document.querySelector('#btn1'));
            break;
        }
        case sortObj.price_DESC: {
            btnActivete(document.querySelector('#btn2'));
            break;
        }
        case sortObj.review_ASC: {
            btnActivete(document.querySelector('#btn3'));
            break;
        }
        case sortObj.review_DESC: {
            btnActivete(document.querySelector('#btn4'));
            break;
        }
        case sortObj.name_ASC: {
            btnActivete(document.querySelector('#btn5'));
            break;
        }
        case sortObj.name_DESC: {
            btnActivete(document.querySelector('#btn6'));
            break;
        }
        default: {
            console.log('Button color - no selected'); 
            break;
        }
    }

    goodsArray.sort(getSortFunction(sortObject));
    addPhonesToPage(goodsArray);
}

//Встановлюють на елементи потрібні класи для стилів
//Активація елеметну
function btnActivete(button) {
    button.setAttribute('class', 'sortButton selectedSortedButton');
    button.parentElement.setAttribute('class', 'sortButtonSection sortButtonSectionSelected');
}
//Деактивація елеметну
function btnDisactivete(button) {
    button.setAttribute('class', 'sortButton')
    button.parentElement.setAttribute('class', 'sortButtonSection');
}

//Додати "плейсхолдери" для телефонів
//Відображаються при завантаженні
function addEmptyPhones() {

    clearMain();

    for(let i = 0; i < 16; i++){
        let emptyPhone = document.createElement('div');
        emptyPhone.setAttribute('class', 'emptyPhones');
        let text = document.createElement('div');
        text.textContent = 'Place for the phone';
        emptyPhone.appendChild(text);
        addChildToMain(emptyPhone);
    }
}

//Ініціалізуємо початкове виведення
(function Initialize() {
    addEmptyPhones();
    setTimeout(()=>{addPhonesToPage(goodsArray)}, 1000);
})()