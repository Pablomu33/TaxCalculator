function obtenerElementos(){
const anual = document.getElementById("anual").value;
const bruto = document.getElementById("bruto").value;
const fradag = document.getElementById('fradag').value;
const descuento = document.getElementById('descuento').value;
const amTax = 8;
const holidays = (parseFloat(bruto)*12.5)/100;
const holidaysBTax = ((holidays*8) / 100);
const holidaysB = holidays - holidaysBTax
const holidaysATax = (holidaysB * parseFloat(descuento)/100)
const holidaysA = (holidays - holidaysBTax) - holidaysATax


if (anual<= 50000) {

    ferieB = parseFloat(bruto)
    sinFradag = parseFloat(bruto)- parseFloat(fradag);
    impB = (parseFloat(sinFradag)*parseFloat(amTax))/100;  
    afterTax = parseFloat(bruto) - parseFloat(impB) ;
    text ='Your salary after taxes will be: DKK' + afterTax + ' and you holidays payment will be: DKK' + holidaysB;;
    document.getElementById('resultado').innerHTML = text;
    document.getElementById('resultado').classList.add('resultado')
  } else {

 sinFradag = parseFloat(bruto) - parseFloat(fradag);
 impB = (parseFloat(sinFradag)*parseFloat(amTax))/100;
 impAB =  parseFloat(sinFradag) - impB
 impA = (parseFloat(impAB)*parseFloat(descuento))/100;
 taxes = parseFloat(impB) + parseFloat(impA)
 afterTax = parseFloat(bruto) - parseFloat(taxes)
 text= 'Your salary after taxes will be: DKK' + afterTax + ' and you holidays payment will be: DKK' + holidaysA;

}

 document.getElementById('resultado').innerHTML = text
 document.getElementById('resultado').classList.add('resultado')

 

}




