import PostsRepository from './PostsRepository';

const repositories = {
    'posts': PostsRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};