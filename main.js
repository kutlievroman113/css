
function mask(event) {
    let blank = "+_ (___) ___-__-__";
    let i = 0;
    let val = this.value.replace(/\D/g, "").replace(/^8/, "7").replace(/^9/, "79").replace(/^3/, "73"); 
    
    this.value = blank.replace(/./g, function(char) {
        if (/[_\d]/.test(char) && i < val.length) return val.charAt(i++);

        return i >= val.length ? "" : char;
    });

    if (event.type == "blur") {
        if (this.value.length == 2) this.value = "";
    } else {
        setCursorPosition(this, this.value.length);
    }
};


function setCursorPosition(elem, pos) {
    elem.focus();

    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
        return;
    }

    if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
        return;
    }
}

let input_phone_all = document.querySelectorAll("._js_phone");

if (input_phone_all) {
    input_phone_all.forEach((phone_input)=> {
        phone_input.addEventListener("input", mask, false);
        phone_input.addEventListener("focus", mask, false);
        phone_input.addEventListener("blur", mask, false);
    })

}
