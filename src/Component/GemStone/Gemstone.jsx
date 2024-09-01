import React from 'react'
import './Gemstone.css'
import Amber from '../Assets/Stone-Gallery/StoneList/Amber-1.png'
import Amethyst from '../Assets/Stone-Gallery/StoneList/Amethyst.png'
import Ametrine from '../Assets/Stone-Gallery/StoneList/Ametrine.png'
import Bixbite from '../Assets/Stone-Gallery/StoneList/Bixbite.png'
import Blue_Chalcedony from '../Assets/Stone-Gallery/StoneList/Blue-Chalcedony.png'
import BlueZircon from '../Assets/Stone-Gallery/StoneList/blue-zircon.png'
import Citrine from '../Assets/Stone-Gallery/StoneList/Citrine.png'
import Sapphire from '../Assets/Stone-Gallery/StoneList/Sapphire.png'
import Crystal from '../Assets/Stone-Gallery/StoneList/Crystal.png'
import Lemon_Quartz from '../Assets/Stone-Gallery/StoneList/lemon-quartz.png'


const Gemstone = () => {

  var availableGems = [
    {
      Id: 1,
      GemstoneImage: Amber,
      GemstoneName: "Amber"
    },
    {
      Id: 2,
      GemstoneImage: Amethyst,
      GemstoneName: "Amethyst"
    },
    {
      Id: 3,
      GemstoneImage: Ametrine,
      GemstoneName: "Ametrine"
    },
    {
      Id: 4,
      GemstoneImage: Bixbite,
      GemstoneName: "Bixbite"
    },
    {
      Id: 5,
      GemstoneImage: BlueZircon,
      GemstoneName: "Blue Zircon"
    },
    {
      Id: 6,
      GemstoneImage: Citrine,
      GemstoneName: "Citrine"
    },
    {
      Id: 7,
      GemstoneImage: Crystal,
      GemstoneName: "Crystal"
    },
    {
      Id: 8,
      GemstoneImage: Lemon_Quartz,
      GemstoneName: "Lemon Quartz"
    },
    {
      Id: 9,
      GemstoneImage: Blue_Chalcedony,
      GemstoneName: "Blue Chalcedony"
    },
    {
      Id: 10,
      GemstoneImage: Sapphire,
      GemstoneName: "Sapphire"
    },
    {
      Id: 9,
      GemstoneImage: Blue_Chalcedony,
      GemstoneName: "Blue Chalcedony"
    },
    {
      Id: 10,
      GemstoneImage: Sapphire,
      GemstoneName: "Sapphire"
    }
  ]
  return (
    <>
      <h1 className='Header-Gem'>Available Gems </h1>
      <div className='container Gem-Stone-Area'>
        { availableGems.map((itemofGems) =>(

          <div className='Gems-Card' key={itemofGems.Id}>
            <img loading='lazy' src={itemofGems.GemstoneImage} />
            <div className='GemsName'>
              <h2>{itemofGems.GemstoneName}</h2></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Gemstone