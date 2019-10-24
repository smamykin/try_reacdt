//main styles
import '../style/main.scss';

import React from 'react';
import ReactDOM from  'react-dom';

let CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif',
        email: 'some@email.ru',
        address: 'First Avenue'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        email: 'some@email.ru',
        address: 'First Avenue',
        image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        email: 'some@email.ru',
        address: 'First Avenue',
        image: 'http://www.youshouldshare.me/wp-content/uploads/2015/03/14264215682890-anigif_enhanced-buzz-13518-1367608452-4.gif'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        email: 'some@email.ru',
        address: 'First Avenue',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    }
];

class Contact extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            collapsed: true
        }
    }
    onClick(evt){
        this.setState({collapsed:!this.state.collapsed})
    }
    render() {

        let additionInfo = '';
        if (!this.state.collapsed){
            additionInfo = (
                <div>
                    <div className="contact-email">{this.props.email}</div>
                    <div className="contact-address">{this.props.address}</div>
                </div>
            );
        }
        return (
            <li className="contact" onClick={this.onClick.bind(this)}>
                <img className="contact-image" src={this.props.image} width="60px" height="60px" alt=""/>
                <div className="contact-info">
                    <div className="contact-name"> {this.props.name} </div>
                    <div className="contact-number"> {this.props.phoneNumber} </div>
                    {additionInfo}
                </div>
            </li>
        );
    }
}

class ContactsList extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            displayedContacts: CONTACTS
        }
    }

    handleSearch(event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = CONTACTS.filter(function(el) {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    }

    render() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch.bind(this)} />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map((el) => {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                email={el.email}
                                address={el.address}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <ContactsList />,
    document.getElementById("app")
);
