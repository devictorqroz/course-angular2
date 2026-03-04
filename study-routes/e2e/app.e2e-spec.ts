import { StudyRoutesPage } from './app.po';

describe('study-routes App', function() {
  let page: StudyRoutesPage;

  beforeEach(() => {
    page = new StudyRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
