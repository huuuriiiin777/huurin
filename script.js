const CLIENT_ID = 'YOUR_CLIENT_ID';
const REDIRECT_URI = 'https://yourusername.github.io/your-repo-name/callback.html';
const DISCORD_ENDPOINT = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=identify%20guilds.join`;

document.getElementById('auth-button').addEventListener('click', () => {
    window.location.href = DISCORD_ENDPOINT;
});
