let a = +prompt("Введіть число 'a'");
let b = +prompt("Введіть число 'b'");
let c = +prompt("Введіть число 'c'");
let d = Math.pow(b,2)-4*a*c;
if (d>0) {
    document.write('x1=' + (-b + Math.sqrt(d))/(2*a) + '   ');

    document.write('x2=' + (-b - Math.sqrt(d))/(2*a))
}
else if (d==0) {
    document.write('x1=x2=' + (-b)/(2*a))
}
else {
    document.write('Дійсних коренів немає')
}