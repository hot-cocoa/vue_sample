import Repository from './Repository';

const resource = '/app';

export default {
  send(payload) {
    return Repository.post(`${resource}`, payload);
  }
};