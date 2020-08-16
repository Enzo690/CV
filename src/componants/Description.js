import React from 'react';
import '../style/description.scss';
import Case from './secComponants/Case';
import Jobs from './secComponants/Jobs';




class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return <div className="col-md-9 container  description-bg">

            <Case
                titre="Experience"
                jobs={[
                    <Jobs
                        date="2020"
                        titleJobs="Lecturer of Design Theory and Methodology"
                        descriptionJobs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                    <Jobs
                        date="2020"
                        titleJobs="Lecturer of Design Theory and Methodology"
                        descriptionJobs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                    <Jobs
                        date="2020"
                        titleJobs="Lecturer of Design Theory and Methodology"
                        descriptionJobs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                    <Jobs
                        date="2020"
                        titleJobs="Lecturer of Design Theory and Methodology"
                        descriptionJobs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                ]}
            >
            </Case>

            <Case
                titre="Education"
                jobs={[
                    <Jobs
                        date="2015"
                        titleJobs="MSc in Computer Graphics in the field of Computer Art Design"
                        descriptionJobs="Yerevan, Armenia"
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                    <Jobs
                        date="2015"
                        titleJobs="MSc in Computer Graphics in the field of Computer Art Design"
                        descriptionJobs="Yerevan, Armenia"
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                ]}
            >

            </Case>

            <Case
                titre="Interest"
                jobs={[
                    <Jobs
                        date="2015"
                        titleJobs="MSc in Computer Graphics in the field of Computer Art Design"
                        descriptionJobs="Yerevan, Armenia"
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                    <Jobs
                        date="2015"
                        titleJobs="MSc in Computer Graphics in the field of Computer Art Design"
                        descriptionJobs="Yerevan, Armenia"
                        secTitleJobs="Lorem Ipsum Dolor University"
                    ></Jobs>,
                ]}
            >

            </Case>

        </div>;
    }
}

export default Description;