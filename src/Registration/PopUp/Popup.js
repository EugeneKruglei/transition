import React from 'react';
import Popup from 'reactjs-popup';
import './PopupRegistration.css';
import classnames from 'classnames';



/*class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
    }

    click() {
        this.setState({active: true});
    }

    render() {
        let classes = classnames('', {active: this.state.active});
        return <button className={classes} onClick={this.click.bind(this)}> </button>;
    }
}*/

const PopupRegistration = props => {
    return (
        <Popup trigger={<button className="profile"> </button>} modal>
            {close => (
                <div className="modal">
                    <div className="header"> Modal Title</div>
                    <div className="content">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
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
