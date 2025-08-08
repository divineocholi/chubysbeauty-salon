document.addEventListener('DOMContentLoaded', () => {
  // Burger toggle
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

//   // Dropdown toggle
  const $dropdowns = Array.prototype.slice.call(document.querySelectorAll('.navbar-item.has-dropdown'), 0);

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(el => {
      const trigger = el.querySelector('.navbar-link');
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        el.classList.toggle('is-active');
      });
    });
  }
});

// Smooth scroll for anchor links

const {createApp,reactive} = Vue;

createApp({
  setup() {
    const items = reactive([
      {id: 0, pos: 0, url: 'images/purple.jpeg'},
      {id: 1, pos: 1, url: 'images/braids1.jpeg'},
      {id: 2, pos: 2, url: 'images/braids2.jpeg'},
      {id: 3, pos: 3, url: 'images/ceoilim.jpeg'},
      {id: 4, pos: 4, url: 'images/purplew.jpeg'},
     
    ]);

    function shuffle(item) {
      const heroPos = Math.floor(items.length/2);
      const hero = items.findIndex(({pos}) => pos === heroPos);
      const target = items.findIndex(({id}) => id === item.id);
      [items[target].pos,items[hero].pos] = [items[hero].pos,items[target].pos];
    }

    return {
      items,
      shuffle,
    }
  },
}).mount('#app');

Gallery


const images = document.querySelectorAll('.carousel-image')
const radius = 242
const progress = {
  value: 0
}
const carousel = document.querySelector('.carousel')

Observer.create({
  target: carousel,
  type: "wheel,pointer",
  onPress: (self) => {
    carousel.style.cursor = 'grabbing'
  },
  onRelease: (self) => {
    carousel.style.cursor = 'grab'
  },
  onChange: (self) => {
    gsap.killTweensOf(progress)
    const p = self.event.type === 'wheel' ? self.deltaY * -.0005 : self.deltaX * .05
    gsap.to(progress, {
      duration: 2,
      ease: 'power4.out',
      value: `+=${p}`
    })
  }
})

const animate = () => {
  images.forEach((image, index) => {
    const theta = index / images.length - progress.value
    const x = -Math.sin(theta * Math.PI * 2) * radius
    const y = Math.cos(theta * Math.PI * 2) * radius
    image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta }deg)`
    const c = Math.floor(index/images.length * 360)
    image.style.background = `hsla(${c}, 90%, 50%, .5)`
  })
}
gsap.ticker.add(animate)








// // Buy Now

document.addEventListener('DOMContentLoaded',function (){

 const carouselTrack = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const scrollAmount = 300;

nextBtn.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
});
 function orderNow(productName) {
  const whatsappNumber = "2348101342211"; // Replace with your WhatsApp number
  const message = `Hello, my name is _______. I want to order: *${productName}*. How much is it?`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
 }

// newletter
