import React from 'react';
import footerStyles from '../styles/footer.module.css';
import Link from 'next/link';

function Footer(props) {
    return (
        <section id={footerStyles.footer}>
            <div>
            <Link href="/"><p>Home</p></Link>
                <Link href="/menu"><p>Menu</p></Link>
                <Link href="/gallery"><p>Gallery</p></Link>
                <Link href="/location"><p>Location</p></Link>
            </div>
        </section>
    );
}

export default Footer;