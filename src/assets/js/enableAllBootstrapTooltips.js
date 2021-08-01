import bootstrapJS from 'bootstrap/dist/js/bootstrap.bundle.min';

function enableAllBootstrapTooltips() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrapJS.Tooltip(tooltipTriggerEl);
  });
}

export default enableAllBootstrapTooltips;
