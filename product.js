fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        var _product=document.getElementById("product")

       for (let i = 0; i < 9; i++) {
        var _div2=document.createElement("div")
        _div2.className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0"
        _div2.innerHTML=`
        <div class="card">
             <img src="${json[i].image}" class="card-img-top  h-25 mx-auto d-flex  " alt="..." >
             <div class="card-body">
               <h5 class="card-title"><a href=""><b>Category : </b>${json[i].category}</a></h5>
               <h5 class="card-title"><a href=""><b>Price : </b>${json[i].price} $</a></h5>
               <p class="card-text h-50 overflow-hidden"><b>Description :</b>${json[i].description}</p>
               <a href="#" class="btn">More details</a>
             </div>
           </div>
        `
        _product.appendChild(_div2)
                
       }
      })
