const sections = document.querySelectorAll('section')
const cards = document.querySelectorAll('.card')
console.log(sections)


addEventListener('scroll', () => {

  for(let i = 0; i < sections.length; i++) {
    const top = sections[i].getBoundingClientRect().top
    
    if (top < innerHeight - 200) {
      cards[i].classList.add('active')
    } else {
      cards[i].classList.remove('active')
    }
  }
})