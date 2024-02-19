import React, { Children, ReactNode, useState } from 'react'
import Header from './Header'
export interface HrsFormProps {
    children: ReactNode;
  }
  
const HrsForm = (props:HrsFormProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      console.log("mobileOpen",mobileOpen)
      setMobileOpen(!mobileOpen);
    }
    
  return (
    <>
    <div >
    <Header mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </div>
    <div style={{backgroundColor:'lightgray',
    marginTop:'64px', 
    height: '100vh' ,
    marginLeft:mobileOpen?'250px':'0px',
    
    }}
    >
      <div style={{
        marginLeft:mobileOpen?'10px':'100px'
        
        }}>
        {props.children}
        </div>
    </div>
    
    </>
  )
}

export default HrsForm