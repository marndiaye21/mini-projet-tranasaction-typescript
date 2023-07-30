export function createElement(tagName: string, attributes: object = {}, content: string = '') : HTMLElement {
    const element = document.createElement(tagName);
    for (const [attributeName, attributeValue] of Object.entries(attributes)) {
        element.setAttribute(attributeName, attributeValue as string);
    }
    element.innerText = content;
    return element;
}