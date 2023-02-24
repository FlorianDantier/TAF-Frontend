import React from 'react'
import { Outlet } from 'react-router-dom'
import { layout } from './styles/layout'

const App = () => (
  <div style={layout.main}>
    {/* Header et/ou menu ici si besoin */}
    <div style={layout.child}><Outlet /></div>
    {/* Footer et/ou menu ici si besoin */}
    {/*  De manière générale, tout les éléments qui devront être visible en permanance se trouveront ici */}
  </div>
)

export default App
