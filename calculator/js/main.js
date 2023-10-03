let screen = document.querySelector(".screen");
let box = document.querySelectorAll(".box");

for(i=0 ; i<box.length ; i++){
    box[i].addEventListener("click", function() {
        this.classList.add('active'); // Use 'this' to refer to the clicked element
        setTimeout(() => {
            addActive()
        },400)
    });    
   
}

function insertNum(num) {
    screen.append(num);
    addActive()
}
function operation(op) {
    screen.append(op);
    addActive()
}
function clearS (){
    screen.innerHTML = "";
    addActive()
}
function del(){
    screen.innerHTML = screen.innerHTML.slice(0,-1);
    addActive()
}
function equal(){
    console.log(screen.innerHTML)
    if (Number.isInteger(parseInt(screen.innerHTML))) {
        screen.innerHTML = eval(screen.innerHTML);
    }else{
        screen.innerHTML = eval(screen.innerHTML).toFixed(2);
    }
    addActive()
}

function addActive() {
    box.forEach((item) => {
        item.classList.remove("active");
    });
}