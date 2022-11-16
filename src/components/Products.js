import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)

    let componentMounted= true;

    useEffect(() =>{
        const getProducts= async() =>{
            setLoading(true)
            const response = await fetch(`http://fakestoreapi.com/products`)
            if(componentMounted){
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return ()=>{
                componentMounted = false;
                
            }
        }
        getProducts();
        
}, [])

useEffect(() => {
    if(query === "") setFilter(data)
    else {
        setFilter(data.filter(d => d.title.toLowerCase().includes(query.toLowerCase())))
        
    }
}, [query])

    const Loading= ()=>{
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>       
                    <Skeleton height={350}/>       
                    <Skeleton height={350}/>       
                    <Skeleton height={350}/>       
                </div>
            </>
        )
    }

    const filterProduct=(cat)=>{
        const updatedList = data.filter((x)=>x.category === cat)
        setFilter(updatedList)
    }

    const ShowProducts= ()=>{
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-success me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-success me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-success me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-success me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-success me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product)=>{
                    return (
                        <>
                            <div className="col-md-3 mb-4" >
                                <div class="card h-100 text-center p-4" 
                                    key={product.id} >
                                  <img src={product.image} class="card-img-top" alt={product.title}/>
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">
                                            ${product.price}
                                            </p>
                                        <Link to={`/products/${product.id}`} class="btn btn-success">
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
        
    }

    const searchBar = (event) =>{
        setQuery(event.target.value)
    }


  return (
    <div>

        <div className="container my-5 py-5">
           
            <div className="row mb-3"> 
                    <form class="d-flex">
                        <input class="form-control  me-2 " type="search" 
                            placeholder="Search" aria-label="Search"
                            value={query}
                            onChange={searchBar}
                            />
                            <button class="btn btn-outline-success" 
                            type="submit" onClick={searchBar.bind(this)}>Search</button>
                    </form>
                </div>

                <div className="col-12 mb-5" >
                    <h1 className='display-6 fw-bolder
                     text-center'>Latest Products</h1>
                     <hr />
                </div>
            
            <div className="row justify-content-center">
                {loading? <Loading/> : <ShowProducts/>}
            </div>
        </div>

    </div>
  )
}

export default Products