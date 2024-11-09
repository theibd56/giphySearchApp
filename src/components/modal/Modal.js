import React from 'react';
import './modal.scss';

const Modal = ({ isOpen, onClose, gif }) => {
    if (!isOpen) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatSize = (sizeInBytes) => {
        if (sizeInBytes < 1024) {
            return `${sizeInBytes} Bytes`;
        } else if (sizeInBytes < 1024 * 1024) {
            return `${(sizeInBytes / 1024).toFixed(2)} KB`;
        } else if (sizeInBytes < 1024 * 1024 * 1024) {
            return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
        } else {
            return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <a href={gif.url} className="modal-image">
                        <img src={gif.images.original.url} alt={gif.username}/>
                    </a>
                    <div className="modal-info">
                        <div className="modal-info__content">
                            <h2>{gif.title}</h2>
                            <p>ID: {gif.id}</p>
                            <p>Uploaded: {formatDate(gif.import_datetime)}</p>
                            <p>Rating: {gif.rating.toUpperCase()}</p>
                            <p>Source: {gif.images.original.width} x {gif.images.original.height} px</p>
                            <p>Frames: {gif.images.original.frames}</p>
                            <p>Size: {formatSize(gif.images.original.size)}</p>
                        </div>
                        <a href={gif.url}>Open a gif on giphy.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;