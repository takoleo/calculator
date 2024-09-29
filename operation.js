
//function operation

function calculator(event){
    event.preventDefault();
    console.log(event)

    const ValueOfFirstNumber=document.getElementById("firstNumber").value;
    console.log(ValueOfFirstNumber, typeof ValueOfFirstNumber);

    const ValueOfSecondNumber=document.getElementById("secondNumber").value;
    console.log(ValueOfSecondNumber,typeof ValueOfSecondNumber)

    const operation=document.getElementById("operation").value;
    console.log(operation,typeof operation);

    let result=0;
    if(operation === "1"){
        result =(1*ValueOfFirstNumber) + (1*ValueOfSecondNumber);
    }else if (operation==="2"){
        result=parseInt(ValueOfFirstNumber)* parseInt(ValueOfSecondNumber);
    }else if (operation==="3"){
        result=parseInt(ValueOfFirstNumber)-parseInt(ValueOfSecondNumber);
    }else if(operation==="4"){
        result=parseInt(ValueOfFirstNumber)/ parseInt(ValueOfSecondNumber);
    }else if(operation==="5"){
        result=parseInt(ValueOfFirstNumber)%parseInt(ValueOfSecondNumber);
    }
    document.getElementById("result").innerHTML= `${result}`
    console.log(result,typeof result);


}
