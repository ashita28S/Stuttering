import { Box, FormControl, Input, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import './State.css';

const State = ({ s, index, states, setStatesVisited, statesVisited }) => {

    const availableStates = states.filter(st => (st === "Other" || !statesVisited.map(s => s.stateName).includes(st)));

    const handleStateChange = (e) => {
        let data = [...statesVisited];
        data[index].stateName = e.target.value;
        setStatesVisited(data);
        console.log(statesVisited);
    };

    const handleOtherStateChange = (e) => {
        let data = [...statesVisited];
        data[index].otherState = e.target.value;
        setStatesVisited(data);
        console.log(statesVisited);
    };

    const handleCityChange = (e) => {
        let data = [...statesVisited];
        data[index].city = e.target.value;
        setStatesVisited(data);
        console.log(statesVisited);
    };

    const handleDurationChange = (e) => {
        let data = [...statesVisited];
        data[index].durationLived = e.target.value;
        setStatesVisited(data);
        console.log(statesVisited);
    };

    const handleLanguagesSpokenChange = (e) => {
        let data = [...statesVisited];
        data[index].languagesSpoken = e.target.value;
        setStatesVisited(data);
        console.log(statesVisited);
    };

    return (
        <div>
            <Box style={{ paddingTop: "20px", marginBottom: '20px', backgroundColor: '#dedede', height: s.stateName !== "Other" ? '350px' : '400px', borderRadius: '10px' }}
                sx={{ ml: { xs: '10px', md: '400px', lg: '450px' }, width: { xs: '350px', md: '400px', lg: '400px' } }}>
                
                <FormControl style={{ width: "225px" }}>
                    <Typography style={{ fontSize: '16px', fontWeight: '1000' }}>Which country do you live in?</Typography>
                    <Select
                        style={{ backgroundColor: '#dedede', borderBottom: '2px solid black' }}
                        MenuProps={{
                            autoFocus: false,
                            disableAutoFocusItem: true,
                            disableEnforceFocus: true,
                            disableAutoFocus: true
                        }}
                        value={s.stateName}
                        onChange={handleStateChange}
                    >
                        {states.map(st => (
                            <MenuItem key={st} style={{ display: availableStates.includes(st) ? "block" : "none" }} value={st}>{st}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {s.stateName === "Other" && (
                    <Input 
                        style={{ marginTop: '15px' }} 
                        value={s.otherState}
                        placeholder='Residence'
                        classes={{ focused: 'custom-focused-input' }}
                        onChange={handleOtherStateChange}
                    />
                )}

                <Typography style={{ paddingTop: '20px', color: 'black', fontSize: '16px', fontWeight: '1000' }}>Which city do you live in?</Typography>
                <Input 
                    type='text'
                    value={s.city}
                    placeholder='City'
                    classes={{ focused: 'custom-focused-input' }}
                    onChange={handleCityChange}
                />

                <Typography style={{ paddingTop: '20px', color: 'black', fontSize: '16px', fontWeight: '1000' }}>How long have you lived in the state (in years)?</Typography>
                <Input 
                    type='number' 
                    min={0} 
                    value={s.durationLived}
                    placeholder='Duration Lived (in years)'
                    classes={{ focused: 'custom-focused-input' }}
                    onChange={handleDurationChange}
                />

                <Typography style={{ paddingTop: '20px', color: 'black', fontSize: '16px', fontWeight: '1000' }}>How many languages do you speak?</Typography>
                <Input 
                    type='number' 
                    min={0} 
                    value={s.languagesSpoken || ''}
                    placeholder='Number of Languages'
                    classes={{ focused: 'custom-focused-input' }}
                    onChange={handleLanguagesSpokenChange}
                />
            </Box>
        </div>
    );
};

export default State;









































// import { Box, FormControl, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material'
// // import { Unstable_NumberInput as NumberInput } from '@mui/base';
// import { InputNumber } from 'primereact/inputnumber';
// import React from 'react'

// import './State.css'

// const State = ({ s, index, states, setStatesVisited, statesVisited }) => {

//     const availableStates = states.filter(st => (st === "Other" || !statesVisited.map(s => s.stateName).includes(st)))


//     return (
//         <div>
//             <Box style={{ 'paddingTop': "20px", 'marginBottom': '20px', 'backgroundColor': '#dedede', 'height': s.stateName !== "Other" ? '200px' : '250px', 'borderRadius': '10px' }}
//                 sx={{ ml: { xs: '10px', md: '400px', lg: '450px' }, width: { xs: '350px', md: '400px', lg: '400px' } }}>
//                 <FormControl style={{ width: "225px" }}>

//                     <Typography style={{ 'fontSize': '16px', 'fontWeight': '1000' }}>Which country do you live in?</Typography>
//                     <Select style={{
//                         'backgroundColor': '#dedede',
//                         'borderBottom': '2px solid black'
//                         // 'border': 'none'
//                     }}

//                         MenuProps={{
//                             autoFocus: false,
//                             disableAutoFocusItem: true,
//                             disableEnforceFocus: true,
//                             disableAutoFocus: true
//                         }}
//                         value={s.stateName} onChange={(e) => { let data = [...statesVisited]; data[index].stateName = e.target.value; setStatesVisited(data); console.log(statesVisited) }}>
//                         {states.map(st => {

//                             return <MenuItem style={{ display: availableStates.includes(st) ? "block" : "none" }} value={st}>{st}</MenuItem>

//                         })}
//                     </Select>

//                 </FormControl>

//                 <Input style={{ 'display': (s.stateName === "Other") ? "" : "none", 'marginTop': '15px' }} value={s.otherState}
//                     // showButtons
//                     placeholder='residence'
//                     classes={{ focused: 'custom-focused-input' }}
//                     onChange={(e) => { let data = [...statesVisited]; data[index].otherState = e.target.value; setStatesVisited(data); console.log(statesVisited) }} />
//                 {/* <FormControl style={{ 'paddingTop': '20px' }}>
//                     <Typography style={{ 'fontSize': '20px', 'fontWeight': '1000' }}>District</Typography>
//                     <Input type='text' value={s.district}

//                         classes={{ focused: 'custom-focused-input' }}

//                         onChange={(e) => { let data = [...statesVisited]; data[index].district = e.target.value; setStatesVisited(data); console.log(statesVisited) }} />
//                 </FormControl> */}


//                 <Typography style={{ 'paddingTop': '20px', 'color': 'black', 'fontSize': '16px', 'fontWeight': '1000' }}>Which city do you live in?  <Typography style={{ 'fontWeight': '300' }}></Typography></Typography>
//                 { /*<InputLabel >How long you lived in the state (in years)</InputLabel>*/ }
//                 <Input type='number' min={0} value={s.durationLived}
//                     //showButtons
//                     //placeholder='Duration Lived'
//                     classes={{ focused: 'custom-focused-input' }}
//                     placeholder='in years'
//                     onChange={(e) => { let data = [...statesVisited]; data[index].durationLived = e.target.value; setStatesVisited(data); console.log(statesVisited) }} />


//             </Box>
//         </div>
//     )
// }

// export default State





// import { Box, FormControl, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';
// import React from 'react';
// import './State.css';

// const State = ({ s, index, states, setStatesVisited, statesVisited }) => {

//     const availableStates = states.filter(st => (st === "Other" || !statesVisited.map(s => s.stateName).includes(st)));

//     const handleStateChange = (e) => {
//         let data = [...statesVisited];
//         data[index].stateName = e.target.value;
//         setStatesVisited(data);
//         console.log(statesVisited);
//     };

//     const handleOtherStateChange = (e) => {
//         let data = [...statesVisited];
//         data[index].otherState = e.target.value;
//         setStatesVisited(data);
//         console.log(statesVisited);
//     };

//     const handleCityChange = (e) => {
//         let data = [...statesVisited];
//         data[index].city = e.target.value;
//         setStatesVisited(data);
//         console.log(statesVisited);
//     };

//     const handleDurationChange = (e) => {
//         let data = [...statesVisited];
//         data[index].durationLived = e.target.value;
//         setStatesVisited(data);
//         console.log(statesVisited);
//     };

//     return (
//         <div>
//             <Box style={{ paddingTop: "20px", marginBottom: '20px', backgroundColor: '#dedede', height: s.stateName !== "Other" ? '300px' : '350px', borderRadius: '10px' }}
//                 sx={{ ml: { xs: '10px', md: '400px', lg: '450px' }, width: { xs: '350px', md: '400px', lg: '400px' } }}>
                
//                 <FormControl style={{ width: "225px" }}>
//                     <Typography style={{ fontSize: '16px', fontWeight: '1000' }}>Which country do you live in?</Typography>
//                     <Select
//                         style={{ backgroundColor: '#dedede', borderBottom: '2px solid black' }}
//                         MenuProps={{
//                             autoFocus: false,
//                             disableAutoFocusItem: true,
//                             disableEnforceFocus: true,
//                             disableAutoFocus: true
//                         }}
//                         value={s.stateName}
//                         onChange={handleStateChange}
//                     >
//                         {states.map(st => (
//                             <MenuItem key={st} style={{ display: availableStates.includes(st) ? "block" : "none" }} value={st}>{st}</MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>

//                 {s.stateName === "Other" && (
//                     <Input 
//                         style={{ marginTop: '15px' }} 
//                         value={s.otherState}
//                         placeholder='Residence'
//                         classes={{ focused: 'custom-focused-input' }}
//                         onChange={handleOtherStateChange}
//                     />
//                 )}

//                 <Typography style={{ paddingTop: '20px', color: 'black', fontSize: '16px', fontWeight: '1000' }}>Which city do you live in?</Typography>
//                 <Input 
//                     type='text'
//                     value={s.city}
//                     placeholder='City'
//                     classes={{ focused: 'custom-focused-input' }}
//                     onChange={handleCityChange}
//                 />

//                 <Typography style={{ paddingTop: '20px', color: 'black', fontSize: '16px', fontWeight: '1000' }}>How many languages do you speak?</Typography>
//                 <Input 
//                     type='text'
//                     value={s.city}
//                     placeholder='City'
//                     classes={{ focused: 'custom-focused-input' }}
//                     onChange={handleCityChange}
//                 />

                


//                 <Typography style={{ paddingTop: '20px', color: 'black', fontSize: '16px', fontWeight: '1000' }}>How long have you lived in the state (in years)?</Typography>
//                 <Input 
//                     type='number' 
//                     min={0} 
//                     value={s.durationLived}
//                     placeholder='Duration Lived (in years)'
//                     classes={{ focused: 'custom-focused-input' }}
//                     onChange={handleDurationChange}
//                 />
//             </Box>
//         </div>
//     );
// };

// export default State;
