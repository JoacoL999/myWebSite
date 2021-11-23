

function getLS() {
    
    let productsCheck;

    if(localStorage.getItem('products') === null){

        productsCheck = []

    } else {

        productsCheck = JSON.parse(localStorage.getItem('products'));

    }

    return productsCheck;

}

function totalLive() {

    let total = 0, 
        totalProd = getLS();
        for(let i=0; i < totalProd.length; i++){

            let element = Number(totalProd[i].price * totalProd[i].quantity);
            total = total + element;
        }

        $('#total').html(`$ ${total.toLocaleString('es')}`);
    
}



$(document).ready(function () {
    
    
    productsCheck = getLS();

    productsCheck.forEach(newProduct => {

        


        let write = `   <tr>
                            <td><img src='${newProduct.img}' width=100></td>
                            <td>${newProduct.brand} `+`${newProduct.model}</td>
                            <td>$${(newProduct.price).toLocaleString('es')}</td>
                            <td>${newProduct.quantity}</td>
                            <td>$${(parseInt(newProduct.price) * newProduct.quantity).toLocaleString('es')}</td>
                            <td></td>
                            <td><i class="delete-product text-green fas fa-trash-alt" type="button" data-id='${newProduct.id}'></i></td>
                            </tr>
                          `;

        $("#tbody").append(write);
        
        totalLive()
        

    });

});

$('#tbody').click(function(e){

    e.preventDefault();

    let target = $( e.target )

    if(target.hasClass('delete-product')){

        $(target).parent().parent().remove();
        let prodID = $(target).attr('data-id');
        

        

        let productsCheck;
        productsCheck = getLS();
        productsCheck.forEach(function(product, index){

        if(product.id === prodID){

            productsCheck.splice(index, 1);
        }
        });
        
    localStorage.setItem('products', JSON.stringify(productsCheck));
    totalLive()



    }

    

        
       
        

    

    

})


$('#payNow').click(function (e) {

    e.preventDefault();

    if(getLS().length === 0){

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No se puede realizar la compra',
            text: 'Tienes el carrito vacio',
            showConfirmButton: false,
            timer: 1900

        }).then(function(){
            window.location = 'hardware.html'
        }) 
    } else if(named.value === '' || lastNamed.value === '' || emaild.value === ''){

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            text: 'Complete los espacios vacios',
            showConfirmButton: false,
            timer: 1900

        })}

     else {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Felicitaciones',
            text: 'Compra realizada con exito!!',
            showConfirmButton: false,
            timer: 2100

        }).then(function(){
            localStorage.clear()
            window.location = 'hardware.html'
        }) 
        }
    
})


        