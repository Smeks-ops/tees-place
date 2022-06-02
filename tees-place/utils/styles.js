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
    }
});

export default useStyles;