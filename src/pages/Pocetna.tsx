import React from 'react';
import '../styles/home.css';
import ContactForm from '../components/ContactForm';
import sszLogo from '../assets/ssz-logo.png'

const Pocetna: React.FC = () => {
  return (
    <div className='homepage'>
        <div className='title'>
        <img src={sszLogo} className='logo' alt='ssz logo' />
        {/* <h3>Budi pripravan!</h3> */}
        </div>
        <div className='aboutWrapper'>
            <div className="aboutText">
                <p>
                Splitski skautski zbor je organizacija za djecu i mlade sa svestranim programom 
                okrenutim životu u skladu s prirodom. SSZ djeluje kao suvremena, nepolitička i 
                nevladina udruga za djecu i mlade koja okuplja 6 izviđačkih udruga s područja grada Splita. 
                Udruga je članica Saveza izviđača Hrvatske osnovana s ciljem promicanja izviđaštva u 
                gradu Splitu te svojim djelovanjem teži ostvariti pozitivan odgojni utjecaj na djecu i mlade.
                </p>
            </div>
            <div className="aboutImage">
                <img src='https://scouts.hr/wp-content/uploads/2021/11/51681431917_60352fef32_6k-scaled.jpg' alt='Slika'></img>
            </div>
        </div>

        <h2>Kontakt</h2>
        <div className="formWrapper">
            <div className="form">
                <ContactForm/>
            </div>
            <div className="formText">
                <p>Izradila Lucijana Puača</p>
                <p>Inače studentica Računarstva na FESB-u, ali u slobodno vrijeme 
                    izviđač i načelnica Skautskog kluba Marjan. Kao takva volontiranje
                    mi je strast i životni poziv te sam već dugo godina službeno volonter
                    u udruzi.
                </p>
            </div>
        </div>

        </div>
  );
};

export default Pocetna;
