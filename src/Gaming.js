import React from 'react';
import Row from './Row';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

function Gaming(){
    return(
        <div>
            <div>
                <div className="tag">MORE FROM YOUTUBE</div>
            </div>
            <div className="subgame">
                <Row Icon={SportsEsportsIcon} props="Gaming" />
                <Row Icon={SettingsIcon} props="Setting" />
                <Row Icon={HelpIcon} props="Help" />
                <Row Icon={FeedbackIcon} props="Feedback" />
            </div>
        </div>
    )
}

export default Gaming; 