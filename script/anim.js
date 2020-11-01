/* Mise en place des animations ici */

var tl = gsap.timeline();
//sequenced one-after-the-other
tl.from(".header", { y: -300, duration: 2 })
    .from(".list-item1", { opacity: 0, duration: 1 })
    .from(".list-item2", { opacity: 0, duration: 1 })
    .from(".list-item3", { opacity: 0, duration: 1 })
    .from(".list-item4", { opacity: 0, duration: 1 })
    .from(".list-item5", { opacity: 0, duration: 1 })