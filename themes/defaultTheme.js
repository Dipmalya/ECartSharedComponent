const defaultTheme = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    button: {
        primary: {
            color: '#FFF',
            borderColor: '#0E546C',
            backgroundColor: '#0E546C',
            borderWidth: '1px',
            padding: '12px 22px',
            fontWeight: '700',
            borderRadius: '5px',
            fontSize: '18px',
            focus: {
                color: '#FFF',
                backgroundColor: '#042338',
                borderColor: '#042338'
            }
        },
        secondary: {
            color: '#000',
            borderColor: '#E5E6E8',
            backgroundColor: '#E5E6E8',
            borderWidth: '1px',
            padding: '12px 22px',
            fontWeight: '700',
            borderRadius: '5px',
            fontSize: '18px',
            focus: {
                color: '#000',
                backgroundColor: '#C9CACC',
                borderColor: '#C9CACC'
            }
        },
        tertiary: {
            color: '#071013',
            borderColor: '#324F60',
            backgroundColor: '#FFF',
            borderWidth: '1px',
            padding: '12px 22px',
            fontWeight: '700',
            borderRadius: '5px',
            fontSize: '18px',
            focus: {
                color: '#040A0D',
                backgroundColor: '#E4EBED',
                borderColor: '#040A0D'
            }
        }
    },
    input: {
        number: {
            fontSize: '22px',
            border: 0,
            button: {
                borderRadius: '50%',
                fontSize: '20px',
                color: '#FFF',
                backgroundColor: '#0E546C',
                borderColor: '#0E546C'
            }
        },
        password: {
            fontSize: '18px',
            borderRadius: '5px',
            border: '1px solid #989FA1',
            active: {
                border: '1px solid #042338',
            }
        }
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        color: '#333450',
        hover: {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            color: '#000'
        }
    }
};

export default defaultTheme;