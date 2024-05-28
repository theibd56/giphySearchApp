import ContactsLink from "../contactsLink/ContactsLink";
import BackgroundSmooth from "../backgroundSmooth/BackgroundSmooth";
import MainForm from "../mainForm/MainForm";
import '../../style/style.scss';

const App = () => {
  return (
    <div className="app">
      <BackgroundSmooth/>
      <ContactsLink/>
      <MainForm/>
    </div>
  );
}

export default App;
