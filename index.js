const formToggle = document.querySelector(".toggle")
const fornBtn = document.querySelector(".form-btn")
const container = document.querySelector(".container")


const ul = document.createElement("ul")
container.insertAdjacentElement("beforeend", ul)


formToggle.addEventListener("click", ()=>{
    const footer = document.querySelector(".footer")
    footer.classList.toggle("act-1")
    console.log(footer)
})

fornBtn.addEventListener("click",()=>{
    const input = document.querySelector(".fotm-text")
    const li = document.createElement("li")
    const p = document.createElement("p")
    const removeBtn = document.createElement("button")
    const span2 = document.createElement("span")

    const date = new Date()
    
    p.textContent = input.value
    span2.innerHTML = `${date.getHours()} : ${date.getMinutes()}`

    removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M12.5 2.34375C18.1001 2.34375 22.6562 6.8999 22.6562 12.5C22.6562 18.1001 18.1001 22.6562 12.5 22.6562C6.8999 22.6562 2.34375 18.1001 2.34375 12.5C2.34375 6.8999 6.8999 2.34375 12.5 2.34375ZM8.82275 15.0728C8.74715 15.1446 8.6867 15.2308 8.64495 15.3264C8.6032 15.4219 8.58101 15.5249 8.57967 15.6291C8.57834 15.7334 8.59789 15.8369 8.63718 15.9335C8.67646 16.0301 8.73469 16.1178 8.80843 16.1916C8.88217 16.2653 8.96992 16.3235 9.06651 16.3628C9.16311 16.4021 9.26659 16.4217 9.37086 16.4203C9.47513 16.419 9.57808 16.3968 9.67363 16.355C9.76919 16.3133 9.85542 16.2528 9.92725 16.1772L12.5 13.605L15.0728 16.1772C15.2205 16.3176 15.4171 16.3947 15.6209 16.392C15.8246 16.3894 16.0192 16.3073 16.1633 16.1633C16.3073 16.0192 16.3894 15.8246 16.392 15.6209C16.3947 15.4171 16.3176 15.2205 16.1772 15.0728L13.605 12.5L16.1772 9.92725C16.3176 9.77954 16.3947 9.58286 16.392 9.37914C16.3894 9.17542 16.3073 8.98078 16.1633 8.83672C16.0192 8.69265 15.8246 8.61057 15.6209 8.60796C15.4171 8.60535 15.2205 8.68243 15.0728 8.82275L12.5 11.395L9.92725 8.82275C9.77954 8.68243 9.58286 8.60535 9.37914 8.60796C9.17542 8.61057 8.98078 8.69265 8.83672 8.83672C8.69265 8.98078 8.61057 9.17542 8.60796 9.37914C8.60535 9.58286 8.68243 9.77954 8.82275 9.92725L11.395 12.5L8.82275 15.0728Z" fill="black"/>
    </svg>`

    li.insertAdjacentElement("beforeend", p)
    li.insertAdjacentElement("beforeend", removeBtn)
    ul.insertAdjacentElement("beforeend", li)
    p.insertAdjacentElement("beforeend", span2)



    removeBtn.addEventListener("click",()=>{
        li.remove()
    })
})


