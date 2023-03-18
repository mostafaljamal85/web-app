fetch('https://testpublishapi.onrender.com/')
      .then(response => response.json())
      .then(json => {
            
        json.forEach(element => {
            var _employee=document.getElementById("employee")

            var _div=document.createElement("div")
            //    _span.setAttribute("class","swiper-wrapper")
            _div.innerHTML=`
           <div class="swiper-slide">
              <div class="testimonial-item">
                <img src=${element.image} class="testimonial-img" alt="">
                <h3>${element.firstname}</h3>
                <h4>${element.department}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                 labore illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>`
            _employee.appendChild(_div)
        });
      })