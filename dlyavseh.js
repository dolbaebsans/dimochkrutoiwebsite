document.addEventListener('keydown', (event) => {
    let sites = [
        "https://education.yandex.ru/uchebnik/main",
        "https://yandex.ru",
    ]

    let key = event.key

    console.log(event.key)

    if (key == "F2") {
        open(sites[Math.floor(Math.random() * sites.length)], '_self');
    }
});