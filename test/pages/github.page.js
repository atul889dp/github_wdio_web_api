import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class GithubPage extends Page {
  /**
     * define selectors using getter methods
     */
  get repositoriesTab() { return $('li[data-tab-item="org-header-repositories-tab"]'); }

  get repositoryNames() { return $$('a[data-hovercard-type="repository"]'); }

  /**
     * overwrite specific options to adapt it to page object
     */
  open() {
    return super.open();
  }

  async getRepositoryNames() {
    const names = [];
    await this.repositoryNames.forEach(async (element) => {
      const elementTxt = await element.getText();
      names.push(elementTxt);
    });
    return names;
  }
}

export default new GithubPage();
