function createDom(root) {
  if (typeof root == "string") {
    return document.createTextNode(root);
  }

  const { type, attributes, children } = root;

  const elem = document.createElement(type);

  if (attributes) {
    for (let key in attributes) {
      elem.setAttribute(key, attributes[key]);
    }
  }

  if (children) {
    children.forEach((c) => {
      elem.appendChild(createDom(c));
    });
  }

  return elem;
}

console.log(
  createDom({
    type: "input",
    attributes: {
      type: "password",
      class: "my-input",
      placeholder: "type your password",
    },
    children: [
      "Hello",
      {
        type: "strong",
        children: ["World"],
      },
    ],
  })
);
