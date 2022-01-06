import { SanitizerurlPipe } from './sanitizerurl.pipe';

describe('SanitizerurlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizerurlPipe();
    expect(pipe).toBeTruthy();
  });
});
