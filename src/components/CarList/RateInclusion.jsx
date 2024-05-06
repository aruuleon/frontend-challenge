import {Dialog, DialogTitle, DialogContent, IconButton} from '@mui/material';
import {KeyboardArrowRight, Close} from '@mui/icons-material';

export const RateInclusion = ({open, handleClose, rate}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
            '& .MuiDialog-paper': { 
                width: '50%', borderRadius: '10px'
            }
            }}
        >
            <DialogTitle id="alert-dialog-title" sx={{color:'#d51a33', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize:'14px', fontFamily: 'Rubik bold', marginLeft: '10px'}}>
                Rate information
                <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" sx={{color:'#b6b5b5'}}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <p className='rate-car-title'>{rate[0]} - {rate[1].RateData.name}</p>
                {
                    rate[1].RateData.inclusions ?
                    rate[1].RateData.inclusions.map((inclusion, id) => {
                        return (
                            <div key={id} className='rate-inclusions-container'>
                                <KeyboardArrowRight sx={{color: '#d51a33', fontSize:'20px'}} />
                                <p key={id}> {inclusion} </p>
                            </div>
                        )
                    }) : 
                    <div className='rate-inclusions-container'>
                        <KeyboardArrowRight sx={{color: '#d51a33', fontSize:'20px'}} />
                        <p> No inclusions available </p>
                    </div>
                }
            </DialogContent>
        </Dialog>
    )
}