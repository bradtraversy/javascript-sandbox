const anagram = require('./anagram');

describe('Anagram', () => {
  it('should be a function', () => {
    expect(typeof anagram).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof anagram('ram', 'arm')).toEqual('boolean');
  });
  it('should return true if anagram', () => {
    expect(anagram('ram', 'arm')).toBeTruthy();
    expect(anagram('cinema', 'iceman')).toBeTruthy();
    expect(anagram('god', 'dog')).toBeTruthy();
  });
  it('should return false if not anagram', () => {
    expect(anagram('hello', 'fellow')).toBeFalsy();
    expect(anagram('world', 'twirl')).toBeFalsy();
    expect(anagram('cost', 'lost')).toBeFalsy();
  });
});
