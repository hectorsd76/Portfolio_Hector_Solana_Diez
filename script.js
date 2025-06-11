 function updateCircles() {
    document.querySelectorAll('.badge').forEach(badge => {
      const circle = badge.querySelector('.circle');
      const nivel = badge.dataset.nivel.toLowerCase();

      let porcentaje = 0;
      switch (nivel) {
        case "junior":
          porcentaje = 33;
          break;
        case "intermedio":
          porcentaje = 66;
          break;
        case "experto":
          porcentaje = 100;
          break;
        default:
          porcentaje = 0;
      }

      const offset = 100 - porcentaje;

      if (circle) {
        circle.style.strokeDashoffset = offset;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', updateCircles);