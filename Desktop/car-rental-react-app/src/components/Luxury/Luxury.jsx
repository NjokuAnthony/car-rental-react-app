import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selection</h2>
            <div className={styles.text}>
                <p>
                    <span>Select from the top Luxury vehicle to roll in style</span>
                </p>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1621707156632-6c2178138c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFycmFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 alt="/" />
                 <div className={styles.content}>
                    <h3>Farrari</h3>
                 </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626892079290-c43e923a2537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9naGluaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 alt="/" />
                 <div className={styles.content}>
                    <h3>Lamboghini</h3>
                 </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1653417580711-b43c9deb0d64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFzZXJhdGklMjBnaGlibGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                 alt="/" />
                 <div className={styles.content}>
                    <h3>Maserati</h3>
                 </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626622227733-612680ac8e74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9yc2hlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                 alt="/" />
                 <div className={styles.content}>
                    <h3>Porsche</h3>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Luxury