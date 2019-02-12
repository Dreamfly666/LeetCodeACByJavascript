// Basic Calculator

function createTextNodeWithText(type, text) {
    var node = document.createElement(type)
    if (text) {
        var textNode = document.createTextNode(text)
        node.appendChild(textNode)
    }
    return node
}
