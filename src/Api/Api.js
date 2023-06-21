import axios from 'axios';

const api = {
    baseUrl: 'https://aviasales-test-api.kata.academy',
    searchId: '',

    async getId() {
        try {
            const { data } = await axios.get(`${this.baseUrl}/search`);

            const { searchId } = data;

            this.searchId = searchId;

            return searchId;
        } catch (e) {
            return null;
        }
    },

    async getTickets() {
        const { data } = await axios.get(`${this.baseUrl}/tickets?searchId=${this.searchId}`);

        const { stop } = data;

        if (!stop) {
            const { tickets } = data;
            return { tickets, dataLoadStop: false }; // можно убрать ключ?
        }

        return { tickets: [], dataLoadStop: true };
    },
};

export default api;
