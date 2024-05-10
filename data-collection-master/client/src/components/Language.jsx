import React from 'react'
import { Box, FormControl, InputLabel, Input, MenuItem, Select, Typography } from '@mui/material'

import Recorder from './recorders/Recorder';




const Language = ({ l, index, proficiencies, languages, setLanguagesSpoken, languagesSpoken, statesVisited, states, controlledLanguageBlobs, setControlledLanguageBlobs, ownLanguageBlobs, setOwnLanguageBlobs }) => {

    const availableLanguages = languages.filter(la => (la === "Other" || !languagesSpoken.map(l => l.languageName).includes(la)))
    // const availableStates = states.filter(st => statesVisited.map(s => (s.stateName)).includes(st))
    const availableStates = statesVisited.map(s => (s.stateName !== "Other" ? s.stateName : s.otherState))
    console.log(availableStates)


    const handleSelect = (e) => {
        e.preventDefault();
        console.log("Selected!")
    }

    return (

        <div>
            <Box style={{
                'paddingTop': "20px", 'marginBottom': '20px', 'backgroundColor': '#dedede',
                'height': (index <= 2 && (l.proficiency === proficiencies[2] || l.proficiency === proficiencies[3]) && l.languageName !== "Other" ? '950px' : ((index > 2 || l.proficiency === proficiencies[0]) ? (l.languageName !== "Other" ? '300px' : "360px") : '550px')),
                'borderRadius': '10px'
            }}
                sx={{ ml: { xs: '10px', md: '100px', lg: '225px' }, width: { xs: '350px', md: '600px', lg: '800px' } }}>
                <Box style={{ "marginBottom": "10px" }}>
                    <FormControl style={{ 'width': "225px", 'marginRight': '10px' }}>
                        <Typography style={{ 'fontSize': '16px', 'fontWeight': '1000' }}>I know the following language</Typography>
                        {/* <InputLabel>Language</InputLabel> */}
                        <Select

                            style={{
                                'backgroundColor': '#dedede',
                                'borderBottom': '2px solid black',
                                // height: '60px',
                                // borderRadius: '6px',
                                // paddingLeft: '90px'
                            }}

                            MenuProps={{
                                autoFocus: false,
                                disableAutoFocusItem: true,
                                disableEnforceFocus: true,
                                disableAutoFocus: true
                            }}
                            value={l.languageName} onChange={(e) => { let data = [...languagesSpoken]; data[index].languageName = e.target.value; setLanguagesSpoken(data); console.log(languagesSpoken) }}
                            onSelect={handleSelect}
                        >
                            {languages.map(la => {

                                return <MenuItem style={{ display: availableLanguages.includes(la) ? "block" : "none" }} value={la}>{la}</MenuItem>

                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Box style={{ "marginBottom": "20px" }}>
                    <Input style={{ 'display': (l.languageName === "Other") ? "" : "none" }} value={l.otherLanguage}
                        // showButtons
                        placeholder='language'
                        classes={{ focused: 'custom-focused-input' }}
                        onChange={(e) => { let data = [...languagesSpoken]; data[index].otherLanguage = e.target.value; setLanguagesSpoken(data); console.log(languagesSpoken) }} />
                </Box>
                <Box style={{ "marginBottom": "10px" }}>
                    <FormControl style={{ 'width': "225px", 'marginRight': '10px' }}>
                        <Typography style={{ 'fontSize': '16px', 'fontWeight': '1000' }}>I learnt this language in</Typography>
                        {/* <InputLabel>Learned In State</InputLabel> */}
                        <Select style={{
                            'backgroundColor': '#dedede',
                            'borderBottom': '2px solid black'
                        }}

                            MenuProps={{
                                autoFocus: false,
                                disableAutoFocusItem: true,
                                disableEnforceFocus: true,
                                disableAutoFocus: true
                            }}
                            value={l.learnedInState} onChange={(e) => {
                                let data = [...languagesSpoken];
                                data[index].learnedInState = e.target.value; setLanguagesSpoken(data); console.log(languagesSpoken)
                            }}>
                            {availableStates.map(st => {

                                return <MenuItem value={st}>{st}</MenuItem>

                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Box style={{ "marginBottom": "10px" }}>
                    <FormControl style={{ 'width': "225px" }}>
                        <Typography style={{ 'fontSize': '16px', 'fontWeight': '1000' }}>My proficiency is</Typography>
                        {/* <InputLabel>Learned In State</InputLabel> */}
                        {/* <InputLabel>Proficiency</InputLabel> */}
                        <Select disabled={l.languageName === ""} style={{
                            'backgroundColor': '#dedede',
                            'borderBottom': '2px solid black'
                        }}

                            MenuProps={{
                                autoFocus: false,
                                disableAutoFocusItem: true,
                                disableEnforceFocus: true,
                                disableAutoFocus: true
                            }}

                            value={l.proficiency} onChange={(e) => {
                                let data = [...languagesSpoken];
                                data[index].proficiency = e.target.value; setLanguagesSpoken(data);
                                console.log(languagesSpoken);
                                if (e.target.value === proficiencies[0]) {
                                    data[index].mode = "";
                                    let d1 = [...controlledLanguageBlobs];
                                    d1[index] = null;
                                    setControlledLanguageBlobs(d1);
                                    console.log(controlledLanguageBlobs);

                                    let d2 = [...ownLanguageBlobs];
                                    d2[index] = null;
                                    setOwnLanguageBlobs(d2);
                                    console.log(ownLanguageBlobs);
                                }
                                if (e.target.value === proficiencies[1]) {

                                    let d1 = [...controlledLanguageBlobs];
                                    d1[index] = null;
                                    setControlledLanguageBlobs(d1);
                                    console.log(controlledLanguageBlobs);


                                }
                            }}>

                            {proficiencies.map(p => {

                                return <MenuItem value={p}>{p}</MenuItem>

                            })}
                        </Select>
                    </FormControl>
                </Box>


                {/* 

                {(l.proficiency === proficiencies[2] || l.proficiency === proficiencies[3]) ? <Box>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Comfortable Recording Audio:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                            onChange={(e) => {
                                let data = [...languagesSpoken];
                                data[index].mode = e.target.value;
                                setLanguagesSpoken(data);
                                console.log(languagesSpoken);
                                let d1 = [...controlledLanguageBlobs];
                                d1[index] = null;
                                setControlledLanguageBlobs(d1);
                                console.log(controlledLanguageBlobs);

                                let d2 = [...ownLanguageBlobs];
                                d2[index] = null;
                                setOwnLanguageBlobs(d2);
                                console.log(ownLanguageBlobs);
                            }}>
                            {/* <FormControlLabel value="Video" control={<Radio />} label="Video" /> */}
                {/* <FormControlLabel value="Audio" control={<Radio />} label="Yes" />
                            <FormControlLabel value="Neither" control={<Radio />} label="No" />

                        </RadioGroup>
                    </FormControl> */}



                <Recorder language={l.languageName} otherLanguage={l.otherLanguage} learnedInState={l.learnedInState} index={index} proficiencies={proficiencies} proficiency={l.proficiency} controlledLanguageBlobs={controlledLanguageBlobs} setControlledLanguageBlobs={setControlledLanguageBlobs} ownLanguageBlobs={ownLanguageBlobs} setOwnLanguageBlobs={setOwnLanguageBlobs} />

            </Box>


        </div>

    )
}

export default Language