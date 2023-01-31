const getElementsByTag = require('./getelementsbytag');

describe('Get Elements By Tag', () => {
  it('should be a function', () => {
    expect(typeof getElementsByTag).toEqual('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });

  it('should return an empty array if no root is passed in', () => {
    expect(getElementsByTag()).toEqual([]);
  });

  it('should return only the root element if no tagName is passed in', () => {
    const root = document.createElement('div');
    expect(getElementsByTag(root)).toEqual([root]);
  });

  it('should return the correct elements', () => {
    const root = document.createElement('div');

    // Add some child elements to the root
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const span = document.createElement('span');

    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);

    const result = getElementsByTag(root, 'p');

    expect(result).toEqual([p1, p2]);
  });
});
