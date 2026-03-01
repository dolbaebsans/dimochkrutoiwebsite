// да бля ну нахуя тебе сюда😭😭😭😭 этот код и так плохой💔

const container_max_width = 4

let cool_list = {
    test: ["cool_logo.png", "asdf.png", "cool_logo.png"],
    "минекрафтafdvsvfafavaf ff d f dg sfgb": ["https://drive.google.com/uc?export=download&id=1TuBXj7gHjbA6xENjWfwLdKYJaefypcAx", "минекрафт.rar", "apps/minecraft/icon.jpg"],
    иван: ["Сжатая архивная папка.rar", "ivan.png", "ivan.png"],
    иван1: ["Сжатая архивная папка.rar", "ivan.png", "ivan.png"],
    иван2: ["Сжатая архивная папка.rar", "ivan.png", "ivan.png"],
    иван3: ["Сжатая архивная папка.rar", "ivan.png", "ivan.png"],
    иван4: ["Сжатая архивная папка.rar", "ivan.png", "ivan.png"],
    иван5: ["Сжатая архивная папка.rar", "ivan.png", "ivan.png"],
    иван6: ["Сжатая архивная папка.rar", "ivan.png", "ivan.png"],
}

const pass_enter = document.getElementById("pass")

let vse = document.getElementById("hui")
const container = document.getElementById("container")

function on_start() {
    vse.style.display = "none";
}

window.onload = on_start;

function clone_app(name, image, link) {
    const template = document.getElementById("app_template");

    let clone = template.cloneNode(true)
    let clone_app_name = clone.childNodes[3]
    let clone_app_download = clone.childNodes[1]
    let clone_app_img = clone_app_download.lastElementChild
    clone.id = template.id

    container.appendChild(clone)

    clone.style.display = "block"

    clone_app_name.textContent = name
    clone_app_img.setAttribute("src", image)
    clone_app_download.setAttribute("href", link)
    clone_app_download.setAttribute("download", "")
}

function successful() {
    alert("краава");

    pass_enter.remove()

    vse.style.display = "flex"

    const template = document.getElementById("app_template");

    for (let i = 0; (i < Object.keys(cool_list).length); i++) {
        console.log(i, "list")

        let app_name = Object.keys(cool_list)[i]
        let app_link = cool_list[Object.keys(cool_list)[i]][0]
        let app_image = cool_list[Object.keys(cool_list)[i]][2]

        clone_app(app_name, app_image, app_link)

        if (i >= (container_max_width - 1)) {
            container.style.left = `${getComputedStyle(container).left.split('px')[0] - 65}px`
        }
    }

    template.remove()
};

pass_enter.addEventListener('submit', function(event) {
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