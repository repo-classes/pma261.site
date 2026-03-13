
const API_BASE_URL = 'http://localhost:8080';

const register = async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    if (response.ok) {
        alert('Account registered successfully!');
    } else {
        alert('Failed to register account.');
    }
};

const loadAccounts = () => {
    fetch(`${API_BASE_URL}/accounts`)
        .then(response => response.json())
        .then(data => {
            const accountList = document.getElementById('accountList');
            accountList.innerHTML = '';
            data.forEach(account => {
                const li = document.createElement('li');
                li.textContent = `${account.name} (${account.email})`;
                accountList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching accounts:', error));
}
