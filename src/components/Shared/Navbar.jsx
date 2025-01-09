import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation('header');

  return (
    <nav>
        <ul className="flex gap-7 h-full">
            <Link to="/studies" className='hover:text-white duration-200'><li>{t('studies')}</li></Link>
            <Link to="/reflections" className='hover:text-white duration-200'><li>{t('reflect')}</li></Link>
            <Link to="/discipleship" className='hover:text-white duration-200'><li>{t('discip')}</li></Link>
            <Link to="/donate" className='hover:text-white duration-200'><li>{t('donate')}</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar