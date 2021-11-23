var newProduct;
const  products = [];

$(document).ready(function () {

       $.getJSON(dataProds,
           function (data) {

            localStorage.setItem('dataBase', JSON.stringify(data));
 
           }

       );

       let productsCheck;

       if(localStorage.getItem('products') === null){

           productsCheck = []

       } else {

           productsCheck = JSON.parse(localStorage.getItem('products'));

       }


        productsCheck.forEach(newProduct => {

            let write = `   <tr>
                                <td><img src='${newProduct.img}' width=100></td>
                                <td>${newProduct.brand} `+`${newProduct.model}</td>
                                <td>$${(parseInt(newProduct.price) * newProduct.quantity).toLocaleString('es')}</td>
                                <td>${newProduct.quantity}</td>
                                <td><i class="delete-product text-green fas fa-trash-alt" type="button" data-id='${newProduct.id}'></i></td>
                                </tr>
                              `;

            $("#table-shopping tbody").append(write);
 
        });


        })




carryEvent();


function carryEvent() {
    

        $('main').click(function(e){


               
                    e.preventDefault();
        
                    let target = $( e.target )

                    
            
                    if(target.hasClass('add')){

                        let prodID = $(target).attr('data-id');
                        
                        let quantitySec = $(target).parent('div').find('select').val()

                        

                        

                        const productLS = JSON.parse(localStorage.getItem('dataBase'));

                       

                        productLS.forEach(product => {

                            if(product.id === prodID)

                                newProduct = {


                                id: product.id,
                                brand: product.brand,
                                model: product.model,
                                price: product.price,
                                img: product.pic1,
                                quantity: quantitySec

                              


                            }

                            return newProduct;

                            
                        });

                    
                        
                        
                        let productsCheck;

                        productsCheck = getLS()

                        productsCheck.forEach(function(productCheck){

                            if(productCheck.id === newProduct.id){
                                productsCheck = productCheck.id;
                            }
                        });

                        if(productsCheck === newProduct.id){

                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Oops tenemos un problema',
                                text: 'No puedes agregar otra vez el producto al carrito',
                                showConfirmButton: false,
                                timer: 1900
                
                            })
                        } else{
                            
                            Swal.fire({
                                position: 'top-end',
                                type: 'info',
                                icon: 'success',
                                title: 'Producto agregado al carrito!',
                                showConfirmButton: false,
                                timer: 1100
                              })
                
                              

                              let write = ` <tr>
                                                <td><img src='${newProduct.img}' width=100></td>
                                                <td>${newProduct.brand} `+`${newProduct.model}</td>
                                                <td>$${(parseInt(newProduct.price) * newProduct.quantity).toLocaleString('es')}</td>
                                                <td>${newProduct.quantity}</td>
                                                <td><i class="delete-product text-green fas fa-trash-alt" type="button" data-id='${newProduct.id}'></i></td>
                                            </tr>
                              `;

                              $("#table-shopping tbody").append(write);

                              let products;
                              products= getLS();
                              products.push(newProduct);
                              localStorage.setItem('products', JSON.stringify(products))
                
                        }
                                        
                        }
                        
        })


                        $('#table-shopping').click(function(e){

                            e.preventDefault();
        
                            let target = $( e.target )

                            if(target.hasClass('delete-product')){
                                $(target).parent().parent().slideUp({duration: 5000, queue: false})
                                .fadeOut({duration: 400, queue: false})
                                .promise().done(function() {
                                    $(target).parent().parent().remove()
                                
                                });;
                                let prodID = $(target).attr('data-id');

                                

                                let productsCheck;
                                productsCheck = getLS();
                                productsCheck.forEach(function(product, index){

                                if(product.id === prodID){

                                    productsCheck.splice(index, 1);
                                }
                                });

                            localStorage.setItem('products', JSON.stringify(productsCheck));



                            }

                            

                        })



                        
                        function getLS() {

                             let productsCheck;

                                if(localStorage.getItem('products') === null){

                                    productsCheck = []
                        
                                } else {
                        
                                    productsCheck = JSON.parse(localStorage.getItem('products'));
                        
                                }
                                return productsCheck;

                            
                        }
                        
            $('#processOrder').click(function(e){

                e.preventDefault();
                if(getLS().length === 0){

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'No has comprado nada :(',
                        showConfirmButton: false,
                        timer: 1500
        
                    })


            } else {

                location.href = 'orderSite.html'

            }
                
            }
            )}
  