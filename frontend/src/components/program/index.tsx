import * as React from 'react';

import Header from './header/index'
import TakeOpportunity from './take-opportunity/index'
import ExperienceConcentrate from './experience-concentrate/index'
import Teams from './teams/index'
import Pillars from './pillars/index'
import OurApproach from './our-approach/index'
import WhoShouldApply from './who-should-apply/index'
import PickTrack from '../shared/pick-track/index'
import Footer from '../shared/footer/index'

class Program extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <TakeOpportunity />
        <ExperienceConcentrate />
        <Teams />
        <OurApproach />
        <Pillars />
        <WhoShouldApply />
        <PickTrack isApplyNowVersion={true} />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default Program;
