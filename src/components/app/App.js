import ContactsLink from "../contactsLink/ContactsLink";
import BackgroundSmooth from "../backgroundSmooth/BackgroundSmooth";
import MainForm from "../mainForm/MainForm";
import Skeleton from "../skeleton/Skeleton";
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
