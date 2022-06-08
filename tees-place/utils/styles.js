import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    navigator: {
        backgroundColor: '#203040',
        '& .a': {
            color: '#ffffff',
            marginLeft: '10px', 
        }
    },
    main: {
        minHeight: '80vh',
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grow: {
        flexGrow: 1
    },
    footer: {
        marginTop: '10px',
        textAlign: 'center',
    },
    section: {
        marginTop: '10px',
        marginBottom: '10px',
    }
});

export default useStyles;