fetch('https://testpublishapi.onrender.com/')
      .then(response => response.json())
      .then(json => {
        var _team=document.getElementById("newteam")
        for (let i = 4; i <8; i++) {
            var _div1=document.createElement("div")
            _div1.className="col-lg-3 col-md-6 d-flex align-items-stretch"
            _div1.innerHTML=`
                <div class="member">
                <div class="member-img">
                    <img src=${json[i].image} class="img-fluid" alt="">
                    <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div class="member-info">
                    <h4>${json[i].firstname}</h4>
                    <span>${json[i].department}</span>
                </div>
            </div>`
          _team.appendChild(_div1)
        }
              })
      