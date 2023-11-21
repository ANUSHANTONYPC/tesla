import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <container>
        <Section  
        title="model-s"
        description="Order Online For Touchless Delivery"
        backgroundimg="model-s.jpg"
        ltftbtnText="custom order"
        rightbtnText="Existing inventory"
        />
        <Section
         title="model-y"
         description="Order Online For Touchless Delivery"
         backgroundimg="model-y.jpg"
         ltftbtnText="custom order"
         rightbtnText="Existing inventory"
        />
         <Section
          title="model-3"
          description="Order Online For Touchless Delivery"
          backgroundimg="model-3.jpg"
          ltftbtnText="custom order"
          rightbtnText="Existing inventory"
         />
         <Section 
          title="model-x"
          description="Order Online For Touchless Delivery"
          backgroundimg="model-x.jpg"
          ltftbtnText="custom order"
          rightbtnText="Existing inventory"
         />  


          
         <Section
          title="Lowest Cost Solar Pannel In America"
          description="Money Back Guarntee"
          backgroundimg="solar-panel.jpg"
          ltftbtnText="Order know"
          rightbtnText="LEARN MORE"
         
         />


<Section
          title="Solar For New Roof"
          description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
          backgroundimg="solar-roof.jpg"
          ltftbtnText="Order know"
          rightbtnText="LEARN MORE"

         
         />


         
<Section
          title="Accessories"
          description=""
          backgroundimg="accessories.jpg"
          ltftbtnText="Shop Now"

         
         />
    </container>
  )
}

export default Home

const container =styled.div`height:100vh;`