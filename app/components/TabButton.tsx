import React from 'react'

interface TTabButton {active: boolean; selectTab : () => void; children : string }

const TabButton = ({ active, selectTab, children } : TTabButton) => {
    
    const buttonClasses = active ? 'text-white border-b border-orange-500' : 'text-gray-200'

    return (
        <button onClick={selectTab}>
            <p className={'mr-3 font-semibold ${buttonClasses}'}>
                {children}
            </p>
        </button>
    )
}

export default TabButton