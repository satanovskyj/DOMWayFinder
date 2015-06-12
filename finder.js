function getFullPath() {
    function getValue(current_node) {
        var result = current_node.tagName.toLowerCase();
        if (result != 'tbody') {
            var _class = current_node.getAttribute('class');
            if (_class) {
                result += '.' + _class;
            } else {
                var _id = current_node.getAttribute('id');
                if (_id) {
                    result += '#' + _id;
                }
            }
            return result;
        }
        return false
    }

    function getPath(node) {
        var result = getValue(node);
        while (node != document.body) {
            node = node.parentNode;
            value = getValue(node);
            if (value) {
                result = getValue(node) + " > " + result;
            }
        }
        return result;
    }

    var range = window.getSelection().getRangeAt(0);
    var container = range.commonAncestorContainer;
    var parent = null;

    if (typeof container.tagName === 'undefined') {
        parent = container.parentNode
    } else {
        parent = container;
    }

    return getPath(parent);
}

var path = getFullPath();

chrome.runtime.sendMessage({
    'full_path': path
});
