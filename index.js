var sections = document.querySelectorAll(".hide")



let observer = new IntersectionObserver((entries, observer) => {
    
    entries.forEach((entry) =>{
        if( entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
        
    });
});

sections.forEach((section)=>{
  observer.observe(section)  
})
