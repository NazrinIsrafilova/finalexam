const contentElem = document.querySelector(".content");


fetch("https://restcountries.com/v3.1/name/azerbaijan")
    .then(res => res.json())
    .then(data => data.forEach(content => {
        contentElem.innerHTML = `
    <h1>${content.name.common}</h1>
    <img src="${content.flags.png}" alt="">
    <img src="${content.coatOfArms.png}" alt="">
    <p>${content.capital}</p>
    `
})
    )
