import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import esLocale from "date-fns/locale/es";
import './datePicker-style.css'

const DatePicker = ({selectedDate, handleDateChange, label}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label={label}
          format="dd-MM-yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          cancelLabel="Cancelar"
          okLabel="Aceptar"
          maxDate={new Date()}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;