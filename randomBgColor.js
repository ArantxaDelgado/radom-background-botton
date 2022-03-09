const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    //innerHTML changes the content of the html, you can use tags in them .innerHTML = `<em>${randomColor}</em>`;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();