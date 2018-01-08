const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

let currentLang = -1;

while (currentLang > 2 || currentLang < 0 || currentLang !== null) {

    currentLang = prompt('en-0, ru-1, ua-2', 'введите цифру');
    if (currentLang == null) alert('Игра окончена')
    else {
        currentLang = +currentLang;


        if (currentLang > 2 || currentLang < 0) alert('был выбран не доступный язык!')

        else {
            if (currentLang == 0) keyboard.currentLang = '0 это en'
            else if (currentLang == 1) keyboard.currentLang = '1 это ru'
            else keyboard.currentLang = '2 это ua'



            let arr = [];

            function addKeyboardLayout(alphabet) {

                let arr1 = arr2 = arr3 = '';
                let x = Math.floor(alphabet.length / 3)
                for (var i = 0; i < x; i++) {
                    arr1 += alphabet[i];
                }
                for (var i = x; i < 2 * x; i++) {
                    arr2 += alphabet[i];
                }
                for (var i = 2 * x; i < alphabet.length; i++) {
                    arr3 += alphabet[i];
                }
                arr.push(arr1, arr2, arr3);
                // console.log('arr1', arr1);
                // console.log('arr2', arr2);
                // console.log('arr3', arr3);
                // console.log('arr_main', arr);
            }


            addKeyboardLayout(prompt('введите массив', ''));

            if (currentLang == 0) {
                keyboard.layouts.en.topRow = arr[0];
                keyboard.layouts.en.middleRow = arr[1];
                keyboard.layouts.en.bottomRow = arr[2];
            } else if (currentLang == 1) {
                keyboard.layouts.ru.topRow = arr[0];
                keyboard.layouts.ru.middleRow = arr[1];
                keyboard.layouts.ru.bottomRow = arr[2];
            } else {
                keyboard.layouts.ua.topRow = arr[0];
                keyboard.layouts.ua.middleRow = arr[1];
                keyboard.layouts.ua.bottomRow = arr[2];
            }

            function getRandCharInAlph() {


                let row1 = Math.floor(Math.random() * 3);
                let index = Math.floor(Math.random() * arr[row1].length);
                let letter = keyboard.langs[currentLang]
                let row
                switch (index) {
                    case 0:
                        row = 'topRow';
                        break;
                    case 1:
                        row = 'middleRow';
                        break;
                    case 2:
                        row = 'bottomRow';
                        break;
                }
                let randLetter = keyboard['layouts'][letter][row][row1];
                console.log(keyboard)
                // console.log('случайное число от 0 до 2:', index);
                console.log('случайная буква из всего алфавита', randLetter);
            }

            getRandCharInAlph()
        }
    }
}