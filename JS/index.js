var productName =document.getElementById('productname')
var productPrice=document.getElementById('productprice')
var productCategory=document.getElementById('productcategory')
var ProductDescription=document.getElementById('productdescription')

var productsContainer;

if (localStorage.getItem("products") == null) {
    productsContainer=[];
}
else{
    productsContainer = JSON.parse(localStorage.getItem('products'));
    displayProduct();
}

function addProduct(){
    var product ={
    name : productName.value ,
    price : productPrice.value ,
    category: productCategory.value,
    description:ProductDescription.value,
    }
    productsContainer.push(product);
    clearProduct();  
    displayProduct();
    localStorage.setItem('products', JSON.stringify(productsContainer));
}
function clearProduct() {
    productName.value=null;
    productPrice.value=null;
    productCategory.value=null;
    ProductDescription.value=null;
}

function displayProduct() {
    var display = `` ;
    for (var i=0 ; i < productsContainer.length ; i++) {
        display += ` <div class="col-md-2">
                <div class="products">
                    <img src="img/testi-1.jpg" alt="product name" srcset="">
                    <h2 class="h4">`+productsContainer[i].name+`</h2>
                    <p class="text-secondary mb-2">`+productsContainer[i].description+`</p>
                    <h3 class="h5"><span class="fw-bolder">Price : </span>`+productsContainer[i].price+`</h3>
                    <h3 class="h5"><span class="fw-bolder">Category : </span>`+productsContainer[i].category+`</h3>
                </div>
            </div>`;
    }
    document.getElementById('rowData').innerHTML= display;
}