function home() {
    //percents
    document.getElementById("nPercent").innerHTML = 
    "Needs: " + "*needs percent*" + "%";
    document.getElementById("wPercent").innerHTML = 
    "Wants: " + "*wants percent*" + "%";
    document.getElementById("sPercent").innerHTML = 
    "Savings: " + "*savings percent*" + "%";
    //budgeted
    document.getElementById("nBudgeted").innerHTML = 
    "Budgeted: $" + "*needs budgeted*";
    document.getElementById("wBudgeted").innerHTML = 
    "Budgeted: $" + "*wants budgeted*";
    document.getElementById("sBudgeted").innerHTML = 
    "Budgeted: $" + "*savings budgeted*";
    //remaining
    document.getElementById("nRemain").innerHTML = 
    "Remaining: $" + "*needs remaining (budgeted-expenses)*";
    document.getElementById("wRemain").innerHTML = 
    "Remaining: $" + "*wants remaining (budgeted-expenses)*";
    //pie chart
    document.getElementById("pSavings").value = "*savings percent*";
    document.getElementById("pWants").value = "*wants percent*";
    document.getElementById("pNeeds").value = "*needs percent*";
}
function edit() {
    //form
    //percent values
    document.getElementById("Npercent").value = "*needs percent*";
    document.getElementById("Wpercent").value = "*wants percent*";
    document.getElementById("Spercent").value = "*savings percent*";
    //frequency
    document.getElementById("pNeeds").value = "*needs percent*";
}
function wants() {
    //wants page
    document.getElementById("wPPercent").innerHTML = 
    "Wants: " + "*wants percent*" + "%";
    document.getElementById("wPBudgeted").innerHTML = 
    "Budgeted: $" + "*wants budgeted*";
    document.getElementById("wPRemain").innerHTML = 
    "Remaining: $" + "*wants remaining (budgeted-expenses)*";
    document.getElementById("wPSpent").innerHTML = 
    "Spent: $" + "*wants remaining (budgeted-expenses)*";
    document.getElementById("nPExpenses").innerHTML = 
    "*list expenses*";
}
function needs() {
    //wants page
    document.getElementById("nPPercent").innerHTML = 
    "Needs: " + "*needs percent*" + "%";
    document.getElementById("nPBudgeted").innerHTML = 
    "Budgeted: $" + "*needs budgeted*";
    document.getElementById("nPRemain").innerHTML = 
    "Remaining: $" + "*needs remaining (budgeted-expenses)*";
    document.getElementById("nPSpent").innerHTML = 
    "Spent: $" + "*needs remaining (budgeted-expenses)*";
    document.getElementById("nPExpenses").innerHTML = 
    "*list expenses*";
}