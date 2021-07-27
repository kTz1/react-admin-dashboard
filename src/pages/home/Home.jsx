import React from 'react';
import FeaturedInfo from '../../components/feature-info/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData.js';
import WidgetSm from '../../components/widget-sm/WidgetSm';
import WidgetLg from '../../components/widget-lg/WidgetLg';

import './home.scss';


export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey='Active User' />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
