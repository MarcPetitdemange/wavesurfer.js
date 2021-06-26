/**
 * Return the selector from an element
 * @param {HTMLElement} htmlElement (Ex: event.currentTargent from a eventListener | div )
 * @returns {string} selector string
 */
export default function extractSelector(htmlElement) {
    let selector = "";
    if (htmlElement.tagName != null) {
        selector += htmlElement.tagName.toLowerCase();
    }
    if (htmlElement.id != null && htmlElement != "") {
        selector += "#" + htmlElement.id + " ";
    }
    if (htmlElement.className != null && htmlElement.className != "") {
        selector += "." + htmlElement.className;
    }
    return selector;

}
