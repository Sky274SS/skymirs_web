import React from 'react';

const Profile = () => {
    return (
            <div className='content'>
                <div>
                    <img
                        src="https://img2.goodfon.ru/original/3200x1200/2/f2/mlechnyy-put-noch-zvezdy-4613.jpg"
                        alt="bg_img"
                        className='content_img'/>
                </div>
                <div className='profile_info'>
                    <img src="https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg"
                         alt="ava"
                         className='content_ava'/>
                    <div>
                        <div>name</div>
                        <div>description</div>
                    </div>
                </div>
                <div>
                    <div>post_name</div>
                    <div>input</div>
                    <div>button</div>
                </div>
                <div>
                    <img src="https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg"
                         alt="ava"
                         className='content_ava_micro'/>
                    <div>post_text</div>
                </div>
            </div>
    );
};

export default Profile;