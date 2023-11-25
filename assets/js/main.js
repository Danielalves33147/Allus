document.addEventListener("DOMContentLoaded", function () {
    var botaoTopo = document.getElementById("r-button");
    var textoTopo = document.getElementById("r-text");

    function quemSomos (){
      const quemSomos = document.getElementById("card-box");
      quemSomos.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    function nossasRedes (){
      const quemSomos = document.getElementById("m-social");
      quemSomos.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    function servicos (){
      const quemSomos = document.getElementById("contact");
      quemSomos.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        botaoTopo.style.visibility = "visible";
        botaoTopo.classList.add("fade");
      } else {
        botaoTopo.style.visibility = "hidden";
        botaoTopo.classList.remove("fade");
      }
    });

    window.addEventListener("scroll", function () {
    var alturaPagina = document.body.scrollHeight - this.window.innerHeight;

        if (window.scrollY > alturaPagina - 1 && window.innerWidth > 1340) {
          textoTopo.classList.add("open");
        } else {
          textoTopo.classList.remove("open");
        }
      });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1340) {
        textoTopo.classList.add("open");
      } else {
        textoTopo.classList.remove("open");
      }
    })
  
    botaoTopo.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    document.getElementById("b-qs").addEventListener("click", quemSomos);
    document.getElementById("b-ns").addEventListener("click", nossasRedes);
    document.getElementById("b-nc").addEventListener("click", servicos);

  });