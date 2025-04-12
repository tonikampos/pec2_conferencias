/**
 * Import dependencies from node_modules
 */
import * as bootstrap from 'bootstrap';

// Import FontAwesome
import '@fortawesome/fontawesome-free/js/all.js';

/**
 * Initialize Bootstrap tooltips and popovers
 */
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerList.length > 0) {
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }
  
  // Inicializar popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  if (popoverTriggerList.length > 0) {
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  }
  
  // Inicializar el toast en el index.html
  const inscripcionBtn = document.getElementById('inscripcionBtn');
  const inscripcionToast = document.getElementById('inscripcionToast');
  
  if (inscripcionBtn && inscripcionToast) {
    inscripcionBtn.addEventListener('click', () => {
      const toast = new bootstrap.Toast(inscripcionToast);
      toast.show();
    });
  }
  
  // Funcionalidad de filtro para participantes.html
  const filterButtons = document.querySelectorAll('[data-filter]');
  const participantItems = document.querySelectorAll('.participant-item');
  
  if (filterButtons.length > 0 && participantItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Cambiar estado activo de los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Filtrar los participantes
        participantItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Funcionalidad para filtrar conferencias con Tabs
  const conferenceTabs = document.getElementById('conferenceTabs');
  if (conferenceTabs) {
    // Cuando se active una pestaña, filtra las conferencias
    conferenceTabs.addEventListener('shown.bs.tab', function(event) {
      const targetId = event.target.getAttribute('id');
      const category = targetId.replace('-tab', '');
      
      // Si es la pestaña de todas, no hay que hacer nada especial
      if (category === 'all') return;
      
      // Para las pestañas de categorías específicas, clonamos las conferencias correspondientes
      const conferenceCards = document.querySelectorAll(`.conference-card[data-category="${category}"]`);
      const targetPane = document.querySelector(`.${category}-conferences`);
      
      // Limpiar el contenedor
      if (targetPane) {
        targetPane.innerHTML = '';
        
        // Si hay conferencias, crear una nueva fila
        if (conferenceCards.length > 0) {
          const row = document.createElement('div');
          row.className = 'row conference-list';
          targetPane.appendChild(row);
          
          // Clonar cada conferencia al tab correspondiente
          conferenceCards.forEach(card => {
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-4';
            const cardClone = card.parentElement.parentElement.cloneNode(true);
            col.appendChild(cardClone);
            row.appendChild(col);
          });
        } else {
          // Mensaje si no hay conferencias en esta categoría
          const noResults = document.createElement('div');
          noResults.className = 'text-center py-5';
          noResults.innerHTML = `<p class="text-muted">No hay conferencias disponibles en la categoría: ${category}</p>`;
          targetPane.appendChild(noResults);
        }
      }
    });
  }
});