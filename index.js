fetch('https://testpublishapi.onrender.com/')
      .then(response => response.json())
      .then(json => {
        var _employee=document.getElementById("employee")
        
      for (let i = 0; i < json.length; i++) {
        var _div=document.createElement("div")
        _div.className= "swiper-slide";
        _div.style.width="100px"
      var content=`
      <div class="testimonial-item">
        <img src=${json[i].image} class="testimonial-img" alt="">
        <h3>${json[i].firstname}</h3>
        <h4>${json[i].department}</h4>
        <p>
          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
         labore illum veniam.
          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
      </div>
    `
            _div.innerHTML=content
            _employee.appendChild(_div)

      }
    console.log(_employee)
      })