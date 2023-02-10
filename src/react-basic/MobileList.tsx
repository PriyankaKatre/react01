import './index.css';

import { mobiles } from './mobiles';
import Mobile from './Mobile';

const MobileList = () => {
  return (
    <>
      <h1>best sellers</h1>
      <section className='mobileList'>
        {mobiles.map((mobile) => {
          return <Mobile {...mobile} key={mobile.id} />;
        })}
      </section>
    </>
  );
}

export default MobileList;
