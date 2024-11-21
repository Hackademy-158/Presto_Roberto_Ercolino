let navbar = document.querySelector('#containerNav');
let numbers = document.querySelectorAll('#texts');

let page = document.querySelector('#contentPage');
let loading = document.querySelector('#loading');

let check = false;

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

function createInterval(element, finalNumber, time)
{
    counter = 0;

    let interval = setInterval(()=> 
        {
            if(counter < finalNumber)
                {
                    counter++;
                    element.innerHTML = counter;
                }
                else
                {
                    clearInterval(interval);
                }
        },time)
}

let observer = new IntersectionObserver((entries)=>
    {
        entries.forEach(entry=>
            {
                if(entry.isIntersecting && !check)
                    {
                        createInterval(numbers[0], 2000, 10);
                        createInterval(numbers[1], 3000, 5);
                        check = true;
                    }
            })
    })

observer.observe(numbers[0])

// setTimeout(()=>
//     {
//         page.classList.remove('d-none');
//         loading.classList.add('d-none');
//     },1000)