document.addEventListener('DOMContentLoaded', function(){
  // fade-in
  requestAnimationFrame(()=>document.body.classList.add('is-loaded'))

  // mobile menu toggle (aria-expanded boolean)
  const ham = document.querySelector('.hamburger')
  const mobile = document.querySelector('.mobile-menu')
  if(ham && mobile){
    ham.setAttribute('aria-expanded', 'false')
    mobile.style.display = 'none'
    ham.addEventListener('click', ()=>{
      const expanded = ham.getAttribute('aria-expanded') === 'true'
      ham.setAttribute('aria-expanded', String(!expanded))
      if(!expanded){
        mobile.style.display = 'flex'
        mobile.classList.add('open')
      } else {
        mobile.style.display = 'none'
        mobile.classList.remove('open')
      }
    })
  }

  // Add-to-cart feedback for small buttons
  document.querySelectorAll('.btn-small').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const original = btn.textContent
      btn.textContent = 'Added'
      btn.disabled = true
      btn.style.opacity = '0.8'
      setTimeout(()=>{btn.textContent = original || 'Add';btn.disabled=false;btn.style.opacity='1'},1200)
    })
  })

  // close mobile menu when navigating
  document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click', ()=>{
    if(mobile){ mobile.style.display = 'none'; ham && ham.setAttribute('aria-expanded','false') }
  }))

  // adjust header positioning when hero height/responsive changes
  function syncHeader(){
    const header = document.querySelector('.site-header')
    const hero = document.querySelector('.hero')
    if(!header || !hero) return
    // ensure header sits visually inside the hero (no extra body padding required)
    header.style.position = 'absolute'
    header.style.top = '28px'
  }
  syncHeader()
  window.addEventListener('resize', syncHeader)
})
