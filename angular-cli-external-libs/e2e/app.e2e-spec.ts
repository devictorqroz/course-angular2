import { AngularCliExternalLibsPage } from './app.po';

describe('angular-cli-external-libs App', function() {
  let page: AngularCliExternalLibsPage;

  beforeEach(() => {
    page = new AngularCliExternalLibsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
