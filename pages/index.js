import {useEffect} from 'react';
import OpenImg from '../components/IndexPage/OpenImg';
import AnimatedCards from '../components/IndexPage/AnimatedCards';
import ThinStrip from '../components/IndexPage/ThinStrip';
import MapContainer from '../components/IndexPage/MapContainer';

//Global Context
import {useGlobalContext} from '../context/GlobalContext';

export default function Home() {
  const {assignCurrentPage} = useGlobalContext();

  useEffect(() => {
    assignCurrentPage(1);
  }, []);


  return (
    < >
      <OpenImg />
      <AnimatedCards />
      <ThinStrip />
      <MapContainer />
    </>
  )
}
