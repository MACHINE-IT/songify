import React from 'react';
import styles from './FAQ.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQs() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqHeader}>
                <h1>FAQs</h1>
            </div>
            <Accordion className={styles.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    className={styles.accordionQuestion}
                    expandIcon={<ExpandMoreIcon className={styles.accordionExpandMoreIcon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Is Songify free to use?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionAnswer}>
                    <Typography>
                        Yes! it is 100% free, and it has 0% ads!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    className={styles.accordionQuestion}
                    expandIcon={<ExpandMoreIcon className={styles.accordionExpandMoreIcon} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Can I download and listen to songs offline?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionAnswer}>
                    <Typography>
                        Sorry! unfortunately we don't provide the service to download any songs.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

// const FAQs = () => {
//     return (
//         <div className={styles.faqParent}>
//             <div className={styles.header}>
//                 <h1>FAQs</h1>
//             </div>
//         </div>

//     )
// }

// export default FAQs