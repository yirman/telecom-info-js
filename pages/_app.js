import { useEffect } from 'react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const gradients = {
      hero: 'linear-gradient(180deg, #eef2ff 0%, #ffffff 60%)',
      infographic: 'linear-gradient(180deg, #f0fdfa 0%, #ffffff 60%)',
      slide: 'linear-gradient(180deg, #fff7ed 0%, #ffffff 60%)',
      'tabs-section': 'linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)',
      'export-note': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
    }

    // ensure main content stacks above overlays
    const mainEl = document.querySelector('main')
    if (mainEl) {
      mainEl.style.position = mainEl.style.position || 'relative'
      mainEl.style.zIndex = '1'
    }

    let currentOverlay = null

    const crossfadeTo = (gradient) => {
      if (!gradient) return
      // create overlay
      const overlay = document.createElement('div')
      overlay.style.position = 'fixed'
      overlay.style.inset = '0'
      overlay.style.pointerEvents = 'none'
      overlay.style.zIndex = '0'
      overlay.style.opacity = '0'
      overlay.style.transition = 'opacity 700ms ease'
      overlay.style.backgroundImage = gradient
      document.body.appendChild(overlay)
      // trigger fade in
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      overlay.getBoundingClientRect()
      overlay.style.opacity = '1'

      // remove previous after transition
      if (currentOverlay) {
        const prev = currentOverlay
        setTimeout(() => {
          try { prev.remove() } catch (e) {}
          currentOverlay = overlay
        }, 750)
      } else {
        currentOverlay = overlay
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
          for (const key of Object.keys(gradients)) {
            if (entry.target.classList && entry.target.classList.contains(key)) {
              crossfadeTo(gradients[key])
              break
            }
          }
        }
      })
    }, { threshold: [0.45, 0.5, 0.75] })

    const sections = document.querySelectorAll('section')
    sections.forEach(s => observer.observe(s))

    return () => {
      observer.disconnect()
      if (currentOverlay) try { currentOverlay.remove() } catch (e) {}
    }
  }, [])

  return <Component {...pageProps} />
}
