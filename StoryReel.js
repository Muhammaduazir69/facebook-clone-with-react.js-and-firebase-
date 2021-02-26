import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_x1P1Z0B2x_NGOXq2yeZ9D6NkvSTLk4W9SQ&usqp=CAU"
                profileSrc="https://pbs.twimg.com/profile_images/1248370761120641025/N-b33Iqk_400x400.jpg"
                title="Muhammad Uzair"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wkbrJiwLWZmBAB2vdpRxuYWZncPgPDGhsg&usqp=CAU"
                profileSrc="https://pbs.twimg.com/profile_images/1248370761120641025/N-b33Iqk_400x400.jpg"
                title="Unknown"
            />
            <Story
                image="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8f4f6df9e7082c8f74d999bcfb424b46-803732431591804895969/JPEG_20200610_210135_1063101294685885996.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/1248370761120641025/N-b33Iqk_400x400.jpg"
                title="Syed fozan"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPcAdVrN0yemnwpdsoxQlVSubN0KVm-U19w&usqp=CAU"
                profileSrc="https://pbs.twimg.com/profile_images/1248370761120641025/N-b33Iqk_400x400.jpg"
                title="Muhammad Uzair"
            />
        </div>
    )
}

export default StoryReel
