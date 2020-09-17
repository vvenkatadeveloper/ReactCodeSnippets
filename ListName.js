function formatName(name) {
    return name.firstName + '-' + name.lastName;
    }
    
    const name = {
        firstName: 'Adam',
        lastName: 'Dule'
    };
    
    const element = <h1>{formatName(name)}</h1>;
    ReactDOM.render(element, document.getElementById('root'));