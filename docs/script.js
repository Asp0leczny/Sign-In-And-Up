const container = document.querySelector(".container"),
      ShowHide = document.querySelectorAll(".pass"),
      passField = document.querySelectorAll(".password");
      signUp = document.querySelector(".signup-link");
      login = document.querySelector(".login-link");

ShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        passField.forEach(passfield =>{
            if(passfield.type === "password"){
                passfield.type = "text";
                
                ShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash","fa-eye");
                })
            }else{
                passfield.type = "password";
                ShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye","fa-eye-slash");
                })
            }      
        })
    })
})


signUp.addEventListener("click", ()=>{
    container.classList.add("active");
});

login.addEventListener("click", ()=>{
    container.classList.remove("active");
});