import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Selector() {
  const classes = useStyles();
  const [selector, setSelector] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelector(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const areas = ['Comercial, Ventas y Negocios','Administración, Contabilidad y Finanzas','Tecnología, Sistemas y Telecomunicaciones','Producción y Manufactura','Oficios y Otros','Abastecimiento y Logística','Salud, Medicina y Farmacia','Recursos Humanos y Capacitación']

  return (
    <div>
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Seleccionar</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selector}
          onChange={handleChange}
        >
          <MenuItem value="1">
            <em>Selecciona un área</em>
          </MenuItem>

          {areas.map((data) => {
          return <MenuItem value={10}>{data}</MenuItem>
          })
        }
        </Select>
      </FormControl>
    </div>
  );
}