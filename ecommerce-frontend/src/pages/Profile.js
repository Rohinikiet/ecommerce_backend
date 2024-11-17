import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState({});
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            const { data } = await axios.get("/api/users/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(data);
        };
        fetchProfile();
    }, []);

    const handleSave = async () => {
        const token = localStorage.getItem("token");
        await axios.put(`/api/users/${user.id}`, user, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setEditMode(false);
    };

    return (
        <div>
            <h1>Profile</h1>
            <input
                type="text"
                value={user.username}
                disabled={!editMode}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <button onClick={() => setEditMode(!editMode)}>
                {editMode ? "Save" : "Edit"}
            </button>
        </div>
    );
};

export default Profile;
