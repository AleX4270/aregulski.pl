export class scrollTopController
{
    scrollBtn;

    constructor()
    {
        this.scrollBtn = document.querySelector(".scrollTopBtn");
        console.log(this.scrollBtn);
        window.addEventListener("scroll", () => {
            this.detectScroll(this.scrollBtn);
        });
        this.scrollBtn.addEventListener("click", this.onScrollBtnClick);
    }

    detectScroll(scrollBtn)
    {
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
        {
            this.scrollBtn.style.display = "block";
        }
        else
        {
            this.scrollBtn.style.display = "none";
        }

    }

    onScrollBtnClick()
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



}