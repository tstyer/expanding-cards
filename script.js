/*  Learning note:
    For this simple project, all you need to do is change the active class from 
    one card to the next one you clicked on. 
    Bececause I need to be able to select any of the panels, I need to bring them into
    This file.
*/

/*  querySelectorAll is used because there is more than one panel. 
    If you just did querySelector, it would only choose the first one.
    This chooses ALL the elements with class 'panel'
*/

const panels = document.querySelectorAll('.panels');


/*  I take the array of panels, and for each of them, I execute
    an arrow function where I choose 1 panel, and add an event listener to it. 
    It listens for a click, and on that click, executes another function where
    I first remove the active class, and add a new class.     
*/
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}
); 

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
};

