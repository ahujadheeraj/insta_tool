import Slider from '@material-ui/core/Slider';
import {withStyles} from '@material-ui/core/styles';

const marks = [
    {
        value: 0,
        label: 0,
    },
    {
        value: 10000,
        label: 10000,
    },
    {
        value: 20000,
        label: 20000,
    },
    {
        value: 30000,
        label: 30000,
    },
    {
        value: 40000,
        label: 40000,
    },
    {
        value: 50000,
        label: 50000,
    },
];

const PrettoSlider = withStyles({
    root: {
      color: '#f02626',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: 'grey',
      border: '2px solid grey',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
      border: 'solid 2px pink',
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  export {PrettoSlider, marks};
