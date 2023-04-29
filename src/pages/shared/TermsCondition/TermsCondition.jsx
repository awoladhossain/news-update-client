/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <Container>
            <h2>Welcome to our news site! By visiting and using our website, you agree to the following terms and conditions:
</h2>
        <p> Age Limit: You must be at least 18 years of age or have the consent of a parent or legal guardian to use our website.

User Conduct: You agree to access and use our website for lawful purposes only. You will not post any content that is obscene, defamatory, threatening, or discriminatory in nature. You will also not engage in any activity that could harm our website or its users.

Intellectual Property: All content published on our website, including but not limited to articles, images, videos, and logos, is protected by copyright laws. You may not copy or reproduce any content without obtaining our prior written permission.

Third-Party Links: Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites and you access them at your own risk.

Disclaimer: We make every effort to ensure that the information on our website is accurate and up-to-date. However, we do not guarantee the accuracy, completeness, or timeliness of the information and we are not liable for any errors or omissions.

Privacy Policy: We take user privacy seriously and have a separate privacy policy that explains how we collect, use, and protect your personal information. By using our website, you agree to our privacy policy.

Changes to Terms and Conditions: We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of our website constitutes your acceptance of the modified terms. </p>
<p>Thank you for using our website!<Link to='/register'>Register Now!</Link></p>
        </Container>
    );
};

export default TermsCondition;