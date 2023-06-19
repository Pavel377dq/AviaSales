import axios from 'axios';

export async function getId() {
    try {
        const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');

        const { searchId } = data;

        return searchId;
    } catch (e) {
        return null;
    }
}

export async function getTickets(searchId) {
    const { data: dataRespo } = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

    const { stop } = dataRespo;

    if (!stop) {
        const { tickets } = dataRespo;
        return { tickets, dataLoadStop: false }; // можно убрать ключ?
    }

    return { tickets: [], dataLoadStop: true };
}
