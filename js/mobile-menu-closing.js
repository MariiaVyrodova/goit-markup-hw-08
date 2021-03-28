(() => {
    const menuBtnClose = document.querySelector("[data-menu-button-close]");
    const mobileMenuRef = document.querySelector("[data-menu]");
        
    menuBtnClose.addEventListener("click", () => {
    
        const expanded = menuBtnClose.getAttribute("aria-expanded") === "true" || false;
    
        menuBtnClose.classList.toggle("is-open");
        menuBtnClose.setAttribute("aria-expanded", !expanded);
    
    mobileMenuRef.classList.toggle("is-open");
    });
    
    })();
    
    