/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const server = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price) => {

  const newPrice = new window.Intl.NumberFormat('en-EN',{
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return newPrice;
}

//Intl API de internacionalización del browser
// 1 - format monedas
// 2 - format fechas

//web api
// conectarnos al servidor
// procesar la respuesta y convertirla en json
// JSON -> Data -> Renderizar la información en el browser
window.fetch(`${server}/api/avo`)
.then(respuesta => respuesta.json())
.then(responseJSON => {

  const todosLosItems = []

  responseJSON.data.forEach(item => {

    // crear imagen
    const imagen = document.createElement('img');
    imagen.src = `${server}${item.image}`;
    
    // crear título.
    const title = document.createElement('h2');
    title.textContent = item.name;
    title.className = 'text-2xl text-red-600';
    
    // precio
    const price = document.createElement('div');
    price.style = 'font-weight: 600';
    price.textContent = formatPrice(item.price);

    const container = document.createElement('div');
    container.append(imagen, title, price);

    todosLosItems.push(container);

  });

  appNode.append(...todosLosItems);

})
