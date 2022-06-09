// Grabbing tabs -> Description tab , Curriculum tab , Reviews tab
let tabCollection = document.getElementsByClassName('tab');

// Tab Panel to be displayed when clicked (Description panel, curriculum panel, Reviews panel)
let tabPanelCollection = document.getElementsByClassName('tab_panel');

Array.from(tabCollection).forEach(tab => {
    tab.addEventListener('click', (e) => {

        // Tab 
        // Removing active class from the current tab button being displayed or highlighted (can be description tab, curriculum tab , reviews tab)
        for (let index = 0; index < tabCollection.length; index++) {
            const element = tabCollection[index];
            if (element.classList.contains('active')) {
                tabCollection[index].classList.remove('active');
            }
        }

        // Giving active class to clicked tab
        e.target.classList.add('active');


        // Tab Panel 
        // Seeing the tab Panel from tab by data attribute 
        const tabPanelId = e.target.dataset.tabPanelId; // Grabbing the id of the panel of the clicked tab
        const tabPanel = document.getElementById(tabPanelId); // Grabbing the panel (can be description panel,curriculum panel , review panel)


        // First Removing active class from the current tab Panel being displayed 
        for (let index = 0; index < tabPanelCollection.length; index++) {
            const element = tabPanelCollection[index];
            if (element.classList.contains('active')) {
                tabPanelCollection[index].classList.remove('active');
            }
        }

        // Adding the active class to clicked tab's tab_panel by using id from data attribut
        tabPanel.classList.add('active');
    })
});




