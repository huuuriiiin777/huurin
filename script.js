const CLIENT_ID = '1256165703497809970';
const REDIRECT_URI = 'https://huuuriiiin777.github.io/huurin/callback.html';
const DISCORD_ENDPOINT = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=identify%20guilds.join`;

document.getElementById('auth-button').addEventListener('click', () => {
    window.location.href = DISCORD_ENDPOINT;
});
