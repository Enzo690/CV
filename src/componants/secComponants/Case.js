import React from 'react';
import '../../style/secStyle/case.scss';
import Jobs from './Jobs';


class Case extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var titre = this.props.titre;
        var jobs = this.props.jobs;

        return <div className="d-flex case-container justify-content-center">
            <div className="col-md-11  case-bg">

                <div className="col-md-12 cont-titre">
                    <h1 className="text-left">{titre}</h1>
                   {jobs}
                </div>
            </div>
        </div>;
    }
}

export default Case;