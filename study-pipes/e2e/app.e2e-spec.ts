import { StudyPipesPage } from './app.po';

describe('study-pipes App', function() {
  let page: StudyPipesPage;

  beforeEach(() => {
    page = new StudyPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
