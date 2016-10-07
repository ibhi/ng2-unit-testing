import { UnitTestingPage } from './app.po';

describe('unit-testing App', function() {
  let page: UnitTestingPage;

  beforeEach(() => {
    page = new UnitTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
