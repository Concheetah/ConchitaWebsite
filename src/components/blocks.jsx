import * as React from 'react'
import '../styles/styles.css'
import '../styles/globals.css'

function BlockBlue({children }) {
    return (
    <div className={'div1'}>
        {children}
    </div>
    

  )
}

function BlockPurple({children}) {
    return(
        <div className={'div3'}>
            {children}
        </div>
        
        )
    
}

function BlockPeach({children}) {
    return(
        <div className={'div2'}>
            {children}
        </div>
        
        )
    
}

function BlockRed({children}) {
    return(
        <div className={'div4'}>
            {children}
        </div>
        
        )
    
}


export {BlockPurple};
export {BlockPeach};
export {BlockBlue};
export {BlockRed};