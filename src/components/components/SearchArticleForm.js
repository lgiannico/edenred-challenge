import React,{ useState }  from 'react';
import { Button, Paper ,Grid,MenuItem,Select,TextField ,InputLabel} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';  
import FormControl from '@material-ui/core/FormControl';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles({
    title: {
        textAlign: 'center',
    },
    formControl:{
        margin: 10,
        minWidth: 200,
      
    },
    Button:{
        backgroundColor:"#de554b",
        minWidth: 150,
        color:'white'
        
    }
    
})

export default function SearchArticleForm({handleFormValues}) {


    const[form,compForm]=useState({

        sinceDate:(new Date()),
        toDate:(new Date()),
        country:'ar',
        keyWord:""
    })
 

    const handleSinceDateChange = (date) => {
        compForm({
             ...form,
            sinceDate:date
        });
    };

    const handleToDateChange = (date) => {
        compForm({
             ...form,
             toDate:date
        });
    };

    const handleChanges=e=>{
        compForm({
            ...form,
            [e.target.name]:e.target.value
       });
    }

    const formatDate = (date)=>{
        let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1)+ "-" +  date.getDate()
         return formatted_date;
        }

    const handleSubmit=()=>{
    
    }

    const classes = useStyles();
    
    return (
        <div style={{ padding: 20 }}>
        <Paper>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={1}>
                <Grid item xs={12}  >
                    <h2 className={classes.title}>Buscar Noticias</h2>
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={2}  >
                     
                    <KeyboardDatePicker
                            name="sinceDate"
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="fecha desde"
                            value={form.sinceDate}
                            onChange={handleSinceDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                    />
                    </Grid>
                    <Grid item xs={2}  >
                    <KeyboardDatePicker
                            name="toDate"
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="fecha hasta"
                            value={form.toDate}
                            onChange={handleToDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            maxDate={new Date()}
                    />
                      </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={2}  >
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Pais</InputLabel>
                            <Select
                                name="country"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={form.country}
                                onChange={handleChanges}
                                >
                                <MenuItem value={'ar'}>Argentina</MenuItem>
                                <MenuItem value={'mx'}>Mexico</MenuItem>
                                <MenuItem value={'us'}>Estados Unidos</MenuItem>
                            </Select>
                        </FormControl>
                </Grid>
                <Grid item xs={2}  >
                    <TextField id="standard-basic" label="Palabra clave" onChange={handleChanges} name="keyword"/>
                </Grid>
                <Grid item xs={2}  >
                    <Button type="submit" variant="contained" className={classes.Button} size={'large'} onClick={()=>handleFormValues(form)}>
                        Buscar 
                    </Button>
                </Grid>
                
             </Grid>
           
        </Paper>
       
        </div> 
    )
}
