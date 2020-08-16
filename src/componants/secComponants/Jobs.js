import React from 'react';
import '../../style/secStyle/jobs.scss';



class Jobs extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var date = this.props.date;
        var titleJobs = this.props.titleJobs;
        var descriptionJobs = this.props.descriptionJobs;
        var secTitleJobs = this.props.secTitleJobs;

        return <div className="col-md-12 col-sm-12 cont-job">

            <div className="row justify-content-around">
                <h4 className="col-md-1">{date}</h4>
                <div className="roundBorder d-flex justify-content-center ">
                    <div className="roundOrange"></div>
            </div>

                <div className="col-md-10 text-left">
                    <h3>{titleJobs}</h3>
                    <h6 className="childTitle">{secTitleJobs}</h6>
                    <p>{descriptionJobs}</p>
                </div>
            </div>


        </div>;
    }
}

export default Jobs;