document.addEventListener("DOMContentLoaded", () => {
    const links = [{ 
        text: "YouTube", url: "#", iconClass: "fab fa-youtube" },
        { text: "YouTube", url: "https://www.youtube.com/channel/UCKDuxr3mkrO1knRyuCgH1oA", iconClass: "fab fa-youtube" },
        { text: "Facebook", url: "https://www.facebook.com/nattakarn.preesong/", iconClass: "fab fa-facebook" },
        { text: "Instagram", url: "https://www.instagram.com/nattakarn.preesong/", iconClass: "fab fa-instagram" },
        { text: "Discord", url: "https://discord.gg/H889wwVKbm", iconClass: "fab fa-discord" },
        { text: "Github", url: "https://github.com/NattakarnPreesong", iconClass: "fab fa-github" }
    ];

    generateLinks(links);
});

function generateLinks(links) {
    const linksContainer = document.getElementById("links-container");

    links.forEach(linkData => {
        const linkElement = document.createElement("div");
        linkElement.classList.add("link");

        const linkAnchor = document.createElement("a");
        linkAnchor.href = linkData.url;

        const iconElement = document.createElement("i");
        linkData.iconClass.split(' ').forEach(iconClass => iconElement.classList.add(iconClass));

        linkAnchor.appendChild(iconElement);

        const textElement = document.createElement("span");
        textElement.textContent = linkData.text;
        linkAnchor.appendChild(textElement);

        linkElement.appendChild(linkAnchor);
        linksContainer.appendChild(linkElement);

        linkAnchor.addEventListener("click", event => {
            event.preventDefault();
            showToast(linkData.text).then(() => {
                window.location.href = linkData.url;
            });
        });
    });
}

async function showToast(linkText) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("active");
    document.body.appendChild(toast);

    const toastContent = document.createElement("div");
    toastContent.classList.add("toast-content");
    toast.appendChild(toastContent);

    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-check", "check");
    toastContent.appendChild(iconElement);

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message");
    toastContent.appendChild(messageContainer);

    const textElement1 = document.createElement("span");
    textElement1.classList.add("text", "text-1");
    textElement1.textContent = "Success";
    messageContainer.appendChild(textElement1);

    const textElement2 = document.createElement("span");
    textElement2.classList.add("text", "text-2");
    textElement2.textContent = `Redirecting to ${linkText}`;
    messageContainer.appendChild(textElement2);

    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid", "fa-xmark", "close");
    toast.appendChild(closeIcon);

    const progress = document.createElement("div");
    progress.classList.add("progress");
    toast.appendChild(progress);

    setTimeout(() => {
        toast.classList.add("fadeOut");
    }, 1500);

    await new Promise(resolve => setTimeout(() => {
        toast.remove();
        resolve();
    }, 2000));
}


function openLightbox() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = lightbox.style.display === "flex" ? "none" : "flex";
}
