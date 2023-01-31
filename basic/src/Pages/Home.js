import React from 'react'
import Box from '../Components/WeatherBox'


const Home = () => {
  return (
    <div className="Container">
        <div className="Header">
            <h1>7:50<sub>pm</sub>  <sub>☀79<span>&#176;</span></sub></h1>
            <h5>January 23rd, 2023 <br/>Phoenix, AZ</h5>
        </div>
        <div className='box-container'>
            <h2>Hows The Weather Today ☀</h2>
            <div className="box">
                <Box Weather="https://cdn-icons-png.flaticon.com/512/979/979585.png" Day="Sunday, January 22nd" Temp="82&#176;F"/>
                <Box Weather="https://cdn-icons-png.flaticon.com/512/979/979585.png" Day="Sunday, January 22nd" Temp="82&#176;F"/>
                <Box Weather="https://cdn-icons-png.flaticon.com/512/979/979585.png" Day="Sunday, January 22nd" Temp="82&#176;F"/>
                <Box Weather="https://cdn-icons-png.flaticon.com/512/979/979585.png" Day="Sunday, January 22nd" Temp="82&#176;F"/>
                <Box Weather="https://cdn-icons-png.flaticon.com/512/979/979585.png" Day="Sunday, January 22nd" Temp="82&#176;F"/>
                <Box Weather="https://cdn-icons-png.flaticon.com/512/979/979585.png" Day="Sunday, January 22nd" Temp="82&#176;F"/>
                <Box Weather="https://cdn-icons-png.flaticon.com/512/979/979585.png" Day="Sunday, January 22nd" Temp="82&#176;F"/>
            </div>
        </div>
        <div className="food-container">
            <h2>Time to Order Some Food?</h2>
            <div className='food'>
                <div className="food-box1">
                    <section>
                    <h2></h2>
                    <p>The Juicest Steak in the AZ Valley</p>
                    </section>
                </div>
                <div className="food-box2">
                    <section>
                    <h2></h2>
                    <p>Pasta Thats Tastes Straight From Italy</p>
                    </section>
                </div>
                <div className="food-box3">
                    <section>
                        <h2></h2>
                        <p>Gods Favorite Food was Chicken</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home