let article = document.getElementById('article');
// call a git hub api and console it

let url = 'https://api.github.com/users/alif-786/repos';
// insert it into the article using async await

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let output = '';
    data.forEach(element => {
        output += `<div>
        <li class="list">${element.name}</li>
        <a href="${element.forks_url}"}" class="link">${element.full_name}</a>
        </div>`;

    });
    article.innerHTML = output;
}
getData(url)

