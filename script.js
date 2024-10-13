// Generate a random number between 1 and 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let attempts = 0;
        
        function checkGuess() {
            const guessInput = document.getElementById('guessInput').value;
            const message = document.getElementById('message');
        
            // Check if the input is a valid number between 1 and 10
            if (isNaN(guessInput) || guessInput < 1 || guessInput > 10) {
                message.textContent = "Invalid input: Please input a number between 1 and 10.";
                return;
            }
        
            // Increment attempts
            attempts++;
        
            // Check if the guess is correct
            if (parseInt(guessInput) === randomNumber) {
                message.innerHTML = `Congratulations Mr. John Paul Magno! <br> You've guessed the correct number
                <span class="random-number">${randomNumber}</span> in <span class="attempts">${attempts}</span> attempts.`;
                message.classList.add("congratulations-message"); // Add class for styling
            } else if (parseInt(guessInput) < randomNumber) {
                message.textContent = "Too low! Try again.";
            } else {
                message.textContent = "Too high! Try again.";
            }
        }