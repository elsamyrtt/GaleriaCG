function closeMenu() {
  // Eliminar el div "fullscreen-overlay menu-overlay show"
  var overlay = document.querySelector('.fullscreen-overlay.menu-overlay.show');
  if (overlay) {
      overlay.parentNode.removeChild(overlay);
  }

  // Eliminar la clase "active" del div con id "menu-submit"
  var menuSubmit = document.querySelector('#menu-submit');
  if (menuSubmit) {
      menuSubmit.classList.remove('active');
  }

  // Eliminar la clase "visible open" del nav con id "menu"
  var menuNav = document.querySelector('#menu');
  if (menuNav) {
      menuNav.classList.remove('visible', 'open');
  }
}

document.querySelector('.menu-close').addEventListener('click', closeMenu);
function openMenu(event) {
  var dadoverlay = document.querySelector('.cart-and-mobile')
  // Agregar la clase "active" al div con id "menu-submit"
  event.target.classList.add('active');

  // Crear el div "fullscreen-overlay menu-overlay show"
  var overlay = document.createElement('div');
  overlay.className = 'fullscreen-overlay menu-overlay show';
  dadoverlay.appendChild(overlay);

  // Agregar la clase "visible open" al nav con id "menu"
  var menuNav = document.querySelector('#menu');
  if (menuNav) {
      menuNav.classList.add('visible', 'open');
  }
}

document.querySelector('#menu-submit').addEventListener('click', openMenu);



document.querySelector('#menu-submit').addEventListener('click', openMenu);

function cambiarimagen(imgn, id) {
    const miImagen = document.getElementById(id);

    if (miImagen) {
        miImagen.src = imgn;
    } else {
        console.error("La imagen con el ID proporcionado no se encontró.");
    }
}
function CloseMost() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
function ClickMost(imgUrl, precioId, descripcionId) {
  var modal = document.getElementById("myModal");
  /* el resto de tu código */

  modal.style.display = "block";
  var modal = document.getElementById("myModal");
  var precio = document.getElementById(precioId);
  var descripcion = document.getElementById(descripcionId);

  document.getElementById("modalImage").src = imgUrl;
  document.getElementById("modalPrecio").innerText = precio.innerText;
  document.getElementById("modalDescripcion").innerText = descripcion.innerText;

  modal.style.display = "block";
}

function setupImageZoom(imageId) {
  var myImage = document.getElementById(imageId);

  myImage.addEventListener("click", function() {
    myImage.style.transform = "scale(1.5)";
  });

  window.addEventListener("click", function(event) {
    if (event.target !== myImage) {
      myImage.style.transform = "scale(1)";
    }
  });
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 