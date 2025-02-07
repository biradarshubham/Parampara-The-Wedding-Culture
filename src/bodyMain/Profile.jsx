
import { useContext, useEffect, useState } from 'react';
import profile1 from '../assets/profile.jpg';
import { AuthContext } from '../contexts/Context';
import axios from 'axios';


const Profile = () => {
    const { email } = useContext(AuthContext)
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/register')
            .then(response => {
                const user = response.data.find(user => user.email === email);
                if (user) {
                    setData(user);
                }
            })
            .catch(error => {
                console.error("Error fetching user details:", error);
            });
    }, [email]);

    if (!data) {
        return <div>Loading...</div>;
    }

    

    return (
        <div className="container">
            <div className="profile-header">
                <img src={profile1} alt="Profile Picture" className="profile-image" />
                <div className='profile-names'>
                <h1 className="profile-name">{data.firstName} {data.lastName}</h1>
                <p className="profile-title">Contact: {data.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;

