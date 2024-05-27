import React from 'react';
import { Box, FormControl, Input, MenuItem, Select, Typography } from '@mui/material';
import Recorder from './recorders/Recorder';
import RecordingSection from './RecordingSection';
import ImageRecordingSection from './ImageRecordingSection';
import NumberRecordingSection from './NumberRecordingSection';

const Language = ({ l, index, proficiencies, languages, setLanguagesSpoken, languagesSpoken, statesVisited, states, controlledLanguageBlobs, setControlledLanguageBlobs, ownLanguageBlobs, setOwnLanguageBlobs }) => {
    const availableLanguages = languages.filter(la => (la === "Other" || !languagesSpoken.map(l => l.languageName).includes(la)));
    const availableStates = statesVisited.map(s => (s.stateName !== "Other" ? s.stateName : s.otherState));
    console.log(availableStates);

    const handleSelect = (e) => {
        e.preventDefault();
        console.log("Selected!");
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box style={{
                paddingTop: "20px", marginBottom: '20px', backgroundColor: '#dedede',
                height: (index <= 2 && (l.proficiency === proficiencies[2] || l.proficiency === proficiencies[3]) && l.languageName !== "Other" ? '950px' : ((index > 2 || l.proficiency === proficiencies[0]) ? (l.languageName !== "Other" ? '300px' : "360px") : '550px')),
                borderRadius: '10px', flex: 1
            }}
                sx={{ ml: { xs: '10px', md: '100px', lg: '225px' }, width: { xs: '350px', md: '600px', lg: '800px' } }}>
                <Box style={{ marginBottom: "20px" }}>
                    <Input style={{ display: (l.languageName === "Other") ? "" : "none" }} value={l.otherLanguage}
                        placeholder='language'
                        classes={{ focused: 'custom-focused-input' }}
                        onChange={(e) => { let data = [...languagesSpoken]; data[index].otherLanguage = e.target.value; setLanguagesSpoken(data); console.log(languagesSpoken) }} />
                </Box>
                <RecordingSection passage="When the sunlight strikes raindrops in the air, they act as a prism and form a rainbow.
                    The rainbow is a division of white light into many beautiful colors. These take the
                    shape of a long round arch, with its path high above, and its two ends apparently
                    beyond the horizon. There is, according to legend, a boiling pot of gold at one end.
                    People look, but no one ever finds it. When a man looks for something beyond his
                    reach, his friends say he is looking for the pot of gold at the end of the rainbow.
                    Throughout the centuries people have explained the rainbow in various ways. Some
                    have accepted it as a miracle without physical explanation. To the Hebrews it was a
                    token that there would be no more universal floods. The Greeks used to imagine that
                    it was a sign from the gods to foretell war or heavy rain. The Norsemen considered
                    the rainbow as a bridge over which the gods passed from earth to their home in the
                    sky. Others have tried to explain the phenomenon physically. Aristotle thought that
                    the rainbow was caused by reflection of the sun's rays by the rain. Since then
                    physicists have found that it is not reflection, but refraction by the raindrops which
                    causes the rainbows. Many complicated ideas about the rainbow have been formed.
                    The difference in the rainbow depends considerably upon the size of the drops, and
                    the width of the colored band increases as the size of the drops increases. The actual
                    primary rainbow observed is said to be the effect of super-imposition of a number of
                    bows. If the red of the second bow falls upon the green of the first, the result is to give
                    a bow with an abnormally wide yellow band, since red and green light when mixed
                    form yellow. This is a very common type of bow, one showing mainly red and
                    yellow, with little or no green or blue." />
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <ImageRecordingSection
                    imageSrc="/images/Scenary.jpg" // Replace with the correct path to your local image
                    caption="Speak and record in English"
                />
                <ImageRecordingSection
                    imageSrc="/images/scenary2.jpg" // Replace with the correct path to your local image
                    caption="Speak and record in your mother tongue"
                />
                <NumberRecordingSection />
            </Box>
        </Box>
    );
}

export default Language;
