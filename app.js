window.onload = () =>
    //the function called when Calculate button is clicked.
    {
        /*calling a function calculateTip
         which will calculate the tip for the bill.*/
        document.querySelector('#amount').onchange = calculateTip;
		document.querySelector('#myrange').oninput = calculateTip;
		// document.querySelector('#persons').oninput = calculateTip;
		    }
 
function calculateTip() {
    /*assign values of ID : amount, person and service to 
    variables for further calculations.*/
    let amount = document.querySelector('#amount').value;
    // let persons = document.querySelector('#persons').value;
    let myrange = document.querySelector('#myrange').value;
	let rangeValue=document.querySelector('#rangeValue');
	let tipAmount=document.querySelector('#tipAmount');
	let billTotal=document.querySelector('#billTotal');
	// let tipAmountEach=document.querySelector('#tipAmountEach');
	// let billTotalEach=document.querySelector('#billTotalEach');
	rangeValue.value=myrange;
 
    console.log(myrange);
    /*if statement will work when user presses 
          calculate without entering values. */
    //so will display an alert box and return.
    if (amount === '' || isNaN(amount)) {
        alert("Please enter valid values for total bill amount");
        return;
    }
	// if (persons === '' || isNaN(persons)) {
    //      alert("Please enter valid values for number of persons");
    //     return;
    //  }
 
    //now we are checking number of persons 
    // if (persons === '1')
    // //if there is only one person then we need not to display each.
    //     document.querySelector('#each').style.display = 'none';
    // else
    // //if there are more than one person we will display each.  
    //     document.querySelector('#each').style.display = 'block';
 
    /*calculating the tip by multiplying total-bill and type of
     service; then dividing it by number of persons.*/
    //fixing the total amount upto 2 digits of decimal
    let totalTip = (amount * myrange) / 100;
   
	let totalBill = amount *(1+myrange/100);

	// let totalTipEach = (amount * myrange) / 100 / persons;
   
	// let totalBillEach = (amount *(1+myrange/100))/ persons;
	
	tipAmount.value=totalTip.toFixed(2);
	billTotal.value=totalBill.toFixed(2);
	// tipAmountEach.value=totalTipEach.toFixed(2);
	// billTotalEach.value=totalBillEach.toFixed(2);
 
    //finally displaying the tip value 
    // document.querySelector('.tip').style.display = 'block';
    // document.querySelector('#total').innerHTML = total;
}
