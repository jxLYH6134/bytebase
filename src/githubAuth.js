const CLIENT_ID = 'Ov23lih2npmim7CQWBqD';
const REDIRECT_URI = 'https://jxlyh6134.github.io/bytebase/';

export async function githubLogin() {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;

    // 跳转到 GitHub 登录
    window.location.href = githubAuthUrl;
}

export async function handleGithubCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) return null;

    // 调用后端交换 access token
    const res = await fetch('https://api.crychic.link/auth/github', {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({code}),
    });
    const data = await res.json();
    return data.user; // { login, avatar_url, ... }
}
