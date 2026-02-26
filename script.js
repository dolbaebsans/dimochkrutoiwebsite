// да бля ну нахуя тебе сюда😭😭😭😭 съеби нахуй пожалйсат💔

let cool_list = {
    test: ["cool_logo.png", "asdf.png", "cool_logo.png"],
    минекрафт: ["https://drive.google.com/uc?export=download&id=1TuBXj7gHjbA6xENjWfwLdKYJaefypcAx", "минекрафт.rar", "apps/minecraft/icon.jpg"]
}

let vse = document.getElementById("hui")
const container = document.getElementById("container")

function sayHello() {
    vse.style.display = "none";
}

// Assign the function to the window's onload event
window.onload = sayHello; 

function successful() {
    alert("краава");

    vse.style.display = "flex"

    let clone_amount = 1

    const template = document.getElementById("app_template");

    for (let i = 0; (i < Object.keys(cool_list).length); i++) {
        console.log(i, "list")

        let clone = template.cloneNode(true)
        let clone_app_name = clone.childNodes[3]
        let clone_app_download = clone.childNodes[1]
        let clone_app_img = clone_app_download.lastElementChild

        console.log(clone.childNodes)

        clone.id = template.id
        container.appendChild(clone)
        clone_app_name.textContent = Object.keys(cool_list)[i]

        console.log(cool_list[Object.keys(cool_list)[i]][0])
        clone_app_download.setAttribute("href", cool_list[Object.keys(cool_list)[i]][0])
        clone_app_download.setAttribute("download", cool_list[Object.keys(cool_list)[i]][1])
        clone_app_img.setAttribute("src", cool_list[Object.keys(cool_list)[i]][2])
    }

    template.style.display = "none"


    // clone.id = clone.id //+ toString(clone_amount)
    // console.log(clone_amount)

    // container.appendChild(clone)
    // clone_app_name.textContent = "adfg"
};

document.getElementById('pass').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submission and page reload

    const pinInput = document.getElementById('pin');
    const pinValue = pinInput.value;

    const password = "dimakrutoi"

    if (pinValue == password) {
        successful();
    } else {
        alert("хаахаха лоъ");
    }
});

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