let loanAmount = document.getElementById("loanAmount")
let aprAmount  = document.getElementById("aprAmount")
let loanTerm    = document.getElementById("loanTerm")
let textMonthlyPay = document.getElementById("monthly-payment")

// function to calculate the total amount per payment
function calculatePayments(){
    //
    if(validateForm == true){
        let modApr = formatApr(aprAmount.value)
        // calculates the interest per year and per month
        let interestperYear = loanAmount.value * modApr
        let intperMonth     = interestperYear / 12
        // calculates the amount of the principal in the terms and then adds up the interest per month
        let amountInTerms   = loanAmount.value / loanTerm.value
        let paymentPerMonth = amountInTerms + intperMonth
    
        // display the amounts on the text fields
        textMonthlyPay.innerHTML = paymentPerMonth.toFixed(2)
           
    }

    

}
// modifies the apr for calculation
function formatApr(apr){
    let newApr = apr / 100
    return newApr
}

// validates that all fields are not null or at 0
function validateForm(){
    return true
}