
// FAQ Section

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isOpen = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        // Open the clicked one if it wasn't already open
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});
