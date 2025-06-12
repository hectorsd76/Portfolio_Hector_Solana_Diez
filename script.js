function getPorcentajeFromNivel(nivel) {
  switch (nivel.toLowerCase()) {
    case 'junior': return 33;
    case 'intermedio': return 66;
    case 'experto': return 100;
    default: return 0;
  }
}

function updateCircles() {
  const badges = document.querySelectorAll('.badge');

  badges.forEach(badge => {
    const circle = badge.querySelector('.circle');
    const nivel = badge.dataset.nivel || '';
    const porcentaje = getPorcentajeFromNivel(nivel);
    const offset = 100 - porcentaje;

    if (circle) {
      circle.style.strokeDashoffset = offset;
    }
  });
}

document.addEventListener('DOMContentLoaded', updateCircles);
