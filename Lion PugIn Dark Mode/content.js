// content.js
const applyDarkMode = () => {
    const style = document.createElement('style');
    style.id = 'dark-mode-style';
    style.textContent = `
      html, body, * {
        background-color: #121212 !important;
        color: #ffffff !important;
        border-color: #333 !important;
      }
    `;
    document.head.appendChild(style);
  };
  
  const removeDarkMode = () => {
    const style = document.getElementById('dark-mode-style');
    if (style) style.remove();
  };
  
  // Escucha mensajes del popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'enable') applyDarkMode();
    if (message.action === 'disable') removeDarkMode();
  });
  