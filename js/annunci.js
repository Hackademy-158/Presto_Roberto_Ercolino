

fetch('../AnnunciDATA.json').then(response => response.json()).then(data =>
    {
        let cardsContainer = document.querySelector('#cardsContainer');
        let radioContainer = document.querySelector('#radioWrapper');
        let rangeInput = document.querySelector('#rangeInput');
        let numberPrice = document.querySelector('#numberPrice');

        function setCategory()
        {
            let selectedCategory = [];
            data.forEach(annuncio => 
                {
                    if(!selectedCategory.includes(annuncio.category))
                        {
                            selectedCategory.push(annuncio.category);
                        }
                });

            selectedCategory.forEach((category) => 
                {
                    let div = document.createElement('div');
                    div.classList.add("form-check");

                    div.innerHTML = `
                    <input class="form-check-input" type="radio" name="categories" id="${category}">
                    <label class="form-check-label" for="${category}">
                        ${category}
                    </label>
                    `

                    radioContainer.appendChild(div);
                })
        }

        function createCard(arr)
        {
            cardsContainer.innerHTML = '';

            arr.forEach(annuncio => 
                {
                    let div = document.createElement('div');
                    div.classList.add('col-md-4', 'col-6', 'p-2');

                    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${annuncio.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${annuncio.name}</h5>
                            <p class="card-text">${annuncio.category}</p>
                            <p class="price-text">${annuncio.price}</p>
                            <a href="#" class="btn cardBtn">Acquista</a>
                        </div>
                    </div>
                    `;
                    cardsContainer.appendChild(div);
                })
        }

        function filterByCategory(category)
        {
            if(category == 'ALL')
                {
                    createCard(data);
                }
                else
                {
                    let filtered = data.filter((annuncio) => annuncio.category == category);
                    createCard(filtered);
                }
        }

        setCategory();
        createCard(data);

        let radioCategories = document.querySelectorAll('.form-check-input');
        radioCategories.forEach(radioButton => 
            {
                radioButton.addEventListener('click', () => 
                    {
                        let category = radioButton.id;
                        filterByCategory(category);
                    })
            })

        function setInputPrice()
        {
            let prices = data.map((annuncio) => Number(annuncio.price))
            
            prices.sort((a,b) => a-b)
            let maxPrice = prices.pop();

            rangeInput.max = maxPrice;
            rangeInput.value = maxPrice;
            numberPrice.innerHTML = `${maxPrice} €`;
        }

        setInputPrice();
        
        function filterByPrice(numero){
            let filtered = data.filter(annuncio=> Number(annuncio.price) <= Number(numero))
            
            createCard(filtered);
        }

        rangeInput.addEventListener( 'input', ()=>{
            filterByPrice(rangeInput.value)
            numberPrice.innerHTML = `${rangeInput.value} €`;
        } )

    })