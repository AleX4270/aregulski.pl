export class welcomeBtnController
{
    aboutMeSection;
    welcomeButton;

    constructor()
    {
        this.aboutMeSection = document.querySelector(".about-me-section");
        this.welcomeButton = document.querySelector(".welcome-btn");

        this.welcomeButton.addEventListener("click", () => {
            this.scrollToAboutMe(this.aboutMeSection);
        })

    }

    scrollToAboutMe(section)
    {
        section.scrollIntoView();
    }
}