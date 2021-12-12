import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const selectors = { 
    profile: ".profile",
    profileImageHolder: ".image"
  }

  Class Profile {
    constructor(holder){
      this.profile = holder.querySelector(selectors.profile);

      this.init();
    }

    init(){
      this.expandImage();
    }

    expandImage(){
    this.profile.addEventListener("mouseover", () => {
      this.profile.classList.toggle("active");
    });
    }
  }

  document.querySelectorAll(selectors.profileImageHolder).forEach(holder =>{
    new Profile(holder);
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
