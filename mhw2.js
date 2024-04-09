function click_raggiungi(event)
{
  const new_img = document.createElement('img');
  new_img.src = 'https://th.bing.com/th/id/OIP.hjnFQOlIP8CAzd5lP4rIdwHaEI?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  
  const container = document.querySelector('.section-container')
  container.innerHTML = ''
  container.appendChild(new_img);
}

const image = document.querySelector('.section-img');
image.addEventListener('click', click_raggiungi);


function click_leggi(event){
    event.preventDefault();
    const p = document.querySelector('#p1')
    if(p.classList.contains('hidden-p1') && p.dataset.paragraph === 'paragrafo-nascosto'){
        p.classList.remove('hidden-p1')
    }
    else{
        p.classList.add('hidden-p1')
    }

}
const a = document.querySelector('.leggi-di-più')
a.addEventListener('click',click_leggi)

