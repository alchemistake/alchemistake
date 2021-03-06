import React from 'react';
import './Chevron.scss';
import {ReactComponent as DownChevron} from 'assets/svg/DownChevron.svg';

class Chevron extends React.Component {
    render() {
        return <div className="chevron-container">
            <DownChevron/>
        </div>;
    }
}

export default Chevron