import { getProducts } from "../../asyncMocks"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


export const ItemLIstContainer = () => {
  const { categoryId } = useParams()

const [products , setProducts] = useState([]) 
const [isLoading , setIsLoading] = useState(true) 

   useEffect(()=> {
    setIsLoading(true)
    getProducts()
        .then((resp) => {
          if (categoryId) {
          const filtrar = resp.filter(product => product.categoria === categoryId)
          setProducts(filtrar)
          setIsLoading(false)  
          } else {
            setProducts(resp)
            setIsLoading(false)
          }
        })
          .catch( error => console.log(error))
    }, [categoryId])
  return (
    <>
    
    {isLoading ? <h2>cargando...</h2> : <ItemList products={products}/>}
    </>
  )
}
