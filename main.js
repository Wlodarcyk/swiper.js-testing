document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
       
     

        pagination: {
            clickable: true,
            el: '.swiper-pagination'
        },
          navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
          },
         
          grabCursor: true,
          zoom: {
            toggle: true,
            maxRatio: 5,
            minRatio: 1,
          }
          
           
    })
})