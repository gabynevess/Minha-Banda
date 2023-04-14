const menuBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("menu-close");
const asideMenu = document.getElementById("aside-menu");
const visibile = document.querySelector("data-visible");
let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fimmusica');
let imagem = document.querySelector('.imagemmusica');
let nomeMusica = document.querySelector('.descricaomusica h2');
let nomeBanda = document.querySelector('.descricaomusica i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

document
  .querySelector(".nav-menu")
  .querySelectorAll("li")
  .forEach((element) => {
    element.querySelectorAll("a").forEach((elementt) => {
      elementt.addEventListener("click", closeMenu);
    });
  });

musica.addEventListener('timeupdate', atualizarBarra);
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
  if (!visibile) {
    asideMenu.classList.add("menu-open");
    menuBtn.setAttribute("data-visibile", true);
  }
}

function closeMenu() {
  asideMenu.classList.remove("menu-open");
  menuBtn.setAttribute("data-visibile", false);
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.iniciomusica');
    tempoDecorrido.textContet = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}