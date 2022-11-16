import './style/Menu.css'
export default function Menu(){
  return <nav className='menu'>
    <a href='/' className='main-page'>Home</a>
    <ul>
      <CustomLink href="/News">News</CustomLink>
      <CustomLink href="/Events">Events</CustomLink>
      <CustomLink href="/FAQ">FAQ</CustomLink>
      <CustomLink href="/Login">Login</CustomLink>
    </ul>
  </nav>
}

function CustomLink ({href, children, ...props}){
  const path = window.location.pathname
return (
  <li className={path === href ? "active" : ""}>
    <a href={href} {...props}>{children}</a>
  </li>
)  
}