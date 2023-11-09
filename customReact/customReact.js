const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://goolge.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const customRenderer = (container, element) => {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;

  for (const prop in element.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, element.props[prop]);
  }

  container.appendChild(domElement);
};

customRenderer(mainContainer, reactElement);
