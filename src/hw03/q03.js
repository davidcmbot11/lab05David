
const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];
  const rootDiv = document.getElementById('root');
  const buyListContainer = document.createElement('div');
  buyListContainer.id = 'buyListContainer';
  buyListContainer.innerHTML = `<ul>${buyList.map(item => `<li>${item}</li>`).join('')}</ul>`;
  rootDiv.insertAdjacentElement( 'afterend', buyListContainer);
  
  const link = document.getElementById('link');
  link.href = 'https://keybr.com';