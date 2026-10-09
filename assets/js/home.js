const palettes = {
    daydream: ['#f9c5b5,#d3afd8 53%,#8da8e0', '#f8dca1,#f4a98d 50%,#d982a3', '#cbd5f4,#9696df 50%,#54598c'],
    peach: ['#f8e4a0,#f7ac87 53%,#e87890', '#ffe4c1,#efb59d 50%,#db94b2', '#f8cfa8,#ed9393 50%,#c67597'],
    pool: ['#c8f0cc,#7ed7cd 53%,#5a9ed3', '#e4efb4,#a3dabd 50%,#59b7ad', '#b8e8e8,#8bc4e0 50%,#688fc7'],
    night: ['#b593dd,#6e67af 53%,#343862', '#e8b3cb,#a388c2 50%,#606caa', '#9da5d8,#666da9 50%,#303859']
  };
  document.querySelectorAll('.palette').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.palette').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      ['.center', '.left', '.right'].forEach((selector, index) => {
        document.querySelector(selector).style.background = `linear-gradient(160deg,${palettes[button.dataset.palette][index]})`;
      });
      document.querySelector('.gallery').setAttribute('aria-label', `${button.textContent.trim()} palette: three gradient wallpaper concepts, shown as phone lock screens`);
    });
  });
