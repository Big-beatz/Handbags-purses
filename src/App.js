import React from 'react'
import './App.css'
import Button from "./Components/Button"
import Product from "./Components/Product"
import Tile from "./Components/Tile"
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import ourStory from "./assets/our_story.png"
import brand from "./assets/brand.png"

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
            <Button
            buttonName="to the collection"
            />
            <Button
            buttonName="Shop all bags"
            />
            <Button
            disabled={true}
            buttonName="pre-orders"/>
        </nav>
        <main>
            <Product
            labelText="Best Seller"
            image={bag1}
            productName="The handy bag"
            productPrice="400"
            />
            <Product
            labelText="Best Seller"
            image={bag2}
            productName="The stylish bag"
            productPrice="250"/>
            <Product
            labelText="New collection"
            image={bag3}
            productName="The simple bag"
            productPrice="300"/>
            <Product
            labelText="New collection"
            image={bag4}
            productName="The trendy bag"
            productPrice="150"/>
        </main>
        <footer>
            <Tile
            tileHeader="The Brand"
            extraParagraph={true}
            />
            <Tile
            tileImage={brand}
            />
            <Tile
            tileImage={ourStory}/>
            <Tile
            tileHeader="Our story"
            />
        </footer>
      </>
  );
}

export default App;



