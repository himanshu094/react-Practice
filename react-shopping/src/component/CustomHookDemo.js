import { useFetchData } from '../customHooks/useFetchData'

export default function CustomHookDemo() {

  var data = useFetchData("http://fakestoreapi.com/products")

  var products=data.data

  console.log(data)

  return (
    <div className='container-fluid'>
      <h2>Products</h2>
      <ol>
        {
          products.map(product=>
            <li key={product.id}>{product.title}</li>
            )
          
        }
      </ol>
    </div>
  )
}
