const text = 'Hello World';

test('Should be a text', () => {
    expect(text).toMatch(/Hello World/);
});