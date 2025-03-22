import React from 'react'
import styles from './SiteWrapper.module.scss'
import SiteNavbar from '@/components/site/menu/SiteNavbar'

function SiteWrapper({children}) {
  return (
    <div>
        
    <div className={styles.themeWrapper}>
        {children}
    </div>
    </div>
  )
}

export default SiteWrapper