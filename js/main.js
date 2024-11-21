let navbar = document.querySelector('#containerNav');

window.addEventListener('scroll', ()=>
    {
        let scroll = window.scrollY;

        if(scroll > 0)
            {
                navbar.classList.remove('container-fluid', 'bgExtra');
                navbar.classList.add('container', 'sticky_position', 'rounded-3', 'bgPrimary');
            }
            else
            {
                navbar.classList.remove('container', 'sticky_position', 'rounded-3', 'bgPrimary');
                navbar.classList.add('container-fluid', 'bgExtra' );
            }
    });