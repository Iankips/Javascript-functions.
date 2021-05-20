// Question 1.
var fahr = 0;
var now = isNaN(fahr)
function convertFahrToCelsius(F){
    let $;
    if(now===true){
        console.log(F + " is not a valid number but a/an "+ typeof(F))
    }
    else{
        const result = (F-32)*5/9;
        let outcome = result.toFixed(4);
        console.log("The celcius is: "+outcome);
    }

}
convertFahrToCelsius(fahr)


//Question 2.
const checkYuGioh = (n) =>{
    let test = isNaN(n)
    if(test === false){
        const arr = Array.from(Array(n), (_, index) => index + 1);
    let newArr = arr.map((number)=>{
            if (number % 2 === 0){
          return number = 'yu';
      }
      else if (number % 3 === 0){
          return number = 'gi';
      }else if(number % 5 === 0){
          return number = 'oh';
      }
      else if(((number % 2)||(number % 3)||(number % 5)) === 0){
          return number = "yu-gi-oh";
      }
      return number;
      
    });
    console.log(newArr);
    }
    else{
        console.log("Invalid parameter: "+ typeof(n));
    }
    }
    checkYuGioh(10);
    