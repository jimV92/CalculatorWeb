const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){ // --- DISPLAY "C" CLEAR
            display.innerText="";
        }else if(item.id=="backspace"){ // --- DISPLAY "<" RETROCEDER
            let string = display.innerText.toString(); //convertir a String
            display.innerText = string.substr(0,string.length-1); //buscar y recolecta el ultimo caracter del string
        }else if(display.innerText !="" && item.id=="equal"){ // --- DISPLAY "=" NO VACIO
            display.innerText = eval(display.innerText); //let cadena = "2+2" --> eval lo toma cadena string y lo toma como 4 -> operacion aritmetica
        }else if(display.innerText=="" && item.id=="equal"){ // --- DISPLAY "=" VACIO
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""),2000);//en 2 seg desaparecer texto null
        }else{
            display.innerText+=item.id; // --- DISPLAY EN SU TEXTO INTERNO LE ADJUNTAMOS EL ITEM ID DE LOS NUMEROS Y SIMBOLOS
        }
    };
});

//SWITCH PARA DARK
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark = !isDark;
}

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click',() => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    isDark = !isDark;

})