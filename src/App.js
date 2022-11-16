import Menu from './Menu'
import Home from './pages/Home'
import News from './pages/News'
import Login from './pages/Login'
import Events from './pages/Events'
import FAQ from './pages/FAQ'

 function App(){
  let component
  // eslint-disable-next-line default-case
  switch(window.location.pathname) {
  case "/":
    component = <Home />
    break
  case "/News":
    component = <News />
    break
  case "/Login":
    component = <Login />
    break
  case "/Events":
    component = <Events />
    break
  case "/FAQ":
    component = <FAQ />
    break
  }


  return (
    <>
    <Menu />
    {component}
    </>
  )
 }

export default App;