import React from 'react';
import Popup from 'reactjs-popup';
import './PopupRegistration.css';
import RegistrationForm from "../RegistrationForm/RegistrationForm";


const PopupRegistration = props => {
        return (
            <Popup trigger={open => (
                <button className={open ? 'active profile' : 'profile'} onClick={this.changeClass}> </button>
            )} modal>
                {
                    close => (
                        <div className="modal">
                            <div className="header"> Modal Title</div>
                            <div className="content">
                                <RegistrationForm></RegistrationForm>
                                {' '}
                            </div>
                            <div className="actions">
                                <Popup
                                    trigger={<button className="button">Submit</button>}
                                    position="top center"
                                    closeOnDocumentClick
                                >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
                                </Popup>
                                <button
                                    className="button"
                                    onClick={() => {
                                        console.log('modal closed ');
                                        close()
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
            </Popup>
        );
    };
export default PopupRegistration;
