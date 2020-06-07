let n1=+prompt('Введіть перше число');
let n2=+prompt('Введіть друге число');
if (Math.abs(n1-10)>Math.abs(n2-10)){
    alert(n2)
}
else if (Math.abs(n1-10)==Math.abs(n2-10)){
    alert('Числа рівні')
}
else {
    alert(n1)
}