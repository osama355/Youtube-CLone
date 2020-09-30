import React from 'react';
import Subrow from './Subrow';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import './Subscription.css';
import More from './More';

function Subscription(){

    // const RoutedApp = () => (
    //     <Router>
    //         <Link className="showlink" to="/more">
    //             <Subrow className="subrow" Subicon={ExpandMoreOutlinedIcon} Subprops="Show More" />
    //         </Link>
    //         <Switch>
    //             <Route path="/more">
    //                 <More/>
    //             </Route>
    //         </Switch>
    //     </Router>
    
    //   );

    return(
        <Router>
            <div>
                <div className="tag">
                    <p>SUBSCRIPTION</p>

                </div>

                <div className="subvid">
                    <Subrow className="subrow" Subicon={AccountCircleIcon} Subprops="Coding League" />
                    <Subrow className="subrow" Subicon={AccountCircleIcon} Subprops="Ganji Swag" />
                    <Subrow className="subrow" Subicon={AccountCircleIcon} Subprops="Geo News" />
                    <Subrow className="subrow" Subicon={AccountCircleIcon} Subprops="Hollywood" />
                    <Subrow className="subrow" Subicon={AccountCircleIcon} Subprops="The Idiotz" />
                    <Subrow className="subrow" Subicon={AccountCircleIcon} Subprops="Madylin" />
                    <Subrow className="subrow" Subicon={AccountCircleIcon} Subprops="Quataiba Mehmood" />
                    {/* <button onClick={RoutedApp}>
                        Click
                    </button> */}
                    <Link className="showlink" to="/more">
                        <Subrow className="subrow" Subicon={ExpandMoreOutlinedIcon} Subprops="Show More" />
                    </Link>
                    <Switch>
                        <Route path="/more">
                            <More/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}


// const RoutedApp = () => (
//     <Router>
//         <Link className="showlink" to="/more">
//             <Subrow className="subrow" Subicon={ExpandMoreOutlinedIcon} Subprops="Show More" />
//         </Link>
//         <Switch>
//             <Route path="/more">
//                 <More/>
//             </Route>
//         </Switch>
//     </Router>

//   );





export default Subscription;