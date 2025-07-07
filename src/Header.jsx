import './Header.css'
import { useSelector } from 'react-redux'

export function Header() {

let total= useSelector((state)=>state.total);
const count=useSelector((state)=>state.count);
    return(

<div className="container-fluid">
{/* header */}

    <div className="d-flex justify-content-center header">

 {/* logo */}

 <div className="d-flex justify-content-center logo">
   <p className="navbar-brand" >
      <img src="https://aps-plants-website.netlify.app/assets/APSDark-BHi096m8.png" alt="Logo" width="70" height="40" className="d-inline-block align-text-top"/>
    Simply Natural
    </p>
</div>

{/* logo  */}

 {/* nav items  */}

<div className='nav'>
<ul >
  <li className="nav-item">
    <a className="nav-link "  href="#" >Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact Us</a>
  </li>
  <li className="nav-item last">
    {count>0 &&  <span className="nav-item count">{count}</span>}
   
    <a className="nav-link">${total.toFixed(2)}<i className="bi bi-cart3 "></i></a>
   
  </li>
</ul>
</div>
{/* nav  items */}
    </div>
{/* header */}

<div className='second-part'>
<p>Best Quality Plants</p>
<h1>Amazing Variety
Of Plants Starting
Just $12</h1>
<button type="button" className="btn shop" style={{backgroundColor:"rgb(252, 95, 95)"}}>SHOP NOW</button>
</div>

</div>

    )

}
