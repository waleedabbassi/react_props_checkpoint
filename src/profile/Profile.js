import React from 'react'
import PropTypes from 'prop-types'


const Profile = ({ fullName, bio, profession, children, handleName }) => {

    const styles = {
        container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFEFD5",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        },
        image: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "20px",
        },
        name: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        },
        bio: {
        fontSize: "16px",
        marginBottom: "10px",
        },
        profession: {
        fontSize: "16px",
        marginBottom: "10px",
        },
        button: {
            fontSize: "16px",
            marginBottom: "10px",
            backgroundColor:"#FA8072",
            borderRadius:"50px",
            },
    };

return (
    <div style={styles.container}>
    <img src={children} alt="Profile" style={styles.image} />
    <h2 style={styles.name}>{fullName}</h2>
    <p style={styles.bio}>{bio}</p>
    <p style={styles.profession}>{profession}</p>
    <button style={styles.button} onClick={() => handleName(fullName)}>Click here</button>
    </div>
)
};

Profile.defaultProps = {
fullName:"******",
bio:"*******",
profession:"********",
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element,
    handleName: PropTypes.func,
};

export default Profile;