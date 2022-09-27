let button = document.getElementById("paragraph");
let count = 0;

function counter(){
    count +=1
    button.innerText = count + " keer op geklikt"   
    document.body.style.backgroundColor = "blue"
}

function counter1(){
    count -=1
    button.innerText = count + " keer op geklikt"
    document.body.style.backgroundColor = "red"

}

