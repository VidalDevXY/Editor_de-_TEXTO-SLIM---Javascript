
let optionsButtons = document.querySelectorAll(".option-button"); 
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");                                
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");    

// ====  Lista de Fuentes === //
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

// ====  Inicio ajustes === //
const initializer = () => {
    //funcion llamada de highlighting botones
    //No highlighting de link, unlink, lists, undo, redo ya que son operaciones de una sola vez.

    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);
};

//---- Highlight clicked button ----//
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            //needRemoval = significa que solo un boton debe estar en highlight y otro sería normal
            if(needsRemoval) {
                let alreadyActive = false;

                //Si el boton esta actualmente presionado ya esta activo
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                //Remover highlight de otros botones
                highlighterRemover(className);
                if (!alreadyActive) {
                    //highlight presionando el boton
                    button.classList.add("active");
                }
            }
            else {
                //si otros botones pueden ser highlighted
                button.classList.toggle("active");
            }
            
        });
    });
};

window.onload = initializer();