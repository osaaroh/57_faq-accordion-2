import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { accordions } from '../data/data'
import AccordionItem from '../components/AccordionItem'
function App() {
  const [accordionItems, setAccordionItems] = useState(accordions)

  return (
    <>
      <main>
        <section className="section section__accordion">
        <div className="card">
                <div className="section__extension-text">
                    <h1>FAQs</h1>
                </div>
                <div className="section__accordion">
                    {
                        accordionItems.map((accordionItem)=>{
                            return <AccordionItem key={accordionItem.id} {...accordionItem}/>
                        })
                    }
                </div>
            </div>
        </section>
      </main>
          
    </>
  )
}

export default App
