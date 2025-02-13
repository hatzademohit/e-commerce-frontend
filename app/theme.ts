'use client'
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';

interface HeaderOptions {
    backgroundColor?: CSSProperties['color'];
}

declare module '@mui/material/styles' {
    export interface Theme {
        header?: HeaderOptions;
    }

    export interface ThemeOptions {
        header?: HeaderOptions;
    }
}

export const projectTheme = createTheme({

    header: {
        backgroundColor: 'black',
    },
    
    typography: {
        fontFamily: 'kyn',
        h1: {
            fontSize: 20,
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform: 'capitalize'
                }
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    fontWeight: 200,
                    backgroundColor: '#000000'
                }
            }
        },
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    fontWeight: 200,
                    p:{
                        fontWeight: 200,
                        fontSize: '14px'
                    }
                },
            }
        }
    }
});
