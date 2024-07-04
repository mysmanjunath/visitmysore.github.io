document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            const target = document.querySelector(link.getAttribute('href'));

            sections.forEach(section => section.style.display = 'none');
            target.style.display = 'block';
        });
    });

    // Show the first section by default
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'block' : 'none';
    });
});
