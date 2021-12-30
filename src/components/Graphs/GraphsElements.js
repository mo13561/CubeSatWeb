import styled, { keyframes } from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import TextField from '@mui/material/TextField';
import "react-dates/lib/css/_datepicker.css";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled as s} from '@mui/material/styles';

export const Cont = styled.div`
  background: linear-gradient(
      20deg,
      hsl(${40}, 60%, 65%),
      hsl(${360}, 64%, 60%)
      );
  overflow: hidden;
  overflow-y: hidden;
  white-space: hidden;
`;