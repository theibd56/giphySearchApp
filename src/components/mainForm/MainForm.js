import { useState } from 'react';
import searchImg from '../../resources/search-normal.svg';
import popularImg from '../../resources/popular.svg';
import Skeleton from '../skeleton/Skeleton';
import './mainForm.scss';

const MainForm = () => {

    const [inputValue, setInputValue] = useState('');
    const [gifList, setGifList] = useState([]);
    const [_baseLimit, _setBaseLimit] = useState(8)

    const   _apiBase = 'https://api.giphy.com/v1/gifs/',
            _apiKey = 'api_key=gG7GN2QoqDL8uN2HNZivgL42pB68Tq1j';

    const getGif = (question = 'anime') => {
        fetch(`${_apiBase}search?${_apiKey}&q=${question}&limit=${_baseLimit}`)
        .then((response) => {
            if (!response.ok) {
                alert("No gif found");
                throw new Error("No gif found");
            }
            return response.json();
        })
        .then((data) => setGifList(data))

        console.log('zapros')
    }

    const searchGiphy = () => {
        getGif(inputValue)
    }

    const renderItems = (arr) => {
        const items = arr.data.map((item) => {
            return (
                <a href={item.url} className="form__wrapper-link" key={item.id}><img
                src={item.images.original.url} 
                alt={item.username}
                className="form__wrapper-item"/></a>
            )
        })
        return (
            <div className="form__popular-wrapper form__wrapper">
                {items}
            </div>
        )
    }

    const onKeyUp = (e) => {
        if(e.key === 'Enter') {
            getGif(inputValue)
        }
    }

    const loadMore = () => {
        _setBaseLimit(_baseLimit => _baseLimit + 8)
        getGif(inputValue)
    }

    return (
        <div className="container">
            <div className="form">
                <div className="form__request">
                    <input type='text' placeholder='The name of the gif animation' className="form__request-input"
                           value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyUp={onKeyUp}>
                    </input>
                    <button type="button" onClick={searchGiphy} className="form__request-button">
                        <img src={searchImg} alt="form__request-button-img" />
                    </button>
                </div>
                <div className="form__popular">
                    <div className="form__popular-title form__title">
                        <img src={popularImg} alt="popular smile" />
                        {
                            gifList.data
                                ? (gifList.data.length === 0 ? 'Enter your query in the search field' : 'Popular gifs according to your request')
                                : 'Enter your query in the search field'
                        }
                    </div>
                    <div className="form__popular-wrapper form__wrapper">
                        {
                            gifList.data
                                ? (gifList.data.length === 0 ? <Skeleton/> : renderItems(gifList))
                                :  <Skeleton/>
                        }
                    </div>
                </div>
                {
                    gifList.data
                        ? (gifList.data.length > 49 ? null : <div className="form__more" onClick={loadMore}>Load more</div>)
                        : null
                }
            </div>
        </div>
    )
}

export default MainForm