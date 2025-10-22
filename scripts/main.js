document.addEventListener('DOMContentLoaded', () => {
    const headerBorder     = document.querySelector('.headerBorder');
    
    const aboutMeTab       = document.querySelector('.aboutMeTab');
    const aboutMeBorder    = document.querySelector('.aboutMeBorder');

    const educationTab     = document.querySelector('.educationTab');
    const educationBorder  = document.querySelector('.educationBorder');

    const experienceTab    = document.querySelector('.experienceTab');
    const experienceBorder = document.querySelector('.experienceBorder');

    const projectsTab      = document.querySelector('.projectsTab');
    const projectsBorder   = document.querySelector('.projectsBorder');

    const arr = [aboutMeBorder, educationBorder, experienceBorder, projectsBorder];
    const tabsArr = [aboutMeTab, educationTab, experienceTab, projectsTab];

    aboutMeTab.addEventListener('click', () => {
        toggleTab(aboutMeBorder, aboutMeTab, arr)
    });

    educationTab.addEventListener('click', () => {
        toggleTab(educationBorder, educationTab, arr)
    });

    experienceTab.addEventListener('click', () => {
        toggleTab(experienceBorder, experienceTab, arr)
    });

    projectsTab.addEventListener('click', () => {
        toggleTab(projectsBorder, projectsTab, arr)
    });

    function toggleTab(showBorder, activeTab, arr) {
        headerBorder.style.transform = 'scale(1.01)';
        setTimeout(() => {headerBorder.style.transform = 'scale(1.0)'}, 300);
        arr.forEach((border) => {
            border.style.opacity = '0';
            border.style.visibility = 'hidden';
        });

        tabsArr.forEach((tab) => {
            tab.style.backgroundColor = "#4e4e4e"
        });
        activeTab.style.backgroundColor = '#DC7000';
        showBorder.style.opacity = '1';
        showBorder.style.visibility = 'visible';
    }

    toggleTab(aboutMeBorder, aboutMeTab, arr);
})