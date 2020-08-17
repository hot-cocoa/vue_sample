import JudgeRepository from './JudgeRepository';

const repositories = {
    'posts': PostsRepository
};

export default {
    get: name => repositories[name]
};