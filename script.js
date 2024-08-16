document.addEventListener('DOMContentLoaded', () => {
        function updateCard(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cardInner.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    document.addEventListener('mousemove', updateCard);

    const tagline = document.getElementById('tagline');
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // add projects here@
    const projects = [
        'Personal Portfolio',
        'Discord Bot',
        'discordAvatarTracker Using Flask',
        'Valorant Anti-AFK'
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project;
        projectList.appendChild(li);
    });
});
