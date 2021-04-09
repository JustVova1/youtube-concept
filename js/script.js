const swiper1 = new Swiper('.channel-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:4,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });
  const swiper2 = new Swiper('.channel-recomend', {
    // Optional parameters
    loop: true,
    slidesPerView:3,
    // Navigation arrows
    navigation: {
      nextEl: '.recomend-button-next',
      prevEl: '.recomend-button-prev',
    },
  });
  const swiper3 = new Swiper('.channel-food', {
    // Optional parameters
    loop: true,
    slidesPerView:4,
    // Navigation arrows
    navigation: {
      nextEl: '.food-button-next',
      prevEl: '.food-button-prev',
    },
  });