/* Focus */
const inputs = document.querySelectorAll(".form__input");

/* Add the focus */
function addFocus(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
};

/* Remove Focus */
function remFocus(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    };
};

/* To call function */
inputs.forEach(input=>{
    input.addEventListener("focus", addFocus);
    input.addEventListener("blur", remFocus);
});