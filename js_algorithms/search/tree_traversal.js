const tree = [
  {
    value: 5,
    c: [
      {
        value: 10,
        c: [
          {
            value: 11,
          },
        ],
      },
      {
        value: 7,
        c: [
          {
            value: 5,
            c: [
              {
                value: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 5,
    c: [
      {
        value: 10,
      },
      {
        value: 15,
      },
    ],
  },
];

function treeTraversal(tree) {
  let sum = 0;

  tree.forEach(node => {
    sum += node.value;

    if (!node.c) {
      return node.value;
    }

    sum += treeTraversal(node.c);
  });

  return sum;
}

console.log(treeTraversal(tree));
