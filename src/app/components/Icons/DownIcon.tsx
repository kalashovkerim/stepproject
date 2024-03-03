import React from 'react';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';

const DownIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" >
            <path d="M4 9L12 17L20 9" stroke="#121212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    );
};

export default DownIcon;