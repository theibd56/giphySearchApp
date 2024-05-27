import ContactsLink from "../contactsLink/ContactsLink";
import BackgroundSmooth from "../backgroundSmooth/BackgroundSmooth";
import '../../style/style.scss';

const App = () => {
  return (
    <div className="app">
      <BackgroundSmooth/>
      <ContactsLink/>
    </div>
  );
}

export default App;
