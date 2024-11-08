    
        const form = document.getElementById('form');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('password2');

        // Show input error message
        function showInputError(input, message) {
            const formControl = input.parentElement;
            formControl.className =
                'form-input error animate__animated animate__headShake';
            const small = formControl.querySelector('small');
            small.innerText = message;
            setTimeout(function () {
                formControl.className = 'form-input error';
            }, 500);
        }

        // Show success outline
        function showInputSuccess(input) {
            const formControl = input.parentElement;
            formControl.className =
                'form-input success animate__animated animate__bounceIn ';
        }

        // Check email validity
        function checkEmailValidity(input) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(input.value)) {
                showInputSuccess(input);
            } else {
                showInputError(input, 'Email is not valid');
            }
        }

        // Check required fields
        function checkRequiredFields(inputArr) {
            inputArr.forEach(function (input) {
                if (input.value.trim() === '') {
                    showInputError(input, `${getFieldName(input)}` + ' is required');
                } else {
                    showInputSuccess(input);
                }
            });
        }

        // Check input length
        function checkInputLength(input, min, max) {
            if (input.value.length < min) {
                showInputError(
                    input,
                    `${getFieldName(input)} must be at least ${min} characters`
                );
            } else if (input.value.length > max) {
                showInputError(
                    input,
                    `${getFieldName(input)} must be less than ${max} characters`
                );
            } else {
                showInputSuccess(input);
            }
        }

        // Check Username
        function checkUsername(input) {
            const usr = /^[0-9a-zA-Z]+$/;
            if (!usr.test(input.value)) {
                showInputError(input, 'Username can only contain letters or numbers');
            }
        }

        // Check passwords match
        function checkPasswordMatch(input1, input2) {
            if (input1.value !== input2.value) {
                showInputError(input2, 'Password does not match');
            }
        }
        // Make fieldname first letter uppercase
        function getFieldName(input) {
            return input.id.charAt(0).toUpperCase() + input.id.slice(1);
        }
        // Event Listeners
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            checkRequiredFields([usernameInput, emailInput, passwordInput, confirmPasswordInput]);
            checkInputLength(usernameInput, 3, 15);
            checkInputLength(passwordInput, 6, 25);
            checkInputLength(confirmPasswordInput, 6, 25);
            checkEmailValidity(emailInput);
            checkPasswordMatch(passwordInput, confirmPasswordInput);
            checkUsername(usernameInput);
        });
    


        document.getElementById("form").addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent form from submitting and refreshing the page
        
            // Get form elements
            var Name = document.getElementById('username');
            var Email = document.getElementById('email'); 
            const Password = document.getElementById('password');
            const ConfirmPassword = document.getElementById('password2');
            const danger = document.getElementById('danger');
            const success = document.getElementById('success');
        
            // Validate inputs
            if (Name.value.trim() === '' || Email.value.trim() === '' || Password.value.trim() === '' || ConfirmPassword.value.trim() === '') {
                danger.style.display = 'block'; // Show danger message
                success.style.display = 'none'; // Hide success message
            } else {
                danger.style.display = 'none'; // Hide danger message
                success.style.display = 'block'; // Show success message
        
                // Clear inputs after showing success
                setTimeout(() => {
                    Name.value = ''; 
                    Email.value = '';
                    Password.value = '';
                    ConfirmPassword.value = '';
                }, 2000);
            }
            
            // Hide messages after 2.5 seconds
            setTimeout(() => {
                danger.style.display = 'none';
                success.style.display = 'none';
            }, 2500);
        });
        
    
