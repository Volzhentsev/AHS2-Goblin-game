const cells = Array.from(document.querySelectorAll('.hole'));

function goblinImg(index, number) {
    if (index !== -1) {
      cells[index].classList.remove('goblin');
    }
    const goblinImgCell = cells[number];
    goblinImgCell.classList.add('goblin');
  }

setInterval(() => {
    const index = cells.findIndex((item) => item.className.includes('goblin'));
    let number = Math.floor(Math.random() * cells.length);
    if (number === index) {
      number = Math.floor(Math.random() * cells.length);
    } else {
      goblinImg(index, number);
    }
  }, 1000);