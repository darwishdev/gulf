import { ref, onMounted , onUnmounted } from 'vue'

export function useAnimation() {

  const intersectionOptions = {
    threshold: 0.5, // percentage of the element's visibility required to trigger the intersection
  }

  // define the intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`animate__${entry.target.getAttribute('animation')}`)
        entry.target.classList.remove('invisible')
      }
    })
  }, intersectionOptions)


  onMounted(() => {
    for (const animationElem of $('body .animate__animated')) {
      observer.observe(animationElem)
    }
  })
  onUnmounted(() => {
    observer.disconnect()
  })
}
