import { AnimaPage } from './app.po';

describe('anima App', () => {
  let page: AnimaPage;

  beforeEach(() => {
    page = new AnimaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
