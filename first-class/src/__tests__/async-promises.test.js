const asyncCallback = (cb) => {
  setTimeout(() => cb(true), 1000)
};
const asyncPromise = () => new Promise((resolve) => resolve(true));

describe('async test', () => {
  it('example async with callback', (done) => {
    asyncCallback((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('example async with Promises', () => {
    return asyncPromise().then((result) => expect(result).toBe(true))
  });

  it('example async with async await', async () => {
    const result = await asyncPromise()
    expect(result).toBe(true)
  });

});