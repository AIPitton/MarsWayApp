import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import Threadmill from './Threadmill'
import Idle from './Idle'
import Fail from './Fail'
import Shelter from './Shelter'
import Sleep from './Sleep'
import "./styles.css";
import './App.css'
import { OrbitControls } from "@react-three/drei";

export default function App() {
  const[start, setStart]=useState(true)
  const[train, setTrain]=useState(true)
  const[shelter, setShelter]=useState(true)
  const[sleep, setSleep]=useState(true)
  const[fail1, setFail1]=useState(true)
  const[fail2, setFail2]=useState(true)
  const[fail3, setFail3]=useState(true)
  return(
    <div className="container">
    { start?
      <div>  
      <p>You are on a spaceship</p>
      <p>on the journey to Mars.</p>      
      <button id="button" onClick={()=>setStart(!start)}>Start Game!</button>
      <Canvas style={{height: `600px`}} > 
      <OrbitControls />
      <directionalLight intensity={0.6}/>
      <ambientLight intensity={0.5}/>
      <Suspense fallback={null}>
      <Idle/>
      </Suspense>
      </Canvas>
      </div>
      : 
      <div>
      { train?
      <div>
      <p>You feel isolated!</p>
      <p>Make your decision!</p>
      <button  id="button"   onClick={()=>setTrain(!train)}>Train yourself</button>
      <p></p>
      <button  id="button"  onClick={()=>{setFail1(!fail1);setTrain(!train)}}>Do nothing</button>
      <Canvas style={{height: `600px`}} > 
      <OrbitControls />
      <directionalLight intensity={0.6}/>
      <ambientLight intensity={0.5}/>
      <Suspense fallback={null}>
      <Idle/>
      </Suspense>
      </Canvas>
      </div>
      :
      <div>
      { shelter?        
        <div>
        <p>AI alerts you that the spaceship</p>
        <p>is in the proximity of</p>
        <p>Galactic Cosmic Radiation! </p>
        <p>Make your decision!</p>
        <button  id="button"  onClick={()=>setShelter(!shelter)}>Go to the radiation shelter</button>
        <p></p>
        <button  id="button"  onClick={()=>{setFail2(!fail2);setShelter(!shelter)}}>Go to train yourself!</button>
        <Canvas style={{height: `600px`}} > 
        <OrbitControls />
        <directionalLight intensity={0.6}/>
        <ambientLight intensity={0.5}/>
        <Suspense fallback={null}>
        <Threadmill/>
        </Suspense>
        </Canvas>
        </div>
      :
        <div>
        { sleep?
          <div>
          <p>You feel exhausted!</p>
          <p>What do you do?</p>
          <div id="space">
          <button  id="button"  onClick={()=>setSleep(!sleep)}>Go to sleep</button>
          <p></p>
          <button  id="button"  onClick={()=>{setFail3(!fail3);setSleep(!sleep)}}>Go to check the gear</button>
          </div>
          <Canvas style={{height: `600px`}} > 
          <OrbitControls />
          <directionalLight intensity={0.6}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={null}>
          <Shelter/>
          </Suspense>
          </Canvas>
          </div>
        :
          <div>  
          { fail1 && fail2 && fail3 ?  
          <div>
            <p>You are prepared to go on a journey to Mars!</p>
            <p>The avatar survived! </p>
            <p>Refresh the browser to restart the game!</p>
            <Canvas style={{height: `600px`}} > 
            <OrbitControls />
            <directionalLight intensity={0.6}/>
            <ambientLight intensity={0.5}/>
            <Suspense fallback={null}>
            <Sleep/>
            </Suspense>
            </Canvas>
            </div>
          :
          <div>
            <p>You failed! </p>
            <p>Refresh the browser to restart the game!</p>
            <Canvas style={{height: `600px`}} > 
            <OrbitControls />
            <directionalLight intensity={0.6}/>
            <ambientLight intensity={0.5}/>
            <Suspense fallback={null}>
            <Fail/>
            </Suspense>
            </Canvas>
            </div>
          }
          </div>  
        }
        </div>      
      }
      </div>  
      }
      </div> 
    }    
    </div>
  )
}

