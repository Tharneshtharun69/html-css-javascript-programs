document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.querySelector('form[action="/submit"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (!email || !password) {
                e.preventDefault();
                alert('Please fill out all fields.');
            }
        });
    }
    const registrationForm = document.querySelector('form[action="/submit"]');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (!email || !password || !confirmPassword) {
                e.preventDefault();
                alert('Please fill out all fields.');
            } else if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match.');
            }
        });
    }
    const resetForm = document.querySelector('form[action="/submit"]');
    if (resetForm) {
        resetForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmNewPassword = document.getElementById('confirm-new-password').value;

            if (!email || !newPassword || !confirmNewPassword) {
                e.preventDefault();
                alert('Please fill out all fields.');
            } else if (newPassword !== confirmNewPassword) {
                e.preventDefault();
                alert('New passwords do not match.');
            }
        });
    }
});
