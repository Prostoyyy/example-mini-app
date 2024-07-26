document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const balanceText = document.getElementById('balance');

    // Initialize balance from localStorage
    let balance = localStorage.getItem('balance') ? parseInt(localStorage.getItem('balance')) : 0;
    balanceText.innerText = `Balance: ${balance} TESTCLICK`;

    clickButton.addEventListener('click', function() {
        balance += 1;
        balanceText.innerText = `Balance: ${balance} TESTCLICK`;
        localStorage.setItem('balance', balance);
    });
});
