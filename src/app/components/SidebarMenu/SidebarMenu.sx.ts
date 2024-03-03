import {SxProps} from "@mui/system";

export const sideBarCont: SxProps = {
    width: '20%',
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection:'column',
    gap:'39px',
    alignItems: 'center',

    '&:hover': {
        cursor: "pointer"
    }
}