const CLIENT_ID = '1256165703497809970';
const REDIRECT_URI = 'https://huuuriiiin777.github.io/huurin/callback.html';
const DISCORD_ENDPOINT = `https://discord.com/oauth2/authorize?client_id=1256165703497809970&response_type=code&redirect_uri=https%3A%2F%2Fhuuuriiiin777.github.io%2Fhuurin%2Fcallback.html&scope=guilds.join`;

document.getElementById('auth-button').addEventListener('click', () => {
    window.location.href = DISCORD_ENDPOINT;
});
