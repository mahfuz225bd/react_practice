import bootstrapJS from "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

function enableAllBootstrapPopovers() {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrapJS.Popover(popoverTriggerEl);
  });
}

export default enableAllBootstrapPopovers;
