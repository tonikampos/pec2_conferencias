
import * as bootstrap from 'bootstrap';

// Import FontAwesome
import '@fortawesome/fontawesome-free/js/all.js';


document.addEventListener('DOMContentLoaded', function() {
  
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      new bootstrap.Collapse(navbarCollapse, {toggle: false});
    }
  }
  
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length > 0) {
    modalElements.forEach(modalEl => {
      new bootstrap.Modal(modalEl);
    });
  }
  
  const dropdownElements = document.querySelectorAll('.dropdown-toggle');
  if (dropdownElements.length > 0) {
    dropdownElements.forEach(dropdownEl => {
      new bootstrap.Dropdown(dropdownEl);
    });
  }
  
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerList.length > 0) {
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }
  
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  if (popoverTriggerList.length > 0) {
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  }
  
  const carouselElements = document.querySelectorAll('.carousel');
  if (carouselElements.length > 0) {
    carouselElements.forEach(carouselEl => {
      new bootstrap.Carousel(carouselEl);
    });
  }
  
  const tabElements = document.querySelectorAll('[data-bs-toggle="tab"]');
  if (tabElements.length > 0) {
    tabElements.forEach(tabEl => {
      new bootstrap.Tab(tabEl);
    });
  }
  
 
  const inscripcionBtn = document.getElementById('inscripcionBtn');
  const inscripcionToast = document.getElementById('inscripcionToast');
  
  if (inscripcionBtn && inscripcionToast) {
    inscripcionBtn.addEventListener('click', () => {
      const toast = new bootstrap.Toast(inscripcionToast);
      toast.show();
    });
  }
  
  const filterButtons = document.querySelectorAll('[data-filter]');
  const participantItems = document.querySelectorAll('.participant-item');
  
  if (filterButtons.length > 0 && participantItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
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
  
  const conferenceTabs = document.getElementById('conferenceTabs');
  if (conferenceTabs) {
    conferenceTabs.addEventListener('shown.bs.tab', function(event) {
      const targetId = event.target.getAttribute('id');
      const category = targetId.replace('-tab', '');
      
      if (category === 'all') return;
      
      const conferenceCards = document.querySelectorAll(`.conference-card[data-category="${category}"]`);
      const targetPane = document.querySelector(`.${category}-conferences`);
      
      if (targetPane) {
        targetPane.innerHTML = '';
        
        if (conferenceCards.length > 0) {
          const row = document.createElement('div');
          row.className = 'row conference-list';
          targetPane.appendChild(row);
          
          conferenceCards.forEach(card => {
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-4';
            const cardClone = card.parentElement.parentElement.cloneNode(true);
            col.appendChild(cardClone);
            row.appendChild(col);
          });
        } else {
          const noResults = document.createElement('div');
          noResults.className = 'text-center py-5';
          noResults.innerHTML = `<p class="text-muted">No hay conferencias disponibles en la categoría: ${category}</p>`;
          targetPane.appendChild(noResults);
        }
      }
    });
  }
});