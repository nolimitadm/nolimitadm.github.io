// Select the necessary elements from the HTML 

const select = document.querySelector('#operations'); 

const input1 = document.querySelector('#myNumber'); 

const input2 = document.querySelectorAll('#myNumber')[1]; 

const input3 = document.querySelectorAll('#myNumber')[2]; 

const button = document.querySelector('button'); 

  

// Attach a click event listener to the button 

button.addEventListener('click', function() { 

  // Get the selected option from the dropdown menu 

  const option = select.value; 

   

  // Get the user inputs as numbers 

  const num1 = parseFloat(input1.value); 

  const num2 = parseFloat(input2.value); 

  const num3 = parseFloat(input3.value); 



  let BMR = 88.362 + (13.397 * num1) + (4.799 * num2) - (5.677 * num3);

  //if (typeof(BMR) == NaN) {
    //window.alert("Veuillez remplir chaque case avant de cliquer sur le bouton calculer.");
 // };


 
if (typeof(num3) != Number) {
  window.alert("Veuillez remplir chaque case avant de cliquer sur le bouton calculer.");
};
  // Determine which calculation to perform based on the selected option 

  switch(option) { 

    case 'M': 

let a = BMR * 1.5
      //document.write(`La masse molaire est ${num1 / num2} g/mol`); 
      document.getElementById("Output").innerHTML += " Votre TDEE est de "+ a +" Calories par jour"

      break; 

    case 'm': 
let b = BMR * 1.2
      //alert(`La masse de la substance est ${num1 * num2} g`); 
      document.getElementById("Output").innerHTML += " Votre TDEE est de "+ b +" Calories par jour"
      break; 

    case 'nm': 
let c = BMR * 1.7
      //alert(`Le nombre de mole est ${num1 / 6.02214076e23}`); 
      document.getElementById("Output").innerHTML += " Votre TDEE est de "+ c +" Calories par jour"
      break; 

    default: 

      alert('Veuillez choisir une option'); 

  } 

}); 