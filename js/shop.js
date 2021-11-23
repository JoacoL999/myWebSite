
const dataProds = 'json/database.json'


$(document).ready(function() {
    
    

    $.getJSON(dataProds,
        function (data) {

            const intelThumb = data.filter(intel => intel.brand === 'Intel®' )

            intelThumb.forEach(intel => {


                let write = `   <div class="btn col-xl-2 col-12 col-lg-5 my-5  p-0 " data-bs-toggle="modal" data-bs-target="#modal${intel.id}">
                                <div class="bg-secondary">
                                    <img src="${intel.thumbp}" class="w-75 mx-auto my-4   " alt="${intel.name}">
                                </div>
                                <div>
                                    <h5 class="card-title text-center text-light title-ita bg-newdark py-2 border-b-g">${intel.brand}` + ` ${intel.model}</h5>
                                </div>
                            </div> `



                $(".itemIntel").append(write);

                let writeModal = `  <div class="modal fade" id="modal${intel.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-xl">
                                            <div class="modal-content bg-newdark text-light">
                                                <div class="modal-header border-b-g bg-secondary">
                                                    <h5 class="modal-title title-ita text-green " id="exampleModalLabel">${intel.subBrand}</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                    <div class="p-3 py-0 modal-body row">
                                                        <div class="col-lg-12 col-xl-6 col-md-11 col-12 m-0 ms-lg-5 mt-lg-3 mb-lg-5 m-xl-0 ps-lg-5 pt-lg-3 p-0 p-xl-0">
                                                            <div class="d-flex">
                                                                <div class=" bg-newdark flex-column flex-lg-column">
                                                                    <div class="d-flex flex-lg-column thumbnails align-bottom">
                                                                        <div id="${intel.p1}" class="tb tb-active"> <img class="thumbnail-img fit-image" src="${intel.pic1}"> </div>
                                                                    <div id="${intel.p2}" class="tb"> <img class="thumbnail-img fit-image" src="${intel.pic2}"> </div>
                                                                    <div id="${intel.p3}" class="tb"> <img class="thumbnail-img fit-image" src="${intel.pic3}"> </div>
                                                                    </div>
                                                                    <fieldset id="${intel.p1}1" class="active">
                                                                    <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid img-shop" src="${intel.pic1}"> </div>
                                                                    </fieldset>
                                                                    <fieldset id="${intel.p2}1" class=" ">
                                                                        <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${intel.pic2}"> </div>
                                                                    </fieldset>
                                                                    <fieldset id="${intel.p3}1" class=" ">
                                                                        <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${intel.pic3}"> </div>
                                                                    </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-lg-12 col-xl-6 border-l-g bg-newdark ps-xl-5">
                                                                <h4 class="title-ita mt-3 text-start price text-green">${intel.name}</h4>
                                                                    <div class="ms-auto me-0 col-12 d-flex justify-content-between ">
                                                                        <h5 class="mt-xl-5 font2 display-6 text-start price text-light col-2 ">$<span>${(intel.price.toLocaleString('es'))}</span></h5>
                                                                            <div class="align-self-end col-5">
                                                                                <h5 class="font2">Cantidad</h5><select name="select" class="form-select bg-dark text-light">
                                                                                <option value="1" selected>1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">5</option>
                                                                                <option value="6">6</option>
                                                                                <option value="7">7</option>
                                                                                <option value="8">8</option>
                                                                                </select>
                                                                            </div>
                                                                    </div>
                                                                    <span class="font2 m-0 text-grey">o</span>
                                                                    <h6 class="text-start subprice font2 text-light"> en 12x $${parseInt((intel.price) / 12).toLocaleString('es')}</h6>
                                                                    <p class="text-center mt-5">Cuotas sin interés - Garantía 1 año - Envió Gratis</p>
                                                                    <h6 class="font2 text-grey">Product code: xxxx-xxxxxxxx-xxxx</h6>
                                                                    <h6 class="font2 mt-xl-3 text-grey">Especificaciones</h6>
                                                                    <ul class=" text-grey list-inline ">
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Frecuencia del procesador
                                                                                <ul class="list-inline mb-2 me-3">
                                                                                    <li class="list-inline-item text-grey">${intel.baseFrec}</li>
                                                                                </ul>
                                                                        </li>
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Frecuencia Turbo Boost
                                                                            <ul class="list-inline mb-2 me-3">
                                                                                <li class="list-inline-item text-grey">${intel.turboFrec}</li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Núcleos
                                                                            <ul class="list-inline">
                                                                                <li class="list-inline-item text-grey">${intel.cores}</li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Subprocesos
                                                                            <ul class="list-inline me-3">
                                                                                <li class="list-inline-item me-3 text-grey">${intel.threads}</li>
                                                                            </ul>
                                                                        </li class="list-inline-item me-3">
                                                                        <li class="list-inline-item me-3 text-light">Caché
                                                                            <ul class="list-inline me-3">
                                                                                <li class="list-inline-item text-grey">${intel.cache}</li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                    <a href="#" data-id='${intel.id}' class="btn btn-green text-newdark button input-block-level form-control p-2 font2 mb-3 mb-xl-0 add">Añadir al carrito</a>
                                                            </div>
        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                
                 `
                
                $('.artCPU').append(writeModal);

                
                            
            });



            const amdThumb = data.filter(amd => amd.brand === 'AMD' )

            amdThumb.forEach(amd => {


                let write = `   <div class="btn col-xl-2 col-12 col-lg-5 my-5  p-0 " data-bs-toggle="modal" data-bs-target="#modal${amd.id}">
                                <div class="bg-secondary">
                                    <img src="${amd.thumbp}" class="w-75 mx-auto my-4   " alt="${amd.name}">
                                </div>
                                <div>
                                    <h5 class="card-title text-center text-light title-ita bg-newdark py-2 border-b-g">${amd.brand}` + ` ${amd.model}</h5>
                                </div>
                            </div> `



                $(".itemAMD").append(write);

                let writeModal = `  <div class="modal fade" id="modal${amd.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-xl">
                                            <div class="modal-content bg-newdark text-light">
                                                <div class="modal-header border-b-g bg-secondary">
                                                    <h5 class="modal-title title-ita text-green " id="exampleModalLabel">${amd.subBrand}</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                    <div class="p-3 py-0 modal-body row">
                                                        <div class="col-lg-12 col-xl-6 col-md-11 col-12 m-0 ms-lg-5 mt-lg-3 mb-lg-5 m-xl-0 ps-lg-5 pt-lg-3 p-0 p-xl-0">
                                                            <div class="d-flex">
                                                                <div class=" bg-newdark flex-column flex-lg-column">
                                                                    <div class="d-flex flex-lg-column thumbnails align-bottom">
                                                                        <div id="${amd.p1}" class="tb tb-active"> <img class="thumbnail-img fit-image" src="${amd.pic1}"> </div>
                                                                    <div id="${amd.p2}" class="tb"> <img class="thumbnail-img fit-image" src="${amd.pic2}"> </div>
                                                                    <div id="${amd.p3}" class="tb"> <img class="thumbnail-img fit-image" src="${amd.pic3}"> </div>
                                                                    </div>
                                                                    <fieldset id="${amd.p1}1" class="active">
                                                                    <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid img-shop" src="${amd.pic1}"> </div>
                                                                    </fieldset>
                                                                    <fieldset id="${amd.p2}1" class=" ">
                                                                        <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${amd.pic2}"> </div>
                                                                    </fieldset>
                                                                    <fieldset id="${amd.p3}1" class=" ">
                                                                        <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${amd.pic3}"> </div>
                                                                    </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-lg-12 col-xl-6 border-l-g bg-newdark ps-xl-5">
                                                                <h4 class="title-ita mt-3 text-start price text-green">${amd.name}</h4>
                                                                    <div class="ms-auto me-0 col-12 d-flex justify-content-between ">
                                                                        <h5 class="mt-xl-5 font2 display-6 text-start price text-light col-2 ">$<span>${(amd.price.toLocaleString('es'))}</span></h5>
                                                                            <div class="align-self-end col-5">
                                                                                <h5 class="font2">Cantidad</h5><select name="select" class="form-select bg-dark text-light">
                                                                                <option value="1" selected>1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">5</option>
                                                                                <option value="6">6</option>
                                                                                <option value="7">7</option>
                                                                                <option value="8">8</option>
                                                                                </select>
                                                                            </div>
                                                                    </div>
                                                                    <span class="font2 m-0 text-grey">o</span>
                                                                    <h6 class="text-start subprice font2 text-light"> en 12x $${parseInt((amd.price) / 12).toLocaleString('es')}</h6>
                                                                    <p class="text-center mt-5">Cuotas sin interés - Garantía 1 año - Envió Gratis</p>
                                                                    <h6 class="font2 text-grey">Product code: xxxx-xxxxxxxx-xxxx</h6>
                                                                    <h6 class="font2 mt-xl-3 text-grey">Especificaciones</h6>
                                                                    <ul class=" text-grey list-inline ">
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Frecuencia del procesador
                                                                                <ul class="list-inline mb-2 me-3">
                                                                                    <li class="list-inline-item text-grey">${amd.baseFrec}</li>
                                                                                </ul>
                                                                        </li>
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Frecuencia Turbo Boost
                                                                            <ul class="list-inline mb-2 me-3">
                                                                                <li class="list-inline-item text-grey">${amd.turboFrec}</li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Núcleos
                                                                            <ul class="list-inline">
                                                                                <li class="list-inline-item text-grey">${amd.cores}</li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="list-inline-item mb-2 me-3 text-light">Subprocesos
                                                                            <ul class="list-inline me-3">
                                                                                <li class="list-inline-item me-3 text-grey">${amd.threads}</li>
                                                                            </ul>
                                                                        </li class="list-inline-item me-3">
                                                                        <li class="list-inline-item me-3 text-light">Caché
                                                                            <ul class="list-inline me-3">
                                                                                <li class="list-inline-item text-grey">${amd.cache}</li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                    <a href="#" data-id='${amd.id}' class="btn btn-green text-newdark button input-block-level form-control p-2 font2 mb-3 mb-xl-0 add">Añadir al carrito</a>
                                                            </div>
        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                
                 `
                
                $('.artCPU').append(writeModal);
                
                
                            
            });


            const nvidiaThumb = data.filter(nvidia => nvidia.brand === 'Nvidia' )

            nvidiaThumb.forEach(nvidia => {


                let write = `   <div class="btn col-xl-2 col-12 col-lg-5 my-5  p-0 " data-bs-toggle="modal" data-bs-target="#modal${nvidia.id}">
                                <div class="bg-secondary">
                                    <img src="${nvidia.thumbp}" class="w-75 mx-auto my-4   " alt="${nvidia.name}">
                                </div>
                                <div>
                                    <h5 class="card-title text-center text-light title-ita bg-newdark py-2 border-b-g">${nvidia.brand}` + ` ${nvidia.model}</h5>
                                </div>
                            </div> `



                $(".itemNvidia").append(write);

                let writeModal = `  <div class="modal fade" id="modal${nvidia.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-xl">
                                            <div class="modal-content bg-newdark text-light">
                                            <div class="modal-header border-b-g bg-secondary">
                                            <h5 class="modal-title title-ita text-green " id="exampleModalLabel">${nvidia.subBrand}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="p-3 py-0 modal-body row">
                                            <div class="col-lg-12 col-xl-6 col-md-11 col-12 m-0 ms-lg-5 mt-lg-3 mb-lg-5 m-xl-0 ps-lg-5 pt-lg-3 p-0 p-xl-0">
                                                <div class="d-flex">
                                                    <div class=" bg-newdark flex-column flex-lg-column">
                                                        <div class="d-flex flex-lg-column thumbnails align-bottom">
                                                            <div id="${nvidia.p1}" class="tb tb-active"> <img class="thumbnail-img fit-image" src="${nvidia.pic1}"> </div>
                                                                <div id="${nvidia.p2}" class="tb"> <img class="thumbnail-img fit-image" src="${nvidia.pic2}"> </div>
                                                                    <div id="${nvidia.p3}" class="tb"> <img class="thumbnail-img fit-image" src="${nvidia.pic3}"> </div>
                                                        </div>
                                                        <fieldset id="${nvidia.p1}1" class="active">
                                                            <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid img-shop" src="${nvidia.pic1}"> </div>
                                                        </fieldset>
                                                        <fieldset id="${nvidia.p2}1" class="">
                                                            <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${nvidia.pic2}"> </div>
                                                        </fieldset>
                                                        <fieldset id="${nvidia.p3}1" class="">
                                                            <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${nvidia.pic3}"> </div>
                                                        </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-12 col-xl-6 border-l-g bg-newdark ps-xl-5">
                                                    <h4 class="title-ita mt-3 text-start price text-green">${nvidia.name}</h4>
                                                    <div class="ms-auto me-0 col-12 d-flex justify-content-between ">
                                                        <h5 class="mt-xl-5 font2 display-6 text-start price text-light col-2 ">$<span>${(nvidia.price.toLocaleString('es'))}</span></h5>
                                                        <div class="align-self-end col-5">
                                                            <h5 class="font2">Cantidad</h5><select name="select" class="form-select bg-dark text-light">
                                                                <option value="1" selected>1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <span class="font2 m-0 text-grey">o</span>
                                                    <h6 class="text-start subprice font2 text-light"> en 18x $${parseInt((nvidia.price) / 18).toLocaleString('es')}</h6>
                                                    <p class="text-center mt-5">Cuotas sin interés - Garantía 1 año - Envió Gratis</p>
                                                    <h6 class="font2 text-grey">Product code: xxxx-xxxxxxxx-xxxx</h6>
                                                    <h6 class="font2 mt-xl-3 text-grey">Especificaciones</h6>
                                                    <ul class=" text-grey list-inline ">
                                                        <li class="list-inline-item mb-2 me-3 text-light">Reloj Base Gaming Mode
                                                            <ul class="list-inline mb-2 me-3">
                                                                <li class="list-inline-item text-grey">${nvidia.baseFrec}</li>
                                                            </ul>
                                                        </li>
                                                        <li class="list-inline-item mb-2 me-3 text-light">Reloj Boost Gaming Mode
                                                            <ul class="list-inline mb-2 me-3">
                                                                <li class="list-inline-item text-grey">${nvidia.turboFrec}</li>
                                                            </ul>
                                                        </li>
                                                        <li class="list-inline-item mb-2 me-3 text-light">VRAM
                                                            <ul class="list-inline">
                                                                <li class="list-inline-item text-grey">${nvidia.vram}</li>
                                                            </ul>
                                                        </li>
                                                        <li class="list-inline-item mb-2 me-3 text-light">Reloj VRAM
                                                            <ul class="list-inline me-3">
                                                                <li class="list-inline-item me-3 text-grey">${nvidia.rVram}</li>
                                                            </ul>
                                                        </li class="list-inline-item me-3">
                                                        <li class="list-inline-item me-3 text-light">Bus
                                                            <ul class="list-inline me-3">
                                                                <li class="list-inline-item text-grey">${nvidia.bus}</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <a href="#" data-id='${nvidia.id}' class="btn btn-green text-newdark button input-block-level form-control p-2 font2 mb-3 mb-xl-0 add">Añadir al carrito</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                `
                
                $('.artGPU').append(writeModal);
                
                            
            });


        
    


            const radeonThumb = data.filter(radeon => radeon.brand === 'Radeon' )

            radeonThumb.forEach(radeon => {


                let write = `   <div class="btn col-xl-2 col-12 col-lg-5 my-5  p-0 " data-bs-toggle="modal" data-bs-target="#modal${radeon.id}">
                                <div class="bg-secondary">
                                    <img src="${radeon.thumbp}" class="w-75 mx-auto my-4   " alt="${radeon.name}">
                                </div>
                                <div>
                                    <h5 class="card-title text-center text-light title-ita bg-newdark py-2 border-b-g">${radeon.brand}` + ` ${radeon.model}</h5>
                                </div>
                            </div> `



                $(".itemRadeon").append(write);

                let writeModal = `  <div class="modal fade" id="modal${radeon.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-xl">
                                            <div class="modal-content bg-newdark text-light">
                                            <div class="modal-header border-b-g bg-secondary">
                                            <h5 class="modal-title title-ita text-green " id="exampleModalLabel">${radeon.subBrand}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="p-3 py-0 modal-body row">
                                            <div class="col-lg-12 col-xl-6 col-md-11 col-12 m-0 ms-lg-5 mt-lg-3 mb-lg-5 m-xl-0 ps-lg-5 pt-lg-3 p-0 p-xl-0">
                                                <div class="d-flex">
                                                    <div class=" bg-newdark flex-column flex-lg-column">
                                                        <div class="d-flex flex-lg-column thumbnails align-bottom">
                                                            <div id="${radeon.p1}" class="tb tb-active"> <img class="thumbnail-img fit-image" src="${radeon.pic1}"> </div>
                                                                <div id="${radeon.p2}" class="tb"> <img class="thumbnail-img fit-image" src="${radeon.pic2}"> </div>
                                                                    <div id="${radeon.p3}" class="tb"> <img class="thumbnail-img fit-image" src="${radeon.pic3}"> </div>
                                                        </div>
                                                        <fieldset id="${radeon.p1}1" class="active">
                                                            <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid img-shop" src="${radeon.pic1}"> </div>
                                                        </fieldset>
                                                        <fieldset id="${radeon.p2}1" class="">
                                                            <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${radeon.pic2}"> </div>
                                                        </fieldset>
                                                        <fieldset id="${radeon.p3}1" class="">
                                                            <div class="product-pic"> <img class="h-100 mt-5 pt-4 mt-lg-0 pt-lg-0  img-fluid " src="${radeon.pic3}"> </div>
                                                        </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-12 col-xl-6 border-l-g bg-newdark ps-xl-5">
                                                    <h4 class="title-ita mt-3 text-start price text-green">${radeon.name}</h4>
                                                    <div class="ms-auto me-0 col-12 d-flex justify-content-between ">
                                                        <h5 class="mt-xl-5 font2 display-6 text-start price text-light col-2 ">$<span>${(radeon.price.toLocaleString('es'))}</span></h5>
                                                        <div class="align-self-end col-5">
                                                            <h5 class="font2">Cantidad</h5><select name="select" class="form-select bg-dark text-light">
                                                                <option value="1" selected>1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <span class="font2 m-0 text-grey">o</span>
                                                    <h6 class="text-start subprice font2 text-light"> en 18x $${parseInt((radeon.price) / 18).toLocaleString('es')}</h6>
                                                    <p class="text-center mt-5">Cuotas sin interés - Garantía 1 año - Envió Gratis</p>
                                                    <h6 class="font2 text-grey">Product code: xxxx-xxxxxxxx-xxxx</h6>
                                                    <h6 class="font2 mt-xl-3 text-grey">Especificaciones</h6>
                                                    <ul class=" text-grey list-inline ">
                                                        <li class="list-inline-item mb-2 me-3 text-light">Reloj Base Gaming Mode
                                                            <ul class="list-inline mb-2 me-3">
                                                                <li class="list-inline-item text-grey">${radeon.baseFrec}</li>
                                                            </ul>
                                                        </li>
                                                        <li class="list-inline-item mb-2 me-3 text-light">Reloj Boost Gaming Mode
                                                            <ul class="list-inline mb-2 me-3">
                                                                <li class="list-inline-item text-grey">${radeon.turboFrec}</li>
                                                            </ul>
                                                        </li>
                                                        <li class="list-inline-item mb-2 me-3 text-light">VRAM
                                                            <ul class="list-inline">
                                                                <li class="list-inline-item text-grey">${radeon.vram}</li>
                                                            </ul>
                                                        </li>
                                                        <li class="list-inline-item mb-2 me-3 text-light">Reloj VRAM
                                                            <ul class="list-inline me-3">
                                                                <li class="list-inline-item me-3 text-grey">${radeon.rVram}</li>
                                                            </ul>
                                                        </li class="list-inline-item me-3">
                                                        <li class="list-inline-item me-3 text-light">Bus
                                                            <ul class="list-inline me-3">
                                                                <li class="list-inline-item text-grey">${radeon.bus}</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <a href="#" data-id='${radeon.id}' class="btn btn-green text-newdark button input-block-level form-control p-2 font2 mb-3 mb-xl-0 add">Añadir al carrito</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                `
                
                $('.artGPU').append(writeModal);
                
                            
            });


            const perpsThumb = data.filter(perp => perp.hardware === 'peripherals' )


            perpsThumb.forEach(perp => {


                let write = `   <div class="col-lg-3 mb-3 d-flex align-items-stretch">
                                    <div class="card bg-secondary">
                                        <img src="${perp.pic1}" class="w-75 mx-auto my-5" alt="${perp.model}">
                                        <div class="card-body d-flex bg-newdark flex-column ">
                                            <h5 class=" text-center text-light title-ita bg-newdark py-2 m-0">${perp.brand} `+`${perp.model}</h5>
                                            <div class="w-50 mx-auto">
                                                                                <h5 class="font2 text-center text-light">Cantidad</h5><select name="select" class="form-select bg-dark text-light">
                                                                                <option value="1" selected>1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">5</option>
                                                                                <option value="6">6</option>
                                                                                <option value="7">7</option>
                                                                                <option value="8">8</option>
                                                                                </select>
                                                                            </div>
                                            <h5 class="text-center text-light title-ita bg-newdark py-2 m-0 mt-3 ">$<span>${(perp.price.toLocaleString('es'))}</span></h5>
                                            <a href="#" data-id='${perp.id}' class="mx-auto btn btn-green text-decoration-none font2 text-newdark m-3 add">Comprar Ahora</a>
                                        </div>
                                    </div>
                                </div>
                `

                $('.perpItem').append(write);
                
            });


            
            const noteThumb = data.filter(note => note.hardware === 'notebook')

            noteThumb.forEach(note => {

                let write = `   <div class="d-flex flex-column col-10 col-xl-2 bg-newdark p-0 mb-5 m-xl-0 ">
                                    <div class="bg-secondary d-flex">
                                        <img src="${note.pic1}" class="w-75 mx-auto my-4" alt="${note.model}">
                                    </div>
                                    <h5 class=" text-center text-light title-ita bg-newdark py-2 m-0">HP 240 G7</h5>
                                    <ul class="text-grey">
                                        <li>Procesador
                                            <ul>
                                                <li>${note.proc}</li>
                                            </ul>
                                        </li>
                                        <li>Pantalla
                                            <ul>
                                                <li>${note.screen}</li>
                                            </ul>
                                        </li>
                                        <li>Gráfica
                                            <ul>
                                                <li>${note.graphic}</li>
                                            </ul>
                                        </li>
                                        <li>Memoria
                                            <ul>
                                                <li>${note.memory}</li>
                                            </ul>
                                        </li>
                                        <li>Sistema operativo
                                            <ul>
                                                <li>${note.so}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div class="w-50 mx-auto">
                                        <h5 class="font2 text-center text-light">Cantidad</h5><select name="select" class="form-select bg-dark text-light">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                    </div>
                                    <h5 class="text-center text-light title-ita bg-newdark py-2 m-0 mt-3">$<span>${(note.price.toLocaleString('es'))}</span></h5>
                                    <a href="#" data-id='${note.id}' class="mx-auto btn btn-green text-decoration-none font2 text-newdark m-3 add">Comprar Ahora</a>
                                </div>
                            `

                $('.itemNote').append(write)




            })


            const pcThumb = data.filter(pc => pc.hardware === 'pc')

            pcThumb.forEach(pc => {

                let write = `    <div class="d-flex flex-column col-10 col-xl-2 bg-newdark p-0 mb-5 m-xl-0 ">
                                    <div class="bg-secondary d-flex">
                                        <img src="${pc.pic1}" class="w-75 mx-auto my-4" alt="${pc.brand}">
                                    </div>
                                    <h5 class=" text-center text-light title-ita bg-newdark py-2 m-0">${pc.brand} `+`${pc.model}</h5>
                                    <ul class="text-grey">
                                        <li>Procesador
                                            <ul>
                                                <li>${pc.proc}</li>
                                            </ul>
                                        </li>
                                        <li>Gráfica
                                            <ul>
                                                <li>${pc.graphic}</li>
                                            </ul>
                                        </li>
                                        <li>Memoria
                                            <ul>
                                                <li>${pc.memory}</li>
                                            </ul>
                                        </li>
                                        <li>Sistema operativo
                                            <ul>
                                                <li>${pc.so}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div class="w-50 mx-auto">
                                        <h5 class="font2 text-center text-light">Cantidad</h5><select name="select" class="form-select bg-dark text-light">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                    </div>
                                    <h5 class="text-center text-light title-ita bg-newdark py-2 m-0 ">$<span>${(pc.price.toLocaleString('es'))}</span></h5>
                                    <a href="#" data-id='${pc.id}' class="mx-auto btn btn-green text-decoration-none font2 text-newdark m-3 add">Comprar Ahora</a>
                                </div>
                            `

                $('.itemPC').append(write)




            })

            

        }
    
    )})
 
    