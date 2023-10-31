const faqs = document.querySelectorAll( ".faqs__question__wrap ");

faqs.forEach(faqs__question__wrap => {
    faqs__question__wrap.addEventListener("click", () => {
        faqs__question__wrap.classList.toggle("active");
    });
});
  