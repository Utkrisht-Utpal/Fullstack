const deposit = document.querySelector("#dep");
const withdraw = document.querySelector("#with");
const amount = document.querySelector("#amount");
const balance = document.querySelector("#balance");

let savings = 0;
function displayBalance () {balance.innerText = `Balance: $${savings}`}
displayBalance();

deposit.addEventListener('click', () => {
    const fees = Number(amount.value);

    if (isNaN(fees) || fees <= 0) {
        alert("Invalid amount");
        return;
    }

    savings += fees;
    displayBalance();
});

withdraw.addEventListener('click', () => {
    const fees = Number(amount.value);

    if (fees <= 0) {
        console.log("Invalid amount");
        return;
    }

    savings -= fees;
    console.log(savings);
    displayBalance();
});
