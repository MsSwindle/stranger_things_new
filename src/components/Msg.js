import react from 'react';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Msg = () => {

    return (
        <div>
            <button
                type ="button"
                className='btnMsg'>Message </button>
        </div>
    )
}

export default Msg;