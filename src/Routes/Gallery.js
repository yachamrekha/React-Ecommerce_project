import React from 'react'

export default function Gallery({productItems,handleAddToCart}) {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/free-vector/flat-colorful-sale-background_23-2147723252.jpg?size=626&ext=jpg&ga=GA1.1.822170423.1696784349&semt=ais" class="d-block w-100" style={{height: "450px"}} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-psd/online-shopping-concept-banner-template_23-2148559463.jpg?size=626&ext=jpg&ga=GA1.1.822170423.1696784349&semt=ais" class="d-block w-100" style={{height: "450px"}} alt="Second slide"/>
                    </div>600
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-vector/shopping-icon-collection_1084-9.jpg?size=626&ext=jpg&ga=GA1.1.822170423.1696784349&semt=ais" class="d-block w-100" style={{height: "450px"}} alt="Third slide"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container row' style={{margin:"auto"}}>
            {productItems.map((product)=>(
            <div className='card col-3' style={{margin:"25px"}}>
                <img className='card-img-top' style={{height:"200px"}} src={product.pic}/>
                <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.desc}</p>
                    <h5 className='card-price'>price:{product.cost}</h5>
                    <button className='btn btn-primary'onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                </div>

            </div>
            
            
            ))}
            </div>


        </div>
    )
}
