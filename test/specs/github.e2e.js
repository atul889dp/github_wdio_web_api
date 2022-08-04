import GithubPage from '../pages/github.page';
import GithubAPI from '../api/github.api';
import compareArray from '../utils/compareArrays';

describe('Githib Django', () => {
  it('Verify Githib repositories names with API Data', async () => {
    await GithubPage.open();
    await GithubPage.repositoriesTab.click();
    const repoNamesPage = await (await GithubPage.getRepositoryNames()).sort();
    const repoNamesAPI = await (await GithubAPI.getDjangoRepositoryNames()).sort();
    expect(compareArray(repoNamesPage, repoNamesAPI)).to.equal(true, 'Repository names are not matched for Django');
  });
});
