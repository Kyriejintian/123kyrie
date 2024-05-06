// 获取元素
const usernameInput = document.getElementById('username');
const setUsernameButton = document.getElementById('setUsername');
const getUsernameButton = document.getElementById('getUsername');
const deleteUsernameButton = document.getElementById('deleteUsername');

// 设置Cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/;`;
}

// 获取Cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`, true, 'i')) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

// 设置用户名
setUsernameButton.addEventListener('click', () => {
    const username = usernameInput.value;
    setCookie('username', username, 30);
    alert(`Username ${username} saved!`);
});

// 获取用户名
getUsernameButton.addEventListener('click', () => {
    const username = getCookie('username');
    alert(`Username is ${username}`);
});

// 删除用户名
deleteUsernameButton.addEventListener('click', () => {
    setCookie('username', '', -1);
    alert('Username deleted!');
});