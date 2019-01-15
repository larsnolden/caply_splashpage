export default  (sectionId) => {
    const section = document.getElementById(sectionId);

    console.log(section)
    window.scrollTo({
        top:  section.offsetTop, 
        behavior: "smooth"
    })
}