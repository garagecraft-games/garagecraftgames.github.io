import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import {SocialLinks} from "../components/SocialLinks";
import CodeBlock from '@theme/CodeBlock';



function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const content = (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="text--right container">
                <p className="hero__title">garagecraft.games</p>
                <p className="hero__subtitle"></p>
                <p className="hero__subsubtitle"></p>
            </div>
        </header>
    );

    return null;
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="indie game development">
            <HomepageHeader />
            <main style={{  display:"flex",flex:1,flexDirection:"column"}}>
                <div className="hey">
                    <img src={"/img/title.png"}  style={{maxWidth:"25%",marginLeft:"auto"}} />
                    <div style={{display:"flex"}}>
                        <img src={"/img/logo-full.png"} style={{marginLeft:"auto"}} />
                    </div>
                </div>

                <SocialLinks />

            </main>
        </Layout>
    );
}