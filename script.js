mystorage=[];

window.onload = function(){
    ProcessValues(event);
    document.querySelector("input").addEventListener("keydown", function (e) {
        
        if(e.key === "Enter" || e.key === "="){
            try {
                myAnswer = math.evaluate(document.querySelector(".display").value);
                document.querySelector(".display").value = myAnswer;
            }
            catch (e) {
                errorPopup.style.display = "block";
                popuptext.innerHTML = e.message;
            }
        }

    })
}

    const ProcessValues = () =>{
        errorPopup = document.querySelector(".popup");
        popuptext = document.querySelector(".popup-text");
        allButtons = document.querySelectorAll(".cal-btn");
        for(let i = 0; i < allButtons.length; i++){

            allButtons[i].addEventListener("click", function (e){

                currentValue = e.currentTarget.innerHTML;

                
                if(currentValue === "AC"){
                    mystorage = [];
                    document.querySelector(".display").value = "";
                }

                else if (currentValue === "=") {
                    try{
                        myAnswer = math.evaluate(document.querySelector(".display").value);
                        document.querySelector(".display").value = myAnswer;
                    }
                    catch(e){
                        errorPopup.style.display = "block";
                        popuptext.innerHTML = e.message;
                    }
                }
                else{

                    if(mystorage.length === 0){
                        document.querySelector(".display").value = "";
                    }

                    mystorage.push(currentValue);
                    document.querySelector(".display").value = mystorage.join('');
                }
            })
        }

    }

function removePopup(){
    errorPopup.style.display = "none";
}

function add(x, y){
    return x + y;
}


    