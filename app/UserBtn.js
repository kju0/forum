'use client'
import React, { useState } from 'react';
import { Button } from '@mui/material'

export default function HeaderProfile() {
    let session = { name: 'jooyoung', email: "jujulia3040@gmail.com", image: 'https://static.wadiz.kr/landing/media/lupi-characters-introduce-01.9d1ae6ad.jpg' };
    const [isDropdownView, setDropdownView] = useState(false);

    let menuList = ['Profile', 'Search History', 'Analysis History', 'Sign Out'];

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView);
    };

    const handleBlurContainer = () => {
        setTimeout(() => {
            setDropdownView(false);
        }, 200);
    };

    return (
        React.createElement("div", { className: "container", onBlur: handleBlurContainer },
            React.createElement("div", null,
                React.createElement("label", { onClick: handleClickContainer },
                    React.createElement(Button, { className: styles.but, onClick: handleClickContainer, startIcon: React.createElement("img", { src: session.image, alt: "my", width: "20px" }) },
                        "T",
                        isDropdownView ? '▲' : '▼')
                )
            ),
            isDropdownView && (
                React.createElement("div", null,
                    React.createElement("p", null, "Profile"),
                    React.createElement("p", null, "Profile"),
                    menuList.map((_, i) => (
                        React.createElement("p", { key: i, onClick: () => console.log(`${menuList[i]}`) }, menuList[i])
                    ))
                )
            )
        )
    );
}
