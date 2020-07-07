import React from 'react';

import dunder from '../../assets/dunder.png'

const PersonCard = (props) => {
    const {png, name, realName, seasons} = props
    return(
        <div className="card">
            <div className="png">
                <img src={png} alt="Selected character" />
            </div>
            <div className="information">
                <div>
                    <img src={dunder} alt="dunder mifflin paper company" />
                </div>
                <div className="info">
                    <div>
                        <p>Name: </p>
                        <p>Real Name: </p>
                        <p>Seasons: </p>
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{realName}</p>
                        <p>{seasons}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonCard