import React from 'react'


function Obj() {
  return (
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach='geometry' args={[3, 3, 3]}/>
        <meshLambertMaterial attach='meterial' color='blue'/>
      </mesh>
  )
}

export default Obj