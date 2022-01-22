import styled from 'styled-components';
import { styled as s} from '@mui/material/styles';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { IconButton } from '@mui/material';
import "react-dates/lib/css/_datepicker.css";


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

export const IButton = s(IconButton)({
  position: 'relative',
  margin: 'auto',
});