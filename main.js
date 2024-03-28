document.addEventListener('DOMContentLoaded', function() {
    const btnProjects = document.querySelectorAll('.btn-project');

    btnProjects.forEach(function(btnProject) {
        btnProject.addEventListener('click', function(event) {
            const divInfo = document.getElementById(event.target.id + "-info");
            const header = divInfo.childNodes[1];
            if (header) {
                header.innerHTML = '\
                <div class="project-title title-bar-text">' + event.target.id + ' </div>\
                <div class="title-bar-controls">\
                <button aria-label="Minimize"></button>\
                <button aria-label="Maximize"></button>\
                <button aria-label="Close"></button>\
                </div>';
            }
            if (divInfo.style.display === 'block') {
                divInfo.style.display = 'none';
            } else {
                divInfo.style.display = 'block';
            }
        })
    })

    const btnSkills = document.querySelectorAll('.btn-skills');

    btnSkills.forEach(function(btnSkill) {
        btnSkill.addEventListener('click', function(event) {
            console.log(event);
            const divInfo = document.getElementById(event.target.id + "-info");
            if (divInfo.style.display === 'block') {
                divInfo.style.display = 'none';
            } else {
                divInfo.style.display = 'block';
            }
        })
    })

    const closeButtons = document.querySelectorAll('.close-cross');

    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            const projectInfo = this.closest('.project-info');
            if (projectInfo) {
                projectInfo.style.display = 'none';
            }
        });
    });
});