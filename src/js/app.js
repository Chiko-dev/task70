window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const selectors = { 
    profile: ".profile",
    profileImageHolder: ".image"
  }

  class Profile {
    constructor(holder){
      this.profile = holder.querySelector(selectors.profile);
      this.profileImageHolder = document.querySelector(selectors.profileImageHolder);

      this.init();
    }

    init(){
      this.expandImage();
      this.shringImage();
    }

    expandImage(){
      this.profile.addEventListener("click", () => {
        this.profile.classList.toggle("active");
        this.profileImageHolder.style.transform = 'scale(2,2)';
      });
    }

    shringImage(){
      this.profile.addEventListener("mouseout", () => {
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
