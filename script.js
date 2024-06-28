const about_link = document.getElementById("about-link")
const projects_link = document.getElementById("projects-link")
const contact_link = document.getElementById("contact-link")

const about = document.getElementById("about")
const projects = document.getElementById("projects")
const contact = document.getElementById("contact")

function scroll (elmt) {
    elmt.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    })
}

about_link.addEventListener("click", () => {
    scroll(about)
})
projects_link.addEventListener("click", () => {
    scroll(projects)
})
contact_link.addEventListener("click", () => {
    scroll(contact)
})

const link_1 = document.getElementById("link-1")
const link_2 = document.getElementById("link-2")
const link_3 = document.getElementById("link-3")

const slide_1 = document.getElementById("slide-1")
const slide_2 = document.getElementById("slide-2")
const slide_3 = document.getElementById("slide-3")

function scroll_horizontal (elmt) {
    elmt.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
    })
}

link_1.addEventListener("click", () => {
    scroll_horizontal(slide_1)
})
link_2.addEventListener("click", () => {
    scroll_horizontal(slide_2)
})
link_3.addEventListener("click", () => {
    scroll_horizontal(slide_3)
})

const top_link = document.getElementById("top")
const landing = document.getElementById("landing")

top_link.addEventListener("click", () => {
    scroll(landing)
})