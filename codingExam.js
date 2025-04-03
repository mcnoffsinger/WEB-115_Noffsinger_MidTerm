let button = document.getElementById("button1");
let results = document.getElementById("results");



button.addEventListener("click", function(){
    
    //Prompt the user
    let loan = Number(window.prompt("Enter the loan amount, just numbers no decimals or commas."));
    let downpercent = Number(window.prompt("Enter a downpayment as a percentage of the loan amount, no decimal pont, just a number. Ex: 15 instead of .15 or 15%"));
    let down = Number((loan * (downpercent/100)));
    let term = Number(window.prompt("enter loan term, only 15 or 30."));
    
    let rate = .0575;
    let principal = loan  - down;

    //calculate
    try{
    let monthlyPayment = Number((((rate/12)*principal)/(1 - Math.pow(1 + (rate / 12),(term * -12)))).toFixed(2))


    let totalInterest = Number((monthlyPayment * term * 12)-loan)
    
    
    let mortgageAmount = loan + totalInterest
    //print stuff
    let years = document.createElement("p")
    years.innerText = "Years: " + String(term);
    results.appendChild(years)

    let etar = document.createElement("p")
    etar.innerText = "Interest rate: " + String(rate*100)+ "%";
    results.appendChild(etar)

    let total = document.createElement("p")
    total.innerText = "Total Mortgage: $" + String(Number(mortgageAmount));
    results.appendChild(total)

    let totalinteeerrst = document.createElement("p")
    totalinteeerrst.innerText = "Total Interest: $" + String(Number(totalInterest).toFixed(2));
    results.appendChild(totalinteeerrst)

    let monthpay = document.createElement("p")
    monthpay.innerText = "Monthly Payment: $" + monthlyPayment;
    results.appendChild(monthpay)


    loan = principal
    //big boy time
    let i = 1
    while (loan > 0){
        let interestPaid = ((loan*rate)/12).toFixed(2)
        let realPaid = (Number(monthlyPayment) - Number(interestPaid)).toFixed(2)
        loan = (loan - realPaid).toFixed(2)




        let thingy = document.createElement("p")
        thingy.append("Month #" + i + "\n")
        thingy.append("interest Paid: $"+ interestPaid + "\n")
        thingy.append("Real amount paid towards loan: $" + realPaid + "\n")
        thingy.append("Loan remaining: $" + loan
        )
        
        i++
        results.appendChild(thingy);
        if (i>term*12){
            break
        }
        

        
    }



    }catch(TypeError){
        window.alert("please try again")
    }
    

    
    



















})