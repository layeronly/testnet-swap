import React from 'react';
import onlyimage from '../../assets/images/onlywhite.png'


interface ComingSoonPageProps {
    onlyImage?: boolean;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ onlyImage }) => {
    // Jika onlyImage true, hanya tampilkan gambar
    if (onlyImage) {
        return <img src={onlyimage} alt="OnlyLogo" style={styles.gifImage} />;
    }

    // Tampilkan halaman lengkap tanpa timer
    return (
        <div style={styles.container}>
            <img src={onlyimage} alt="OnlyLogo" style={styles.gifImage} />
            <h1 style={styles.header}>Farm Liquidity Testnet Coming Soon</h1>
        </div>
    );
};

// Mendefinisikan tipe untuk gaya menggunakan React.CSSProperties
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
        backgroundColor: 'none',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        marginBottom: '20px',
        fontSize: '2.5rem',
        color: '#666',
    },
    gifImage: {
        maxWidth: '50%',
        height: 'auto',
        marginBottom: '20px',
    },
};

export default ComingSoonPage;
