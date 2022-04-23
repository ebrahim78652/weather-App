function makeElement(elementType, elementClass, elementContent) {
  const newElement = document.createElement(elementType);

  if (elementClass) {
    newElement.classList.add(elementClass);
  }

  if (elementContent) {
    newElement.textContent = elementContent;
  }

  return newElement;
}

export default makeElement;
