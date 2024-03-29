let closeButtons = document.querySelectorAll('.close-cross');

function removePx(value) {
    return value.replace('px', '');
}

function createTitleBarControls(element) {
    if (element.children.length > 1) 
        return;
    const html = `
    <div class="title-bar-controls">
    <button aria-label="Minimize"></button>
    <button aria-label="Maximize"></button>
    <button aria-label="Close" class="close-cross"></button>
    </div>
    `
    element.insertAdjacentHTML('beforeend', html);
    closeButtons = document.querySelectorAll('.close-cross');
    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function(event) {

            const projectInfo = this.closest('.window');
            if (projectInfo) {
                projectInfo.style.display = 'none';
            }
        });
    });
}


const windows = document.querySelectorAll('.window-folder');
let offsetX, offsetY, isDragging = false, currentWindow;

function startDragging(e) {
    isDragging = true;
    currentWindow = this.parentNode;
    offsetX = e.clientX - removePx(currentWindow.style.left);
    offsetY = e.clientY - removePx(currentWindow.style.top);
    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', stopDragging);
}

function dragWindow(e) {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        currentWindow.style.left = `${x}px`;
        currentWindow.style.top = `${y}px`;
    }
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', stopDragging);
}

windows.forEach(function(window) {
    const titleBar = window.querySelector('.title-bar');
    titleBar.addEventListener('mousedown', startDragging);
});

document.addEventListener('DOMContentLoaded', function() {
     
    const btnProjects = document.querySelectorAll('.folder');

    btnProjects.forEach(function(btnProject) {
        btnProject.addEventListener('click', function() {
            const parent = this.closest('.folder');
            const folder = document.getElementById(parent.id + "-folder");
            if (!folder)
                return;
            createTitleBarControls(folder.childNodes[1]);
            if (folder.style.display === 'block') {
                folder.style.display = 'none';
            } else {
                folder.style.display = 'block';
            }
    });

    const btnSkills = document.querySelectorAll('.btn-skills');

    btnSkills.forEach(function(btnSkill) {
        btnSkill.addEventListener('click', function(event) {
            const divInfo = document.getElementById(event.target.id + "-info");
            if (divInfo.style.display === 'block') {
                divInfo.style.display = 'none';
            } else {
                divInfo.style.display = 'block';
            }
        })
    })
    
    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function(event) {
            const projectInfo = this.closest('.window');
            if (projectInfo) {
                projectInfo.style.display = 'none';
            }
        });
    });
});

});