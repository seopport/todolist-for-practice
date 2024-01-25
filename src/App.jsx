import React from 'react'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>
      <Layout />
      <Footer />
    </div>
  )
}

export default App