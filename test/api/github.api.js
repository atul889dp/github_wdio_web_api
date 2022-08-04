import jsonpath from 'jsonpath';
import BaseAPI from './utils.api';
import config from '../utils/config.json';

/**
 * ---
 */
class GithubAPI {
  async getDjangoRepositoryNames() {
    const repositories = await BaseAPI.getRequest(config.apiUrl);
    const body = await repositories.json();
    const repositoryNames = await jsonpath.query(body, '$[*].name');
    return repositoryNames;
  }
}

export default new GithubAPI();
