function gamau(id) {
    let mau = document.getElementById("btn_ya");
    let i = Math.floor(Math.random() * 600) + 1;
    let j = Math.floor(Math.random() * 200) + mau.offsetTop;
    id.style.left = i + "px";
    id.style.top = j + "px";
  }

  document.getElementById("btn_ya").addEventListener("click", function() {
      alert("Selamat , sekarang kamu resmi jadi ceweknya nabil\n\n                                  I ❤ U");
      let input= prompt();
      alert(input+"❤");
  });
  document.getElementById("btn_ga").addEventListener("mouseover", function() {
      gamau(this);
  });
