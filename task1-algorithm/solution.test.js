const { TreeNode, maxDepth } = require('./solution');

describe('maxDepth', () => {
  test('Példa 1: Kiegyensúlyozott fa', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    
    expect(maxDepth(root)).toBe(3);
  });

  test('Példa 2: Csak jobb oldali fa', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    
    expect(maxDepth(root)).toBe(2);
  });

  test('Példa 3: Üres fa', () => {
    expect(maxDepth(null)).toBe(0);
  });

  test('Példa 4: Csak egy csomópont', () => {
    const root = new TreeNode(0);
    
    expect(maxDepth(root)).toBe(1);
  });

  test('Példa 5: Csak bal oldali fa', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    
    expect(maxDepth(root)).toBe(4);
  });

  test('Példa 6: Komplex fa', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(6);
    root.left.left.left = new TreeNode(7);
    
    expect(maxDepth(root)).toBe(4);
  });
});