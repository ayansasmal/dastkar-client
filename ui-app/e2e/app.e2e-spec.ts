import { UiAppPage } from './app.po';

describe('ui-app App', () => {
  let page: UiAppPage;

  beforeEach(() => {
    page = new UiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
