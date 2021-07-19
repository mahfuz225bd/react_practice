import bootstrapJS from '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'

function enableAllBootstrapTooltip() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrapJS.Tooltip(tooltipTriggerEl);
  });
}

export default enableAllBootstrapTooltip;
