const ok = document.getElementById("ok")
const clos = document.getElementById("close")
const nav = document.getElementById("link-nav")

if(ok){
    ok.addEventListener("click" ,() =>{
        nav.classList.add("active")
    })
}
if(clos){
    clos.addEventListener("click", () =>{
        nav.classList.remove("active")
    })
}