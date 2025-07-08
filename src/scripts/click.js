function test() {
  const foundCheckbox = document.querySelector(".recaptcha-checkbox");
  if (foundCheckbox) {
    foundCheckbox.click();
  }
  console.log(foundCheckbox);
  const solveBtn = document.querySelector('#solver-button');
  if (solveBtn) {
    solveBtn.click();
  }
  console.log(solveBtn);
}

window.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(test);
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    test();
});
