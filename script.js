let count = parseInt(localStorage.getItem('count')) || 0;
        const counterElement = document.getElementById('counter');
        const incrementButton = document.getElementById('incrementButton');
        const decrementButton = document.getElementById('decrementButton');
        const resetButton = document.getElementById('resetButton');

        // Display the saved count on page load
        counterElement.textContent = count;

        incrementButton.addEventListener('click', () => {
            count++;
            counterElement.textContent = count;
            localStorage.setItem('count', count);
        });

        decrementButton.addEventListener('click', () => {
            count--;
            counterElement.textContent = count;
            localStorage.setItem('count', count);
        });

        resetButton.addEventListener('click', () => {
            count = 0;
            counterElement.textContent = count;
            localStorage.setItem('count', count);
        });