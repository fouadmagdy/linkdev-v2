$(document).ready(function () {

  //slick slider

  $('.helped-carusal').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: '<img src="img/arrowleft.png" class="slick-prevbtn" />',
    prevArrow: '<img src="img/arrowright.png" class="slick-nextvbtn"/>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // scrolldown button

  document.querySelectorAll('.icon-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector('.helped').scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

  // rendering cards

  fetch('https://api.myjson.com/bins/e7ibe')
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {

      res.forEach((element, index) => {

        console.log(element)

        const markUp = `
                    <div class="card mt-2 text-light" style="width: 18rem;background: url(${element.imgUrl}) no-repeat center center;">
                        <div class="card-body">
                            <h5 class="card-title">${element.datenumber}</h5>
                            <h5 class="card-title">${element.month}</h5>
                            <h6 class="card-subtitle mb-2 text-light">${element.day} ${element.year}</h6>
                            <p class="card-text">${element.title}</p>
                            <p class="d-none">${element.desc}</p>
                            <a href="#" class="card-link text-light readmore-btn">Read More</a>
                        </div>
                    </div>
        `;

        document.querySelector('.card-deck').insertAdjacentHTML('afterbegin', markUp);

        $('.readmore-btn').on('click', function (e) {
          e.preventDefault()
          $(this).addClass('d-none')
          $(this).prev().removeClass('d-none')
        })


      });
    });
});