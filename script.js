//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', () => {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const rememberCheckbox = document.getElementById('checkbox');
            const loginForm = document.getElementById('loginForm');
            const existingButton = document.getElementById('existing');

            // Check if user details exist in localStorage
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');

            if (savedUsername && savedPassword) {
                existingButton.style.display = 'block';
            }

            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();

                const username = usernameInput.value;
                const password = passwordInput.value;

                if (rememberCheckbox.checked) {
                    // Save details in localStorage
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    // Remove details from localStorage
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }
				alert(`Logged in as ${username}`);

                // Show existing user button if details are saved
                if (localStorage.getItem('username') && localStorage.getItem('password')) {
                    existingButton.style.display = 'block';
                }
            });

            existingButton.addEventListener('click', () => {
                const username = localStorage.getItem('username');
                alert(`Logged in as ${username}`);
            });
        });