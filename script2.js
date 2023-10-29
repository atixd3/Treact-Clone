const faqs = document.querySelectorAll( ".faqs__question ");

faqs.forEach(faqs__question => {
    faqs__question.addEventListener("click", () => {
        faqs__question.classList.toggle("active");
    });
});
  