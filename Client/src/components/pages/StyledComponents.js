import { styled } from '@mui/system';
import { TextField, FormControl }from '@mui/material';

//Styles the TextField outlined variant component from MUI
const StyledTextField = styled(TextField)`
    & label.Mui-focused {
        color: var(--color-primary);
    }

    :hover {
        & label.MuiFormLabel-root {
            color: var(--color-primary);
        }
    }
    
    & .MuiOutlinedInput-root {
        & fieldset {
            border-radius: 0;
        }
        &:hover fieldset {
            border-color: var(--color-primary);
        }
        &.Mui-focused fieldset {
            border-color: var(--color-primary);
        }
    }
`;

//Styles the Select component throught the FormControl component from MUI
const StyledFormControl = styled(FormControl)`
    & label.Mui-focused {
        color: var(--color-primary)
    }

    :hover {
        & label.MuiFormLabel-root {
            color: var(--color-primary);
        }
    }

    & .MuiOutlinedInput-root {
        & fieldset {
            border-radius: 0;
        }
        &:hover fieldset {
            border-color: var(--color-primary);
        }
        &.Mui-focused fieldset {
            border-color: var(--color-primary);
        }
    }
`;

export { StyledTextField, StyledFormControl };