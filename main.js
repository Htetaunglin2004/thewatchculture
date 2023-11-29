let lastScrollTop = 0;

window.addEventListener('scroll', animation);

function animation() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const watchContainer = document.getElementById('watch-container');
    const watchorange = document.getElementById('orange');
    const about = document.querySelector('#about');
    const overlay = document.querySelector('#overlay')

    if (currentScroll > lastScrollTop) {
        // Scrolling down
       watchContainer.classList.add("transition-transform", "duration-700", "ease-out", "transform", "translate-y-96" ,);
        watchorange.classList.add('-rotate-12', "transition-transform", "duration-700", "ease-out");
      
        //overlay.classList.remove('opacity-100','bg-white')
        //overlay.classList.add('opacity-40','bg-green-900')
        //console.log('Scrolling down');
    } else {
        // Scrolling up
        watchContainer.classList.remove("translate-y-96");
        watchorange.classList.remove('-rotate-12');
      
       
        
        //console.log('Scrolling up');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}




function observeDiv(targetSelector, classesToAddIn, classesToRemoveIn, classesToAddOut, classesToRemoveOut, threshold = 0.5) {
    const targetDiv = document.querySelector(targetSelector);
    const options = {
        root: null,
        threshold: threshold,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                targetDiv.classList.add(...classesToAddIn);
                targetDiv.classList.remove(...classesToRemoveIn);
            } else {
                targetDiv.classList.add(...classesToAddOut);
                targetDiv.classList.remove(...classesToRemoveOut);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetDiv);
}




function observeSecondaryDiv(affectingSectionSelector, targetSectionSelector, targetDivSelector, classesToAddIn, classesToRemoveIn, classesToAddOut, classesToRemoveOut, threshold = 0.5) {
    const options = {
        root: null,
        threshold: threshold,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            const targetSection = document.querySelector(targetSectionSelector);
            const targetDiv = targetSection.querySelector(targetDivSelector);
            
            if (entry.isIntersecting) {
                targetDiv.classList.add(...classesToAddIn);
                targetDiv.classList.remove(...classesToRemoveIn);
            } else {
                targetDiv.classList.add(...classesToAddOut);
                targetDiv.classList.remove(...classesToRemoveOut); // This should be classesToRemoveOut
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector(affectingSectionSelector));
}



  

// Function call for observing and affecting elements
observeSecondaryDiv(
    '#home',
    '#about',
    '#overlay',
    ['opacity-100','bg-slate-300'],
    ['opacity-40','bg-green-900'],
    ['a'],
    ['a']
);



observeDiv(
    '#about #overlay' , 
    ['opacity-40','bg-green-900'],
    ['opacity-100','bg-slate-300'],
    ['a'],
    ['a'] 
)





observeDiv(
    '#service #watch-l',
    ['sm:-translate-x-0', 'opacity-100','-rotate-12'],
    ['sm:translate-y-20','opacity-0'],
    ['opacity-0','sm:translate-y-20'],
    ['sm:-translate-x-0', 'opacity-100','-rotate-12']
);

observeDiv(
    '#service #watch-c',
    ['-translate-y-5'],
    ['translate-y-10'],
    ['translate-y-10'],
    ['-translate-y-5']
)


observeDiv(
    '#service #watch-r',
    ['sm:translate-x-0','opacity-100','rotate-12'],
    ['opacity-0','sm:translate-y-20'],
    ['opacity-0','sm:translate-y-20'],
    ['sm:translate-x-0','opacity-100','rotate-12']
)

observeDiv(
    '#service #service-text' ,
    ['opacity-100','text-green-950','-translate-y-5'],
    ['opacity-0','text-orange-300'],
    ['opacity-0','text-orange-300'],
    ['opacity-100','text-green-950','-translate-y-5']
)


observeSecondaryDiv(
    '#service',
    '#fav',
    '#fav-div',
    ['bg-green-950'],
    ['bg-slate-200'],
    ['bg-slate-200'],
    ['bg-green-950']
)

observeSecondaryDiv(
    '#service',
    '#fav',
    '#fav-txt',
    ['text-slate-200'],
    ['text-green-950'],
    ['text-green-950'],
    ['text-slate-200'],
   
)

observeSecondaryDiv(
    '#service',
    '#fav',
    '#grid-container',
    ['opacity-5'],
    ['-translate-y-5', 'opacity-100'],
    ['-translate-y-5', 'opacity-100'],
    ['opacity-5'],
   
)



  const openMenuButton = document.getElementById('openMenu');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.menu-link');

  // Function to toggle the menu open/close
  function toggleMenu() {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      document.body.classList.remove('overflow-hidden');
    } else {
      menu.style.display = 'block';
      document.body.classList.add('overflow-hidden');
    }
  }

  // Function to close the menu
  function closeMenu() {
    menu.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
  }

  // Event listener for clicking the openMenu button
  openMenuButton.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Event listener for clicking menu links
  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      closeMenu();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Event listener to close menu when clicking outside of it
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideOpenButton = openMenuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideOpenButton) {
      closeMenu();
    }
  });


