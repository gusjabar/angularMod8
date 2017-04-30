import { AngularMod8Page } from './app.po';

describe('angular-mod8 App', () => {
  let page: AngularMod8Page;

  beforeEach(() => {
    page = new AngularMod8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
