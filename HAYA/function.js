/*FAQ*/

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



/*TO TOP BUTTON*/
const goUp = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {
        goUp.classList.add("active");
    }
    else {
        goUp.classList.remove("active");
    }
})