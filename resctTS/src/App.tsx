import './App.css'
import { Card } from './components/Card.tsx';
import { ChaiCard } from './components/ChaiCard.tsx';
import { ChaiList } from './components/ChaiList.tsx';
import { Counter } from './components/Counter.tsx';
import { OrderForm } from './components/OrderForm.tsx';

import type {Chai} from './types.ts'

const menu: Chai[] = [
  {id: 1, name: 'Chai', price: 20},
  {id: 2, name: 'Chai Latte', price: 150},
  {id: 3, name: 'Tea', price: 200},
]

function App() {


  return (
    <>
     <div>
      <h1>Hello World</h1>
      <ChaiCard name="HeadPhones" price={1000} isSpecial = {true} />
      <Counter/> 

      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm 
        onSubmit={(order)=> console.log("Placed", order.name, "x", order.cup)}
        />
      </div>

      <div>
        <Card 
        title="Chai with typeScript"
        footer={<button>Order Placed</button>}
        />
      </div>
     </div>
    </>
  )
}

export default App
