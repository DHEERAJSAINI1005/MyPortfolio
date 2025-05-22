import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const contact = [
    {
        id: 1,
        icon: <LocationOnIcon />,
        label: 'Urlana Kalan, Panipat - 132103',
        // type: 'address',
        props:{
            href:"https://www.google.com/maps?q=37.7749,-122.4194",
            target:"_blank",
        }
    },
    {
        id: 2,
        icon: <WhatsAppIcon />,
        label: '+91 7777-004907',
        // type: 'phone',
        props: {
            component:'a',
            href:"tel:7777-004907"
        }
    },
    {
        id: 3,
        icon: <EmailIcon />,
        label: 'bharatmanchanda13@gmail.com',
        // type: 'email',
        props:{}
    }
];