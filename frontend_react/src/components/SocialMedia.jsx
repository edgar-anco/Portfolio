import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/edgar-anco" target="_blank">
                <BsGithub />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/edgar-anco/" target="_blank">
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/edanco10/" target="_blank">
                <BsInstagram />
            </a>
        </div>
    </div>
);

export default SocialMedia;