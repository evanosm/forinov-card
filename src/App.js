import { FiDownloadCloud } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';
import { VscGlobe } from 'react-icons/vsc';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiCrunchbase } from 'react-icons/si';
import {GoInfo} from 'react-icons/go';

import Stepper from './components/Stepper';

function App() {
  return (
    <div className="app-wrapper">
      <div className="card-wrapper">
        <img src="https://dev.forinov.fr/pictures/incubateur/3/crop_image.jpg" alt="Profile Card Banner" className="banner" />

        <div className="content-wrapper">
          <div className="left-content">
            <img src="https://dev.forinov.fr/pictures/incubateur/3/logo.jpg" alt="Profile Avatar" className="avatar" />
            <button className='pdf-button'><FiDownloadCloud className='icon' /> <span>PDF</span></button>
          </div>
          <div className="details">
            <h1 className='username'>Station F</h1>
            <button className='settings'><HiDotsHorizontal /></button>
            <div className='coordinates'>
              <div className='item'>
                <span className='icon'><FiMapPin /></span>
                <p className='text'>Paris, France</p>
              </div>

              <div className='item'>
                <span className='icon'><VscGlobe /></span>
                <a className='text underline' href='https://stationf.co/'>www.stationf.co</a>
              </div>

              <div className='item'>
                <a className='icon' href='https://fr-fr.facebook.com/STATIONF/'><FaFacebookF /></a>
                <a className='icon' href='https://twitter.com/joinstationf'><BsTwitter /></a>
                <a className='icon' href='https://www.linkedin.com/company/stationf/'><BsLinkedin /></a>
                <a className='icon' href='https://www.crunchbase.com/organization/station-f'><SiCrunchbase /></a>
              </div>
            </div>

            <p className='description'>Station F est un campus de startups, inauguré le 29 juin 2017, réparti sur 34 000 mètres carrés et situé dans la halle Freyssinet, à Paris, au Nᵒ 5, parvis Alan-Turing. Il a été créé par Xavier Niel et est dirigé par Roxanne Varza. Il s'agit du plus grand campus de startups au monde</p>

            <div className='tags-buttons-wrapper'>
              <div className='tag'>Centre d'affaires</div>
              <div className='smaller-tags'>
                <div className='smaller-tag'>Campus</div>
                <div className='smaller-tag'>Startups</div>
              </div>

              <div className='buttons'>
                <button className='outlined-button'>Suivre</button>
                <button className='button'>Profil Public</button>
                <GoInfo className='info'/>
              </div>
            </div>

            <hr/>

            <div className='stepper-wrapper'>
              <Stepper />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
