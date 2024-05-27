import './contactsLink.scss';
import github from '../../resources/github.svg';
import telegram from '../../resources/telegram.svg';
import insta from '../../resources/insta.svg';

const ContactsLink = () => {
    return (
        <div className="link">
            <div className="link-container">
                <div className="link-bookmarks">
                    <svg fill="none">
                        <rect width="40" height="112" fill="#F7F9FC" />
                        <path d="M40 132L20 112L40 112L40 132Z" fill="#F7F9FC" />
                        <path d="M0 132L-1.58893e-07 112L20 112L0 132Z" fill="#F7F9FC" />
                    </svg>
                    <div className="link-bookmarks-wrapper">
                            <a href="https://instagram.com/theibd56"><img src={insta} alt="theibd56"/></a>
                            <a href="https://github.com/theibd56"><img src={github} alt="theibd56"/></a>
                            <a href="https://t.me/theibd56"><img src={telegram} alt="theibd56"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsLink