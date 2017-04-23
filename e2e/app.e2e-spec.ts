import { CodeChallengePage } from './app.po';

describe('code-challenge App', function() {
  let page: CodeChallengePage;

  beforeEach(() => {
    page = new CodeChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
