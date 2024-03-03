import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { colors } from './colors';


const roboto = Roboto({
    weight: ['300','400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
})

declare module '@mui/material/styles' {
    interface Components {
        MainMenuFrameComponent: {},
        GameButtonComponent: {}
    }
}

export const theme = createTheme({
    palette: {
        mode: 'light'
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },

    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    fontWeight: '400',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    height: 'fit-content',
                    textTransform: 'none',
                    backgroundColor: colors.blue,
                    fontSize: '14px',
                    borderRadius: '8px',
                    fontWeight: '400',
                    color: 'white',
                    width: 'auto',
                    padding: '11px 43px',
                    '&:hover': {
                        backgroundColor: colors.blue,
                    },
                }
            }
        },
        MainMenuFrameComponent: {
            styleOverrides: {
                root: {
                    width: 250,
                    height: 400,
                    border: `12px ${colors.primary}`,
                    borderStyle: 'ridge solid',
                    borderRadius: '36px',
                }
            }
        },
        GameButtonComponent: {
            styleOverrides: {
                root: {
                    width: 200,
                    height: 40,
                    borderTop: `1px solid ${colors.lime_green}`,
                    borderLeft: `1px solid ${colors.lime_green}`,
                    background: colors.secondary,
                    clipPath: `polygon(
                        4% 0,
                        100% 0,
                        100% 80%,
                        94% 100%,
                        0 100%,
                        0 20%
                    )`,
                    '&:hover': {
                        border: 'none',
                        background: colors.primary
                    }
                }
            }
        }
    }
})