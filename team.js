var _team=document.getElementById("newteam")

fetch('https://testpublishapi.onrender.com/')
      .then(response => response.json())
      .then(json => {
       
        for (let i = 4; i <8; i++) {
            var _div1=document.createElement("div")
    _div1.className="col-lg-3 col-md-6 d-flex align-items-stretch"
             var content=` <div class="member">
            <div class="member-img">
                <img src=${json[i].image} class="img-fluid" alt="${json[i].alt}">
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
            _div1.innerHTML=content
            // console.log(_div1)
            _team.appendChild(_div1)

        }

        // console.log("after loop")
        // console.log(_team)

              })
      