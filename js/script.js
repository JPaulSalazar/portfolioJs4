const roundText = document.querySelector('#round-text-js');
const menuButton = document.querySelector('#menu-button-js');
const menuContent = document.querySelector('#menu-content-js');

menuButton.addEventListener('click', () => {
  if (menuContent.style.display === 'flex') {
    menuContent.style.display = 'none';
  } else {
    menuContent.style.display = 'flex';
  }
});

roundText.innerHTML = roundText.innerText.split('').map((element, i) => `<span style="transform:rotate(${i * 24}deg)">${element}</span>`).join('');
