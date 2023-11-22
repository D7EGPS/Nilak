import style from "./Home.module.css";
import PrimerComponente from "../../components/Home-Primer-Componente/home-primer-componente";


function Home() {
  return (
    <>
      <div className={style.central}>
        <PrimerComponente
          name="Name: Axel"
          phoneNumber="Phone number: 5521282553"
          occupation="Occupation: inspector"
          email="Email: axelrosecooper@gmail.com "
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: Pto Coatzacoalcos, Casas Aleman, CDMX"
        />
        <PrimerComponente
          name="Name: Alfredo"
          phoneNumber="Phone number: 5537749704 "
          occupation="Occupation: nuclear engineer"
          email="Email:  bluder400@gmail.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: acueducto de Guadalupe, México city"
        />
        <PrimerComponente
          name="Name:  José"
          phoneNumber="Phone number: private"
          occupation="Occupation: Currently working at a company"
          email="Email: private"
          nationality="Nationality: British"
          country="Country: United Kingdom"
          address="Address: private"
        />
        <PrimerComponente
          name="Name: Wendy"
          phoneNumber="Phone number: 7765388156"
          occupation="Occupation: employee in a packaging factory and in a banquet"
          email="Email: gjueblu67@gmail.con "
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: Avenida de las palmas N. 25, San Juan Estado de México"
        />
        <PrimerComponente
          name="Name: Hector"
          phoneNumber="Phone number: +52 7352014931"
          occupation="Occupation: aeronautical engineer and I usually do aeronautical stuffs"
          email="Email: hg3438773@gmail.com"
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: Av Insurgentes 1149 colonia Miguel hidalgo"
        />
        <PrimerComponente
          name="Name: Aurora"
          phoneNumber="Phone number: 5581207792"
          occupation="Occupation: home-office worker as an accountant assistant"
          email="Email: auroyariix@gmail.com"
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: San Salvador Atenco, at 16 de Septiembre st."
        />
        <PrimerComponente
          name="Name: Juan(Mich)"
          phoneNumber="Phone number: 5513513242"
          occupation="Occupation: public servant"
          email="Email: scotty1500@amlo.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: sn"
        />
        <PrimerComponente
          name="Name: Celina Monserrat"
          phoneNumber="Phone number: 5574827980"
          occupation="Occupation: nursing student"
          email="Email: monserratr139@glmail.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: Stret Chapultepec #7 Ixtapaluca México"
        />
        <PrimerComponente
          name="Name: Diana"
          phoneNumber="Phone number: "
          occupation="Occupation: backend developer at GS (Grupo Salinas)"
          email="Email: diana.randi1@gmail.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: Vicente Guerrero Street, Luis Echeverría Colony, Cuautitlán Izcalli, Méx."
        />
        <PrimerComponente
          name="Name: Valentin"
          phoneNumber="Phone number: 2331113740"
          occupation="Occupation: student"
          email="Email: vcode1104@gmail.com"
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: Av. Escuadron 201 Ticoman"
        />
      </div>
    </>
  );
}
export default Home;
