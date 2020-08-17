import Repository from './Repository';

const resource = 'server.js';

export default {
    send(payload) {
        return Repository.post(`${resource}`, payload);
    }
};