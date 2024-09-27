// content.js
document.addEventListener('keydown', (event) => {
  if (event.key === '0') {
    event.preventDefault(); // Prevent the '0' from being typed
    
    const activeElement = document.activeElement;
    
    if (activeElement.isContentEditable || 
        activeElement.tagName === 'INPUT' || 
        activeElement.tagName === 'TEXTAREA') {
      
      // If it's an input or textarea, we can use the insertText command
      if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
        document.execCommand('insertText', false, 'Hello');
      } 
      // For contenteditable elements, we need to create a text node
      else {
        const textNode = document.createTextNode('Hello');
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
});
