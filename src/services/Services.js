export default class Services {
    _API = "https://blog.kata.academy/api/";
    _TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTlhMWYwMjA3NTk0MWIwMGU0N2RlZCIsInVzZXJuYW1lIjoibWlzaGEiLCJleHAiOjE2NzcyNDU0MjQsImlhdCI6MTY3MjA2MTQyNH0.gKNBk_ZhIUpk6KwS-_gw7246kSrevvjZHvlGvJeNvQE";

    async getResourse(url){
        const headers = { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${this._TOKEN}` }
        const res = await fetch(`${this._API}${url}`, {
                method: 'GET',
                headers,
            })

            if (!res.ok) {
                throw new Error(res.status)
            }
        return res.json()
    }

    async getArticles(page){
        const articles = await this.getResourse(`articles?limit=5&offset=${(page - 1) * 5}`);
        return articles;
    }
    
    async getArticle(id) {
        const article = await this.getResourse(`articles/${id}`)
        return article
    }
}