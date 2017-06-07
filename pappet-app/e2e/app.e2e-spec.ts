import { PappetAppPage } from './app.po';

describe('pappet-app App', () => {
  let page: PappetAppPage;

  beforeEach(() => {
    page = new PappetAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
