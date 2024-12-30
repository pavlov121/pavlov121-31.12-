//Задание 1
function stat(){
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let a = prompt('Введи строку');
    let sta = {
        title: 'Статистика'
    };
    for(let i = 0; i < a.length; i++){
        if (a[i]==',' || a[i]=='.' || a[i]=='"' || a[i]=='!' || a[i]=='@' || a[i]==';' || a[i]=='*' || a[i]=='?' || a[i]=='%' ||  a[i]=='#' || a[i]==')' || a[i]=='('){
            sum1++;
        }else if(a[i]=='0' || a[i]=='1' || a[i]=='2' || a[i]=='3' || a[i]=='4' || a[i]=='5' || a[i]=='6' || a[i]=='7' || a[i]=='8' ||a[i]=='9'){
            sum2++;
        }else{
            sum3++;
        }
    }
    sta.col_znak = sum1;
    sta.col_cifr = sum2;
    sta.col_bukv = sum3;
    console.log(sta);
}
stat()
//Задание 2
function voz(){
    let chis = prompt('Введи число:');
    let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать ', 'Девяднадцать', 'Двадвать'];
    let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    if(chis.length < 2 || chis.length > 2){
        alert('Введите ещё раз!');
    }else{
        Number(chis);
    }
    if(chis > 0 && chis <= 9){
        alert (first[chis - 1]);
    }else if(chis >= 10 && chis <= 20){
        alert (second[chis - 10]);
    }else{
        let str = chis;
        str = str.split('');
        let firstNumber = str
        let secondNumber = str; 
        return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
    }
}
voz();
//Задание 3
function zam(){
    let a = prompt('Введи строку:');
    let b = a.toUpperCase().split("");
    for(let i = 0; i < b.length;i++){
        if(b[i] == a[i]){
            b[i] = b[i].toLowerCase();
        }else if(b[i] == '0' || b[i] == '1' || b[i] == '2' || b[i] == '3' || b[i] == '4' || b[i] == '5' || b[i] == '6' || b[i] == '7' || b[i] == '8' || b[i] == '9'){
            b[i] = "_";
        }else{
            b[i];
        }
        console.log(b.join(""));
    }
}
zam();
//Задание 4
function prob(){
    let str = prompt('Название в CSS стиле:');
    let str2 = Array.from(str) ;
    for(let i = 0; i < str2.length;i++){
        if(str2[i] == '-'){
            str2.filter(str2[i]);
            str2.toUpperCase(str2[i+1]);
        }else{
            console.log(str2);
        }
    }
}
prob();