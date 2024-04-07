function calculate() {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let operator = document.getElementById("operator").value;

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById("result").innerText = "Please enter valid numbers !!";
            document.getElementById("resultAlert").className = "alert alert-danger mt-3";
            document.getElementById("resultAlert").style.display = "block";
            return;
        }
        let result;

        switch(operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if(num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Error: Division by zero";
                }
                break;
            default:
                result = "Invalid operator"; 
        }
      
        document.getElementById("result").innerText = "Your Result : " + result;
        document.getElementById("resultAlert").style.display = "block";
        
    }