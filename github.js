export class Github {
    constructor() {
        this.client_id = '1a2376b88b73e62bc802';
        this.client_secret = 'd02ad6ba293a49b5fa70e18e29f6997586faa82e';
        this.per_page = 10;
        this.sort = 'asc';
    }

    async fetchUserData(username) {
        const profileRes = await fetch(
            `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repoRes = await fetch(
            `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`
        );

        const data = await profileRes.json();
        const repos = await repoRes.json();

        return { data, repos };
    }
}
