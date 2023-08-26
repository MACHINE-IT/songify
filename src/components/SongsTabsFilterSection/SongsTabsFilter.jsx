import React, { useState } from 'react'
import styles from "./SongsTabsFilter.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import { AllSongs } from '../../SongsData/AllSongs/AllSongs';
import { JazzSongs } from '../../SongsData/AllSongs/JazzSongs/JazzSongs';
import { RockSongs } from '../../SongsData/RockSongs/RockSongs';
import { PopSongs } from '../../SongsData/PopSongs/PopSongs';
import { BluesSongs } from '../../SongsData/BluesSongs/BluesSongs';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {console.log("value: ", value, "and index: ", index)}
            {value === index && (
                children
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SongsTabsFilter = ({ title, genres }) => {
    console.log(`genres coming: `, genres);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div sx={{ width: '100%' }}>
            <h3>{title}</h3>
            <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className={styles.tabParentDiv} value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ className: styles['selectedTabIndicator'] }}>
                    <Tab className={styles.tab} label="All" {...a11yProps(0)} />
                    {
                        genres.map((genre, index) => (
                            <Tab className={styles.tab} key={genre.key} label={genre.label} {...a11yProps(index + 1)} />
                        )
                        )
                    }
                    {/* <Tab className={styles.tab} label="Item One" {...a11yProps(0)} />
                    <Tab className={styles.tab} label="Item Two" {...a11yProps(1)} />
                    <Tab className={styles.tab} label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </div>
            <CustomTabPanel value={value} index={0}>
                <AllSongs />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <JazzSongs />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <RockSongs />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <PopSongs />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <BluesSongs />
            </CustomTabPanel>
        </div>
    );
}

// const SongsTabsFilter = () => {

//     const [value, setValue] = useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     }
//     return (
//         <div>
//             <div className={styles.header}>
//                 <h3>Songs</h3>
//                 <div sx={{ width: '100%' }}>
//                     <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                         <Tabs className={styles.tabsParent} value={value} onChange={handleChange} aria-label="basic tabs example">
//                             <Tab className={styles.tab} label="Item One" />
//                             <Tab className={styles.tab} label="Item Two" />
//                             <Tab className={styles.tab} label="Item Three" />
//                         </Tabs>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


export default SongsTabsFilter