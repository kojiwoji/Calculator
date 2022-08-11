console.log("This is supposed to be a calculator")

document.getElementById('answer').readOnly = true
let screen = document.getElementById('answer');
buttons = document.querySelectorAll('button');

let screenValue = '';
// checking every button with click
for (everyButton of buttons) {
	everyButton.addEventListener('click', (element) => {
		buttonText = element.target.innerText;
		if (buttonText == 'x') {
			buttonText = '*';
			screenValue += buttonText;
			screen.value = screenValue;
		}
		else if (buttonText == 'C') {
			screenValue = "";
			screen.value = screenValue;
		}
		else if(buttonText == "=") {
			screen.value = eval(screenValue);
		}
		else {
			screenValue += buttonText;
			screen.value = screenValue;
		}
	})
}

document.addEventListener("keydown", function(event) {
	console.log(event.which);
	// changes so we can calculate these later
	if(event.shiftkey==57){
		event.key = '('
	}
	else if(event.shiftkey==48){
		event.key = ')';
	}
	else if(event.shiftKey==53){
        event.key = '%';
    }
    else if(event.keyCode==88 || event.shiftKey==192){
        screenValue += '*';
        screen.value = screenValue;
    }
    // Prints key value on input field.
    if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=="." || event.key=="/" || event.key=="%" || event.key=="(" || event.key==")"){
    	screenValue = event.key;
    	screen.value = screenValue;
    }
    // Delete Key
    if(event.keyCode == 46){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    // Backspace Key
    else if(event.keyCode == 8){
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    }
    // C Key
    else if(event.keyCode == 67){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    // R key
    else if(event.keyCode == 82){
        location.reload();
    }

})
window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screenValue = "";
      screen.value = screenValue;
      console.clear();
  }
