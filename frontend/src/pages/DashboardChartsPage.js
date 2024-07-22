import React from 'react';
import NavBar from '../components/NavBar';
import DashboardNavBar from '../components/DashboardNavBar';
import DashboardChartsSearch from '../components/DashboardChartsSearch'

const DashboardChartsPage = () =>
{
    return(
      <div>
        <NavBar layout={2}/>
        <DashboardNavBar/>
        <div class = "container-fluid px-0 mx-0 py-0 mt-5 mb-0">
            <DashboardChartsSearch/>
        </div>
      </div>
    );
};

export default DashboardChartsPage;
